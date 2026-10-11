/* ==========================================================================
   Java OOP Compiler — Application Logic
   ========================================================================== */

// ---- Question Templates (Skeleton only — no solutions!) ----
const QUESTIONS = [
  {
    id: 1,
    name: "Player Class",
    description: `<h3>Question 1: Player Class</h3>
<p>Create a class <code>Player</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>name</code> (String), <code>runs</code> (int)</li>
  <li><code>playerType</code> (String), <code>matchType</code> (String)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>findPlayerWithLowestRuns</code></p>
<ul>
  <li>Input: Player[] and a playerType</li>
  <li>Find the lowest runs scored by players with the given type</li>
  <li>Ignore case while comparing playerType</li>
  <li>If no match is found, return 0</li>
</ul>
<p><strong>Method 2:</strong> <code>findPlayerByMatchType</code></p>
<ul>
  <li>Input: Player[] and a matchType</li>
  <li>Find all players matching the given match type (ignore case)</li>
  <li>Sort matching players by id in descending order</li>
  <li>Return the sorted array</li>
  <li>If no player matches, return null</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">1 Virat 12000 Batsman ODI
2 Rohit 9500 Batsman T20
3 Bumrah 200 Bowler ODI
4 Jadeja 2500 Batsman ODI
Batsman
ODI</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat</div>`,
    code: "",
    stdin: `1 Virat 12000 Batsman ODI
2 Rohit 9500 Batsman T20
3 Bumrah 200 Bowler ODI
4 Jadeja 2500 Batsman ODI
Batsman
ODI`,
    expectedOutput: `Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat`
  },
  {
    id: 2,
    name: "Laptop Class",
    description: `<h3>Question 2: Laptop Class</h3>
<p>Create a class <code>Laptop</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>brand</code> (String), <code>osType</code> (String)</li>
  <li><code>price</code> (double), <code>rating</code> (int)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>countOfLaptopsByBrand</code></p>
<ul>
  <li>Input: Laptop[] and a brand</li>
  <li>Count laptops whose brand matches (ignore case)</li>
  <li>Count only laptops with rating greater than 3</li>
  <li>Return the count</li>
</ul>
<p><strong>Method 2:</strong> <code>searchLaptopByOsType</code></p>
<ul>
  <li>Input: Laptop[] and an OS type</li>
  <li>Find all laptops matching the given OS type (ignore case)</li>
  <li>Sort matching laptops by id in descending order</li>
  <li>Return the sorted array</li>
  <li>If no match is found, return null</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">1 Dell Windows 55000 4
2 HP Windows 48000 3
3 Apple MacOS 120000 5
4 Dell Linux 62000 5
Dell
Windows</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell</div>`,
    code: "",
    stdin: `1 Dell Windows 55000 4
2 HP Windows 48000 3
3 Apple MacOS 120000 5
4 Dell Linux 62000 5
Dell
Windows`,
    expectedOutput: `Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell`
  },
  {
    id: 3,
    name: "Hotel Class",
    description: `<h3>Question 3: Hotel Class</h3>
<p>Create a class <code>Hotel</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>name</code> (String), <code>date</code> (String)</li>
  <li><code>rooms</code> (int), <code>wifi</code> (String), <code>bill</code> (double)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>noOfRoomsBookedInGivenMonth</code></p>
<ul>
  <li>Input: Hotel[] and a month</li>
  <li>Calculate total rooms booked in that month</li>
  <li>Date is in DD-MM-YYYY format — extract the month</li>
  <li>Return the total rooms booked</li>
</ul>
<p><strong>Method 2:</strong> <code>searchHotelByWifiOption</code></p>
<ul>
  <li>Input: Hotel[] and a Wi-Fi option</li>
  <li>Find all hotels matching wifi option (ignore case)</li>
  <li>Sort matching hotels by bill amount in descending order</li>
  <li>Return the second hotel in the sorted list</li>
  <li>If no matching hotel exists, return null</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">101 Royal Stay 12-05-2024 3 Free 2500
102 Green Park 16-08-2024 5 Paid 4200
103 City Inn 05-05-2024 2 Free 1800
104 Sunset Hotel 18-09-2024 4 Free 3600
05
Free</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total rooms booked in month 05 = 5
Second hotel with WiFi option Free by bill amount descending:
104 Sunset Hotel</div>`,
    code: "",
    stdin: `101 Royal Stay 12-05-2024 3 Free 2500
102 Green Park 16-08-2024 5 Paid 4200
103 City Inn 05-05-2024 2 Free 1800
104 Sunset Hotel 18-09-2024 4 Free 3600
05
Free`,
    expectedOutput: `Total rooms booked in month 05 = 5
Second hotel with WiFi option Free by bill amount descending:
104 Sunset Hotel`
  },
  {
    id: 4,
    name: "Movie Class",
    description: `<h3>Question 4: Movie Class</h3>
<p>Create a class <code>Movie</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>title</code> (String), <code>genre</code> (String)</li>
  <li><code>rating</code> (double), <code>language</code> (String)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>findHighestRatedByGenre</code></p>
<ul>
  <li>Input: Movie[] and a genre</li>
  <li>Find the movie with the highest rating in the given genre</li>
  <li>Ignore case while comparing genre</li>
  <li>If no match is found, return null</li>
</ul>
<p><strong>Method 2:</strong> <code>findMoviesByLanguage</code></p>
<ul>
  <li>Input: Movie[] and a language</li>
  <li>Find all movies matching the given language (ignore case)</li>
  <li>Sort matching movies by rating in descending order</li>
  <li>Return the sorted array</li>
  <li>If no movie matches, return null</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">1 Inception Sci-Fi 8.8 English
2 Interstellar Sci-Fi 8.6 English
3 Dangal Drama 8.4 Hindi
4 3Idiots Drama 8.1 Hindi
Sci-Fi
English</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6</div>`,
    code: "",
    stdin: `1 Inception Sci-Fi 8.8 English
2 Interstellar Sci-Fi 8.6 English
3 Dangal Drama 8.4 Hindi
4 3Idiots Drama 8.1 Hindi
Sci-Fi
English`,
    expectedOutput: `Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6`
  },
  {
    id: 5,
    name: "Insurance Class",
    description: `<h3>Question 5: Insurance Class</h3>
<p>Create a class <code>Insurance</code> with private attributes:</p>
<ul>
  <li><code>id</code> (int), <code>customerName</code> (String), <code>planType</code> (String)</li>
  <li><code>premium</code> (double), <code>tenure</code> (int)</li>
</ul>
<p>Create getters, setters, and a parameterized constructor.</p>
<p><strong>Method 1:</strong> <code>totalPremiumByPlanType</code></p>
<ul>
  <li>Input: Insurance[] and a planType</li>
  <li>Calculate total premium of all policies matching the planType</li>
  <li>Ignore case while comparing planType</li>
  <li>If no match is found, return 0</li>
</ul>
<p><strong>Method 2:</strong> <code>searchInsuranceByTenure</code></p>
<ul>
  <li>Input: Insurance[] and a minimum tenure (int)</li>
  <li>Find all policies with tenure >= given minimum tenure</li>
  <li>Sort matching policies by premium in ascending order</li>
  <li>Return the sorted array</li>
  <li>If no policy matches, return null</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">1 Alice Gold 15000 5
2 Bob Silver 8000 3
3 Charlie Gold 12000 4
4 Diana Platinum 25000 10
Gold
4</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0</div>`,
    code: "",
    stdin: `1 Alice Gold 15000 5
2 Bob Silver 8000 3
3 Charlie Gold 12000 4
4 Diana Platinum 25000 10
Gold
4`,
    expectedOutput: `Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0`
  },
  {
    id: 6,
    name: "Coffee Class",
    description: `<h3>Question 6: Coffee Class</h3>
<p>You are tasked with designing the <strong>Coffee Management System</strong>.</p>
<p>Create a class <code>Coffee</code> with private attributes:</p>
<ul>
  <li><code>id</code>: int</li>
  <li><code>name</code>: String</li>
  <li><code>type</code>: String</li>
  <li><code>price</code>: double</li>
</ul>
<p>Make getter, setter, and constructor for the above-mentioned <code>Coffee</code> class.</p>
<p>Create the following two static methods in the <code>Main</code>/<code>Solution</code> class:</p>
<p><strong>Task 1: Find all coffees which are priced higher than or equals to the average price of all coffee</strong></p>
<ul>
  <li>Create a static method that returns the <code>List&lt;Coffee&gt;</code> whose price is more than or equals to the average price of all coffee.</li>
  <li>This method will take 1 input: <code>List&lt;Coffee&gt; coffees</code>.</li>
  <li>The program should print id, name, type and price of all the coffees returned from the method.</li>
</ul>
<p><strong>Task 2: Find the highest priced coffee based on the type:</strong></p>
<ul>
  <li>Create a static method which will return the highest priced coffee based on the type mentioned.</li>
  <li>This method will take 2 inputs: <code>List&lt;Coffee&gt; coffees</code> and <code>String type</code>.</li>
  <li>Program should print the id, name and price for the highest priced coffee in the main method.</li>
  <li>If there is no Coffee found with the mentioned type, print <code>"No Coffee Found"</code>.</li>
</ul>
<p><strong>Note:</strong></p>
<ol>
  <li>Don't hardcode any test/sample data in your code. Just call the methods with the given input and print the raw result (no custom formatting).</li>
  <li>All comparisons should be case-insensitive.</li>
  <li>Please refer to the provided sample input and output for better understanding of the program.</li>
  <li>If the input for the size is 0 no other input will be provided.</li>
</ol>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects to be taken as input.</li>
  <li>From second line onwards, program should take id, Name, type, and price.</li>
</ul>
<div class="sample-label">Sample Input 1</div>
<div class="sample-block">3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
instant</div>
<div class="sample-label">Sample Output 1</div>
<div class="sample-block">1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
1
Davidoff
1015.0</div>
<div class="sample-label">Sample Input 2</div>
<div class="sample-block">0</div>
<div class="sample-label">Sample Output 2</div>
<div class="sample-block">No Coffee Found</div>`,
    code: "",
    stdin: `3
1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
3
Bru
instant
100.0
instant`,
    expectedOutput: `1
Davidoff
instant
1015.0
2
Barral-aged Coffee
ground
1000.0
1
Davidoff
1015.0`
  },
  {
    id: 7,
    name: "Custom / Blank",
    description: `<h3>Custom Java Program</h3>
<p>Write your own Java OOP program from scratch!</p>
<p>Use the editor to write any Java class, then compile and run it.</p>
<ul>
  <li>The main class <strong>must</strong> be named <code>Main</code></li>
  <li>Provide any required input in the <strong>Input (stdin)</strong> field</li>
  <li>Optionally paste expected output to auto-verify</li>
</ul>`,
    code: "",
    stdin: "",
    expectedOutput: ""
  }
];

