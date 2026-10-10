const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// Replace all `code:` followed by backticks with `code: ""`
content = content.replace(/code:\s*`[\s\S]*?`/g, 'code: ""');

// Replace executeJavaCode block
const executeRegex = /async function executeJavaCode\([\s\S]*?throw lastError \|\| new Error\("All API endpoints failed"\);\s*}/;
const newExecute = `async function executeJavaCode(sourceCode, stdin) {
  const payload = {
    files: [{ name: "Main.java", content: sourceCode }],
    stdin: stdin || ""
  };

  try {
    const response = await fetch('http://localhost:3000/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error(\`Server Error: \${response.status}\`);
    return await response.json();
  } catch (err) {
    throw new Error('Failed to connect to local compiler server. Is server.js running?');
  }
}`;

content = content.replace(executeRegex, newExecute);

fs.writeFileSync('app.js', content);
console.log('Updated app.js successfully!');
