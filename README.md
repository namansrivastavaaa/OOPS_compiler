# 🚀 Specialized OOP Compiler (Java & Python)

# Completely Coded by GPT — Made for practicing specific Object-Oriented Programming questions.

An interactive web-based code editor and compiler built for practicing core OOP patterns in **Java 17** and **Python 3**, featuring automated evaluation, public & private test cases, and instantaneous local backend execution.

---

## ⚡ Quick Start: How to Run Locally

Get instant code execution with **zero cloud latency** by running the backend server locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/namansrivastavaaa/OOPS_compiler.git
cd OOPS_compiler
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Backend Server
```bash
node Backend/server.js
```
The execution server will be live on **`http://localhost:3000`**.

### 4️⃣ Launch the Frontend
- Open **`index.html`** in your browser.
- Make sure the **Server** toggle in the top-right header is set to **`Local`**.
- Write your code, select Java or Python, and hit **Run** (`Ctrl + Enter`)!

---

## ☁️ Cloud Execution Mode

If you don't want to run the server locally:
1. Open `index.html`.
2. Set the **Server** toggle in the header to **`Cloud`**.
3. *Note: Render free-tier instances sleep when inactive and may take 40–60 seconds to wake up on the first run.*

---

## 🌟 Key Features

- **🧠 AI/ML Technical Placement Quiz**: A comprehensive 40-question placement assessment across 8 core topics (SQL, AI Basics, EDA & Viz, Supervised Learning, Unsupervised Learning, Advanced ML, Generative AI & LLMs, Agentic AI & RAG) with Interactive & Timed Exam modes, question matrix, and instant scorecards.
- **☕ Dual Language Support**: Practice in either **Java 17** or **Python 3** with a single click (`Alt + J` / `Alt + P`).
- **🔒 Hidden / Private Test Cases**: Every problem has **5 test cases** (1 public sample + 4 private test cases, including null / no-match edge case verification). Test cases can be toggled using the **`👁️ Show Hidden Test Cases`** button.
- **⚡ Monaco Editor**: Integrated VS Code editor experience with bracket colorization, auto-formatting, and keyboard shortcuts.
- **💾 Auto-Save**: Your code is saved locally per question and per language as you type.

---

## 📚 Problem Sets

| # | Problem | Core Concepts |
| :---: | :--- | :--- |
| **1** | **Player Class** | Encapsulation, Array Search, Descending ID Sort |
| **2** | **Laptop Class** | Condition Filtering (`rating > 3`), Case-insensitive search |
| **3** | **Hotel Class** | Date Parsing (`DD-MM-YYYY`), Bill Ranking & 2nd Highest |
| **4** | **Movie Class** | Rating Maximization, Multi-field Object Sorting |
| **5** | **Insurance Class** | Premium Accumulation, Tenure Thresholds |
| **6** | **Coffee Class** | Average Price Math, Edge Case Collections |
| **7** | **Employee & Manager** | **Inheritance**, `super` Constructor, Method Overriding |
| **8** | **Product Management** | **Newer Format**: Command-driven Operations, Service Architecture |
| **9** | **Custom / Blank** | Freeform scratchpad for any custom Java / Python OOP code |

---

## ⌨️ Useful Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`Ctrl + Enter`** | Run code against all test cases |
| **`Alt + J`** | Switch to Java |
| **`Alt + P`** | Switch to Python |
| **`Ctrl + =` / `Ctrl + -`** | Zoom in / Zoom out editor font |
| **`Esc`** | Close execution output drawer |
| **`←` / `→`** | Navigate questions in AI/ML Quiz |
| **`1` / `2` / `3` / `4`** | Select options A/B/C/D in AI/ML Quiz |

---

## 📂 Project Architecture

```text
OOPS_compiler/
├── Backend/
│   ├── server.js          # Unified Node.js Java & Python execution engine
│   └── update.js          # Maintenance & update script
├── app.js                 # App state, Monaco init, problem sets & test runner
├── quiz-data.js           # 40-question placement question bank (8 topics)
├── quiz.js                # Quiz controller (Interactive & Exam modes, Scorecard)
├── quiz.css               # Styling for AI/ML assessment tabs, palette & cards
├── index.html             # Application UI and dual-tab layout
├── index.css              # Custom styling, dark mode theme & animations
├── Dockerfile             # Container configuration for cloud deployment
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🔗 Repository

- **GitHub**: [https://github.com/namansrivastavaaa/OOPS_compiler](https://github.com/namansrivastavaaa/OOPS_compiler)
- **Author**: [Naman Srivastava](https://github.com/namansrivastavaaa)