// ---- Piston API (with fallback) ----
const PISTON_API_URLS = [
  "https://emkc.org/api/v2/piston/execute",
  "https://piston-api.vercel.app/api/v2/execute"
];

const ENDPOINTS = {
  local: 'http://localhost:3000/execute',
  cloud: 'https://oops-compiler.onrender.com/execute'
};

// ---- Cloud Server Wake-up Ping (One-time on page load) ----
let hasPingedCloud = false;

function pingCloudServerOnce() {
  if (hasPingedCloud) return;
  hasPingedCloud = true;

  // Render spins up sleeping containers on any incoming HTTP request
  fetch('https://oops-compiler.onrender.com/health', { method: 'GET', mode: 'no-cors' })
    .catch(() => {
      fetch('https://oops-compiler.onrender.com/', { method: 'GET', mode: 'no-cors' }).catch(() => {});
    });
}

// Immediately trigger wake-up ping as soon as page script loads
pingCloudServerOnce();

// ---- DOM Elements ----
const envSelector = document.getElementById("env-selector");
const templateListEl = document.getElementById("template-list");

async function executeJavaCode(sourceCode, stdin) {
  const selectedEnv = envSelector ? (envSelector.value || 'cloud') : 'cloud';
  const url = ENDPOINTS[selectedEnv] || ENDPOINTS.cloud;

  const payload = {
    files: [{ name: "Main.java", content: sourceCode }],
    stdin: stdin || ""
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error(`Server Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    if (selectedEnv === 'cloud') {
      throw new Error('Failed to connect to Render Cloud Server. Note: Render free tier takes ~30-60s to wake up on cold starts.');
    } else {
      throw new Error('Failed to connect to Local Server (http://localhost:3000). Did you start `node Backend/server.js`?');
    }
  }
}
const questionDisplayEl = document.getElementById("question-display");
const stdinInput = document.getElementById("stdin-input");
const outputDisplay = document.getElementById("output-display");
const expectedOutput = document.getElementById("expected-output");
const matchBadge = document.getElementById("match-badge");
const btnRun = document.getElementById("btn-run");
const btnReset = document.getElementById("btn-reset");
const btnFormat = document.getElementById("btn-format");
const btnClearOutput = document.getElementById("btn-clear-output");
const statusIndicator = document.getElementById("status-indicator");
const statusText = statusIndicator.querySelector(".status-text");
const execInfo = document.getElementById("exec-info");
const fileBadge = document.getElementById("file-badge");
const saveStatus = document.getElementById("save-status");
const saveDot = document.getElementById("save-dot");
const saveText = document.getElementById("save-text");
const btnFontDec = document.getElementById("btn-font-dec");
const btnFontInc = document.getElementById("btn-font-inc");
const fontSizeDisplay = document.getElementById("font-size-display");

let monacoEditor = null;
let currentQuestionId = 1;
let isSettingValue = false;
let saveTimeout = null;
let stdinSaveTimeout = null;

const STORAGE_PREFIX = "oops_compiler_";

let currentFontSize = 15;
try {
  const storedSize = parseInt(localStorage.getItem(`${STORAGE_PREFIX}font_size`), 10);
  if (storedSize >= 10 && storedSize <= 36) {
    currentFontSize = storedSize;
  }
} catch (e) {}

function setFontSize(newSize) {
  currentFontSize = Math.min(36, Math.max(10, newSize));
  try {
    localStorage.setItem(`${STORAGE_PREFIX}font_size`, currentFontSize);
  } catch (e) {}

  if (monacoEditor) {
    monacoEditor.updateOptions({ fontSize: currentFontSize });
  }
  if (fontSizeDisplay) {
    fontSizeDisplay.textContent = `${currentFontSize}px`;
  }
}

function getSavedCode(qId) {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}code_${qId}`);
  } catch (e) {
    return null;
  }
}

