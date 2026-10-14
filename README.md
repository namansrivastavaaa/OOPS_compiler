# 🚀 Specialized OOP Compiler (Java & Python)

An interactive, high-performance web-based code editor and compiler environment specialized for Object-Oriented Programming (OOP) questions in **Java 17** and **Python 3**. Built with **Monaco Editor**, automated multi-test-case verification, private/hidden test case evaluation, and zero-delay local execution.

---

## 🌟 Features

- **☕ Dual Language Support**: Code seamlessly in **Java** or **Python** with automatic boilerplate and syntax handling.
- **⚡ Zero-Delay Local Execution**: Run tests with instantaneous sub-second feedback using the lightweight Node.js execution backend.
- **🔒 Hidden / Private Test Cases**: Evaluate solutions against 4 comprehensive test cases per problem (1 public sample + 3 hidden test cases) with a toggleable reveal feature.
- **💻 Monaco Editor**: Industry-standard code editor with syntax highlighting, auto-indentation, code formatting, font size controls, and bracket colorization.
- **📚 Curated Problem Sets**: Standard practice questions spanning core OOP topics:
  1. **Player Class** (Encapsulation, Aggregation, Array Searching & Sorting)
  2. **Laptop Class** (Filtering, Multi-criteria Evaluation)
  3. **Hotel Class** (Date/Month parsing, Case-insensitive Search, Bill ranking)
  4. **Movie Class** (Rating maximization, Genre & Language Sorting)
  5. **Insurance Class** (Summation, Threshold Filtering)
  6. **Coffee Class** (Average Calculations, Edge-case Empty Collections)
  7. **Employee & Manager** (**Inheritance**, `super` constructor chaining, Method Overriding)
  8. **Custom / Blank** (Scratchpad playground for custom OOP programs)

---

## 🛠️ Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (v16+)
- **For Java**: [JDK 17+](https://adoptium.net/) (with `javac` and `java` in PATH)
- **For Python**: [Python 3+](https://www.python.org/) (with `python` or `python3` in PATH)
- [Git](https://git-scm.com/)

---

## 🚀 How to Run Locally

To get instantaneous compilation and code execution with zero cold-start delay:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/namansrivastavaaa/OOPS_compiler.git
cd OOPS_compiler
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Backend Execution Server
```bash
node Backend/server.js
```
*The server will start running on port `3000` (`http://localhost:3000`).*

### 4️⃣ Open the Frontend
- Simply double click or open **`index.html`** in your favorite browser (or use VS Code Live Server).
- In the top navigation bar, ensure the **Server** toggle is switched to **`Local`**.
- Select any problem, write your solution in Java or Python, and click **Run** (or press `Ctrl + Enter`)!

---

## ☁️ Running via Cloud Backend

If you don't want to run the backend locally:
1. Open `index.html`.
2. Toggle the **Server** selector in the header to **`Cloud`**.
3. *Note: Cloud server on Render may take 40–60 seconds to wake up on the first request.*

---

## ⌨️ Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`Ctrl + Enter`** | Run Code against all test cases |
| **`Alt + J`** | Switch to Java mode |
| **`Alt + P`** | Switch to Python mode |
| **`Ctrl + =` / `Ctrl + -`** | Increase / Decrease Font Size |
| **`Esc`** | Close Output Drawer |

---

## 📂 Project Structure

```text
OOPS_compiler/
├── Backend/
│   ├── server.js          # Unified Node.js Java & Python execution engine
│   └── update.js          # Helper maintenance script
├── app.js                 # Frontend application logic, problem sets & test runner
├── index.html             # Application UI structure and modals
├── index.css              # Custom styling, design tokens & dark-mode theme
├── Dockerfile             # Container configuration for cloud deployment
├── package.json           # Backend dependencies and configuration
└── README.md              # Project documentation and run guide
```

---

## 👤 Author

Developed by [Naman Srivastava](https://github.com/namansrivastavaaa).
Repository: [https://github.com/namansrivastavaaa/OOPS_compiler](https://github.com/namansrivastavaaa/OOPS_compiler)
