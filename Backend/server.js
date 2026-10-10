const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Run local Java execution
app.post('/execute', (req, res) => {
    const { files, stdin } = req.body;
    
    if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files provided" });
    }

    const code = files[0].content;
    const workDir = path.join(__dirname, 'temp_' + crypto.randomBytes(8).toString('hex'));
    
    fs.mkdirSync(workDir, { recursive: true });
    
    // Write Main.java
    const javaFile = path.join(workDir, 'Main.java');
    fs.writeFileSync(javaFile, code);

    // Compile
    const compile = spawn('javac', ['Main.java'], { cwd: workDir });
    
    let compileError = '';
    
    compile.on('error', (err) => {
        fs.rmSync(workDir, { recursive: true, force: true });
        return res.json({
            compile: { code: 1, stderr: `Failed to start compiler. Is Java (JDK) installed? Error: ${err.message}` }
        });
    });

    compile.stderr.on('data', data => compileError += data.toString());
    
    compile.on('close', code => {
        if (code !== 0 && !res.headersSent) {
            fs.rmSync(workDir, { recursive: true, force: true });
            return res.json({
                compile: { code, stderr: compileError }
            });
        }
        
        // Run
        const run = spawn('java', ['Main'], { cwd: workDir });
        
        let runOutput = '';
        let runError = '';
        
        run.on('error', (err) => {
            fs.rmSync(workDir, { recursive: true, force: true });
            if (!res.headersSent) {
                return res.json({
                    run: { code: 1, output: '', stderr: `Failed to start Java runtime. Error: ${err.message}` }
                });
            }
        });

        if (stdin) {
            run.stdin.write(stdin);
            run.stdin.end();
        }
        
        run.stdout.on('data', data => runOutput += data.toString());
        run.stderr.on('data', data => runError += data.toString());
        
        run.on('close', code => {
            if (res.headersSent) return;
            fs.rmSync(workDir, { recursive: true, force: true });
            res.json({
                run: { code, output: runOutput, stderr: runError }
            });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Local Java Execution Server running on port ${PORT}`);
});