function saveCode(qId, code) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}code_${qId}`, code);
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function getSavedStdin(qId) {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}stdin_${qId}`);
  } catch (e) {
    return null;
  }
}

function saveStdin(qId, stdin) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}stdin_${qId}`, stdin);
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function clearSavedQuestion(qId) {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}code_${qId}`);
    localStorage.removeItem(`${STORAGE_PREFIX}stdin_${qId}`);
  } catch (e) {
    console.warn("LocalStorage clear error:", e);
  }
}

function updateSaveStatus(status) {
  if (!saveDot || !saveText) return;
  if (status === "saving") {
    saveDot.style.backgroundColor = "#f59e0b";
    saveText.textContent = "Saving...";
    saveText.style.color = "#f59e0b";
  } else if (status === "saved") {
    saveDot.style.backgroundColor = "#10b981";
    saveText.textContent = "Saved";
    saveText.style.color = "#888";
  }
}

// ---- Initialize Monaco Editor ----
function initMonaco() {
  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
  });

  require(["vs/editor/editor.main"], function () {
    monacoEditor = monaco.editor.create(document.getElementById("monaco-editor"), {
      value: QUESTIONS[0].code,
      language: "java",
      theme: "vs-dark",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      fontSize: currentFontSize,
      lineHeight: 24,
      fontLigatures: true,
      mouseWheelZoom: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 12, bottom: 12 },
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      wordWrap: "off",
      tabSize: 4,
      insertSpaces: true,
      renderWhitespace: "none",
      bracketPairColorization: { enabled: true },
      guides: {
        bracketPairs: true,
        indentation: true,
      },
      smoothScrolling: true,
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: "on",
      renderLineHighlight: "all",
      roundedSelection: true,
      contextmenu: true,
      folding: true,
      showFoldingControls: "mouseover",
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      scrollbar: {
        verticalScrollbarSize: 6,
        horizontalScrollbarSize: 6,
        verticalSliderSize: 6,
      }
    });

    // Ctrl+Enter to run
    monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runCode();
    });

    // Auto-save on editor input
    monacoEditor.onDidChangeModelContent(() => {
      if (isSettingValue) return;
      updateSaveStatus("saving");
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        saveCode(currentQuestionId, monacoEditor.getValue());
        updateSaveStatus("saved");
      }, 300);
    });

    // Restore last active question or default to 1
    let initialQuestionId = 1;
    try {
      const stored = localStorage.getItem(`${STORAGE_PREFIX}last_question_id`);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (QUESTIONS.some((q) => q.id === parsed)) {
          initialQuestionId = parsed;
        }
      }
    } catch (e) {}

    loadQuestion(initialQuestionId);
  });
}

