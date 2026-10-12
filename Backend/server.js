const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoints for server wake-up ping
app.get('/', (req, res) => res.json({ status: "alive", message: "Java and Python execution server is running." }));
app.get('/health', (req, res) => res.json({ status: "ok" }));

function safeRemoveDir(dirPath) {
    try {
        fs.rmSync(dirPath, { recursive: true, force: true });
    } catch (e) {
        // Ignore deletion errors or retry once after a short delay
        setTimeout(() => {
            try { fs.rmSync(dirPath, { recursive: true, force: true }); } catch (_) {}
        }, 500);
    }
}

function getPythonCommand() {
    if (process.env.PYTHON_CMD) return process.env.PYTHON_CMD;
    return process.platform === 'win32' ? 'python' : 'python3';
}

// Unified code execution endpoint for Java and Python
app.post('/execute', (req, res) => {
    const { files, stdin, language } = req.body;
    
    if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files provided" });
    }

    const firstFile = files[0];
    const code = firstFile.content || "";
    const fileName = firstFile.name || "";
    
    // Determine language from explicit field or file extension
    let lang = (language || "").toLowerCase();
    if (!lang) {
        if (fileName.endsWith('.py')) lang = 'python';
        else lang = 'java';
    }

    const workDir = path.join(__dirname, 'temp_' + crypto.randomBytes(8).toString('hex'));
    fs.mkdirSync(workDir, { recursive: true });

    // ==========================================
    // PYTHON EXECUTION
    // ==========================================
    if (lang === 'python') {
        const pyFileName = 'main.py';
        const pyFilePath = path.join(workDir, pyFileName);
        fs.writeFileSync(pyFilePath, code);

        const pyCmd = getPythonCommand();
        let runOutput = '';
        let runError = '';
        let isDone = false;
        let timedOut = false;

        const executePythonProcess = (cmd) => {
            const run = spawn(cmd, ['-u', pyFileName], { cwd: workDir });

            const timer = setTimeout(() => {
                timedOut = true;
                try { run.kill('SIGKILL'); } catch (_) {}
            }, 15000);

            run.on('error', (err) => {
                clearTimeout(timer);
                if (err.code === 'ENOENT' && cmd === 'python') {
                    // Try fallback to 'python3' or 'py'
                    const fallback = process.platform === 'win32' ? 'py' : 'python3';
                    return executePythonProcess(fallback);
                }
                safeRemoveDir(workDir);
                if (!res.headersSent) {
                    return res.json({
                        run: {
                            code: 1,
                            output: '',
                            stderr: `Failed to start Python runtime. Is Python installed and in PATH? Error: ${err.message}`
                        }
                    });
                }
            });

            if (stdin) {
                run.stdin.write(stdin);
            }
            run.stdin.end();

            run.stdout.on('data', data => { runOutput += data.toString(); });
            run.stderr.on('data', data => { runError += data.toString(); });

            run.on('close', code => {
                if (isDone) return;
                isDone = true;
                clearTimeout(timer);
                safeRemoveDir(workDir);
                if (res.headersSent) return;
                res.json({
                    run: {
                        code: timedOut ? 124 : (code ?? 0),
                        output: runOutput,
                        stderr: timedOut ? (runError + '\nExecution timed out (15s limit).') : runError
                    }
                });
            });
        };

        return executePythonProcess(pyCmd);
    }

    // ==========================================
    // JAVA EXECUTION
    // ==========================================
    const javaFile = path.join(workDir, 'Main.java');
    fs.writeFileSync(javaFile, code);

    // Compile
    const compile = spawn('javac', ['Main.java'], { cwd: workDir });
    let compileError = '';

    compile.on('error', (err) => {
        safeRemoveDir(workDir);
        return res.json({
            compile: { code: 1, stderr: `Failed to start compiler. Is Java (JDK) installed? Error: ${err.message}` }
        });
    });

    compile.stderr.on('data', data => { compileError += data.toString(); });

    compile.on('close', code => {
        if (code !== 0 && !res.headersSent) {
            safeRemoveDir(workDir);
            return res.json({
                compile: { code, stderr: compileError }
            });
        }

        // Run Java process
        const run = spawn('java', ['Main'], { cwd: workDir });
        let runOutput = '';
        let runError = '';
        let timedOut = false;

        const timer = setTimeout(() => {
            timedOut = true;
            try { run.kill('SIGKILL'); } catch (_) {}
        }, 15000);

        run.on('error', (err) => {
            clearTimeout(timer);
            safeRemoveDir(workDir);
            if (!res.headersSent) {
                return res.json({
                    run: { code: 1, output: '', stderr: `Failed to start Java runtime. Error: ${err.message}` }
                });
            }
        });

        if (stdin) {
            run.stdin.write(stdin);
        }
        run.stdin.end();

        run.stdout.on('data', data => { runOutput += data.toString(); });
        run.stderr.on('data', data => { runError += data.toString(); });

        run.on('close', code => {
            clearTimeout(timer);
            if (res.headersSent) return;
            safeRemoveDir(workDir);
            res.json({
                run: {
                    code: timedOut ? 124 : (code ?? 0),
                    output: runOutput,
                    stderr: timedOut ? (runError + '\nExecution timed out (15s limit).') : runError
                }
            });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Unified Java & Python Execution Server running on port ${PORT}`);
});