// ---- Template List ----
function renderTemplateList() {
  templateListEl.innerHTML = "";
  QUESTIONS.forEach((q) => {
    const item = document.createElement("div");
    item.className = `template-item${q.id === currentQuestionId ? " active" : ""}`;
    item.dataset.id = q.id;
    item.innerHTML = `
      <span class="template-number">${q.id}</span>
      <span class="template-name">${q.name}</span>
    `;
    item.addEventListener("click", () => loadQuestion(q.id));
    templateListEl.appendChild(item);
  });
}

function loadQuestion(id) {
  const q = QUESTIONS.find((q) => q.id === id);
  if (!q) return;

  currentQuestionId = id;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}last_question_id`, id);
  } catch (e) {}

  // Update sidebar
  questionDisplayEl.innerHTML = q.description;

  // Update active state in list
  document.querySelectorAll(".template-item").forEach((el) => {
    el.classList.toggle("active", parseInt(el.dataset.id) === id);
  });

  // Determine code to load: saved draft or question template
  const savedCode = getSavedCode(id);
  const codeToSet = savedCode !== null ? savedCode : q.code;

  // Update editor
  if (monacoEditor) {
    isSettingValue = true;
    monacoEditor.setValue(codeToSet);
    monacoEditor.setScrollTop(0);
    isSettingValue = false;
    updateSaveStatus("saved");
  }

  // Determine stdin to load
  const savedStdin = getSavedStdin(id);
  stdinInput.value = savedStdin !== null ? savedStdin : (q.stdin || "");

  // Update expected output
  expectedOutput.value = q.expectedOutput || "";

  // Clear output
  clearOutput();

  // Update file badge
  if (fileBadge) {
    fileBadge.textContent = "Main.java";
  }
}

// ---- Run Code ----
let isRunning = false;

async function runCode() {
  if (isRunning || !monacoEditor) return;

  isRunning = true;
  const startTime = performance.now();

  // UI: Running state
  btnRun.classList.add("running");
  btnRun.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    <span>Running...</span>
  `;
  setStatus("running", "Compiling...");
  outputDisplay.innerHTML = '<span class="output-placeholder">Compiling and running...</span>';
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";

  try {
    const code = monacoEditor.getValue();
    const stdin = stdinInput.value;

    const result = await executeJavaCode(code, stdin);
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

    // Process result
    if (result.compile && result.compile.code !== 0) {
      // Compilation error
      const errorMsg = result.compile.stderr || result.compile.output || "Unknown compilation error";
      outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(errorMsg)}</span>`;
      setStatus("error", "Compilation Error");
      execInfo.textContent = `Compile failed • ${elapsed}s`;
    } else if (result.run) {
      const output = result.run.output || "";
      const stderr = result.run.stderr || "";

      if (result.run.code !== 0 && stderr) {
        // Runtime error
        outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(stderr)}</span>`;
        if (output) {
          outputDisplay.innerHTML += `\n${escapeHtml(output)}`;
        }
        setStatus("error", "Runtime Error");
        execInfo.textContent = `Runtime error • ${elapsed}s`;
      } else {
        // Success
        const displayOutput = output.replace(/\n$/, "");
        outputDisplay.innerHTML = `<span class="output-success">${escapeHtml(displayOutput)}</span>`;
        setStatus("ready", "Success");
        execInfo.textContent = `Executed in ${elapsed}s`;

        // Check against expected output
        checkOutput(displayOutput);
      }
    } else {
      outputDisplay.innerHTML = '<span class="output-error">No response from execution engine.</span>';
      setStatus("error", "Error");
      execInfo.textContent = "";
    }
  } catch (err) {
    outputDisplay.innerHTML = `<span class="output-error">Error: ${escapeHtml(err.message)}</span>`;
    setStatus("error", "Network Error");
    execInfo.textContent = "";
  } finally {
    isRunning = false;
    btnRun.classList.remove("running");
    btnRun.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span>Run</span>
    `;
  }
}

function checkOutput(actual) {
  const expected = expectedOutput.value.trim();
  if (!expected) {
    matchBadge.className = "match-badge";
    matchBadge.textContent = "";
    return;
  }

  const actualNorm = actual.trim().replace(/\r\n/g, "\n");
  const expectedNorm = expected.trim().replace(/\r\n/g, "\n");

  if (actualNorm === expectedNorm) {
    matchBadge.className = "match-badge match";
    matchBadge.textContent = "✓ Match";
  } else {
    matchBadge.className = "match-badge mismatch";
    matchBadge.textContent = "✗ Mismatch";
  }
}

// ---- Helpers ----
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function setStatus(state, text) {
  statusIndicator.className = `status-indicator${state === "running" ? " running" : state === "error" ? " error" : ""}`;
  statusText.textContent = text;
}

function clearOutput() {
  outputDisplay.innerHTML = '<span class="output-placeholder">Output will appear here after running your code...</span>';
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  execInfo.textContent = "";
}

// ---- Event Listeners ----
btnRun.addEventListener("click", runCode);

btnReset.addEventListener("click", () => {
  const hasSaved = getSavedCode(currentQuestionId) !== null;
  if (hasSaved) {
    const confirmed = confirm("Are you sure you want to reset? Your saved code for this question will be cleared.");
    if (!confirmed) return;
    clearSavedQuestion(currentQuestionId);
  }
  loadQuestion(currentQuestionId);
});

// Auto-save stdin changes
stdinInput.addEventListener("input", () => {
  clearTimeout(stdinSaveTimeout);
  stdinSaveTimeout = setTimeout(() => {
    saveStdin(currentQuestionId, stdinInput.value);
  }, 300);
});

// Immediate save before reload or accidental tab close
window.addEventListener("beforeunload", () => {
  if (monacoEditor && !isSettingValue) {
    saveCode(currentQuestionId, monacoEditor.getValue());
  }
  if (stdinInput) {
    saveStdin(currentQuestionId, stdinInput.value);
  }
});

btnFormat.addEventListener("click", () => {
  if (monacoEditor) {
    monacoEditor.getAction("editor.action.formatDocument")?.run();
  }
});

btnClearOutput.addEventListener("click", clearOutput);

// Verify expected output on change
expectedOutput.addEventListener("input", () => {
  const outputEl = outputDisplay.querySelector(".output-success");
  if (outputEl) {
    checkOutput(outputEl.textContent);
  }
});

// ---- Font Size Controls ----
if (btnFontInc) {
  btnFontInc.addEventListener("click", () => setFontSize(currentFontSize + 1));
}
if (btnFontDec) {
  btnFontDec.addEventListener("click", () => setFontSize(currentFontSize - 1));
}
if (fontSizeDisplay) {
  fontSizeDisplay.textContent = `${currentFontSize}px`;
}

// ---- Keyboard Shortcuts ----
document.addEventListener("keydown", (e) => {
  // Ctrl+Enter: Run code
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
  // Ctrl + Plus / Equal: Increase font size
  else if ((e.ctrlKey || e.metaKey) && (e.key === "=" || e.key === "+")) {
    e.preventDefault();
    setFontSize(currentFontSize + 1);
  }
  // Ctrl + Minus: Decrease font size
  else if ((e.ctrlKey || e.metaKey) && (e.key === "-" || e.key === "_")) {
    e.preventDefault();
    setFontSize(currentFontSize - 1);
  }
  // Ctrl + 0: Reset font size to default (15px)
  else if ((e.ctrlKey || e.metaKey) && e.key === "0") {
    e.preventDefault();
    setFontSize(15);
  }
});

// ---- Initialize ----
renderTemplateList();
initMonaco();

// ---- Layout Resizers ----
const sidebar = document.getElementById("sidebar");
const rightPane = document.getElementById("right-pane");
const gutterH = document.getElementById("gutter-h");

const editorSection = document.getElementById("editor-section");
const ioSection = document.getElementById("io-section");
const gutterV = document.getElementById("gutter-v");

// Horizontal resizing
let isResizingH = false;
gutterH.addEventListener("mousedown", (e) => {
  isResizingH = true;
  document.body.style.cursor = "col-resize";
  gutterH.classList.add("active");
});

// Vertical resizing
let isResizingV = false;
gutterV.addEventListener("mousedown", (e) => {
  isResizingV = true;
  document.body.style.cursor = "row-resize";
  gutterV.classList.add("active");
});

document.addEventListener("mousemove", (e) => {
  if (isResizingH) {
    const totalWidth = document.getElementById("app-main").clientWidth;
    const newWidth = (e.clientX / totalWidth) * 100;
    if (newWidth > 15 && newWidth < 85) {
      sidebar.style.width = `${newWidth}%`;
    }
  } else if (isResizingV) {
    const container = document.getElementById("right-pane");
    const containerRect = container.getBoundingClientRect();
    const newHeight = containerRect.bottom - e.clientY;
    const totalHeight = containerRect.height;
    const heightPercent = (newHeight / totalHeight) * 100;
    if (heightPercent > 10 && heightPercent < 80) {
      ioSection.style.height = `${heightPercent}%`;
    }
  }
});

document.addEventListener("mouseup", () => {
  if (isResizingH || isResizingV) {
    isResizingH = false;
    isResizingV = false;
    document.body.style.cursor = "default";
    gutterH.classList.remove("active");
    gutterV.classList.remove("active");
    if (monacoEditor) {
      // Trigger a resize on Monaco so it fills the new container size
      monacoEditor.layout();
    }
  }
});
