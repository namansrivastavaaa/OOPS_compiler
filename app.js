/* ==========================================================================
   Specialized OOP Compiler — Application Logic (Java & Python)
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
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, name, runs, playerType, and matchType.</li>
  <li>In the last two lines, take playerType and matchType for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
Batsman
ODI</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Lowest runs by Batsman = 2500
Players in ODI sorted by id desc:
4 Jadeja
3 Bumrah
1 Virat</div>`,
    code: "",
    stdin: `4
1
Virat
12000
Batsman
ODI
2
Rohit
9500
Batsman
T20
3
Bumrah
200
Bowler
ODI
4
Jadeja
2500
Batsman
ODI
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
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, brand, osType, price, and rating.</li>
  <li>In the last two lines, take brand and osType for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
Dell
Windows</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Count of Dell laptops with rating > 3 = 2
Laptops with OS Windows sorted by id desc:
2 HP
1 Dell</div>`,
    code: "",
    stdin: `4
1
Dell
Windows
55000
4
2
HP
Windows
48000
3
3
Apple
MacOS
120000
5
4
Dell
Linux
62000
5
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
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, name, date, rooms, wifi, and bill.</li>
  <li>In the last two lines, take month and wifi option for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
05
Free</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total rooms booked in month 05 = 5
Second hotel with WiFi option Free by bill amount descending:
104 Sunset Hotel</div>`,
    code: "",
    stdin: `4
101
Royal Stay
12-05-2024
3
Free
2500
102
Green Park
16-08-2024
5
Paid
4200
103
City Inn
05-05-2024
2
Free
1800
104
Sunset Hotel
18-09-2024
4
Free
3600
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
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, title, genre, rating, and language.</li>
  <li>In the last two lines, take genre and language for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
Sci-Fi
English</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Highest rated Sci-Fi movie: 1 Inception 8.8
Movies in English sorted by rating desc:
1 Inception 8.8
2 Interstellar 8.6</div>`,
    code: "",
    stdin: `4
1
Inception
Sci-Fi
8.8
English
2
Interstellar
Sci-Fi
8.6
English
3
Dangal
Drama
8.4
Hindi
4
3Idiots
Drama
8.1
Hindi
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
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects (n) to be taken as input.</li>
  <li>From second line onwards, program should take id, customerName, planType, premium, and tenure.</li>
  <li>In the last two lines, take planType and minimum tenure for search.</li>
</ul>
<div class="sample-label">Sample Input</div>
<div class="sample-block">4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
Gold
4</div>
<div class="sample-label">Sample Output</div>
<div class="sample-block">Total premium for Gold = 27000.0
Policies with tenure >= 4 sorted by premium asc:
3 Charlie 12000.0
1 Alice 15000.0
4 Diana 25000.0</div>`,
    code: "",
    stdin: `4
1
Alice
Gold
15000
5
2
Bob
Silver
8000
3
3
Charlie
Gold
12000
4
4
Diana
Platinum
25000
10
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
<p>Create the following two methods / functions:</p>
<p><strong>Task 1: Find all coffees which are priced higher than or equals to the average price of all coffee</strong></p>
<ul>
  <li>Returns the list of coffees whose price is &gt;= average price of all coffee.</li>
  <li>Input: list of coffees.</li>
  <li>Print id, name, type, and price of each matching coffee.</li>
</ul>
<p><strong>Task 2: Find the highest priced coffee based on the type:</strong></p>
<ul>
  <li>Returns the highest priced coffee matching the given type (ignore case).</li>
  <li>Input: list of coffees and type.</li>
  <li>Print id, name, and price for the highest priced coffee.</li>
  <li>If no Coffee is found with that type, print <code>"No Coffee Found"</code>.</li>
</ul>
<p><strong>Note:</strong></p>
<ol>
  <li>Don't hardcode any test/sample data. Read from stdin and print raw output.</li>
  <li>All comparisons should be case-insensitive.</li>
  <li>If the input for the count is 0, print <code>"No Coffee Found"</code>.</li>
</ol>
<p><strong>Input Notes:</strong></p>
<ul>
  <li>In first line, take number of objects to be taken as input.</li>
  <li>From second line onwards, program takes id, name, type, and price for each object.</li>
  <li>In the last line, take the search type.</li>
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
    description: "", // Dynamically updated per language
    code: "",
    stdin: "",
    expectedOutput: ""
  }
];

// ---- Endpoints ----
const ENDPOINTS = {
  local: 'http://localhost:3000/execute',
  cloud: 'https://oops-compiler.onrender.com/execute'
};

// ---- Cloud Server Wake-up Ping (One-time on page load) ----
let hasPingedCloud = false;

function pingCloudServerOnce() {
  if (hasPingedCloud) return;
  hasPingedCloud = true;

  fetch('https://oops-compiler.onrender.com/health', { method: 'GET', mode: 'no-cors' })
    .catch(() => {
      fetch('https://oops-compiler.onrender.com/', { method: 'GET', mode: 'no-cors' }).catch(() => {});
    });
}
pingCloudServerOnce();

// ---- State Management ----
const STORAGE_PREFIX = "oops_compiler_";

let currentQuestionId = 1;
let currentLanguage = "java"; // "java" | "python"

// Restore saved settings
try {
  const savedLang = localStorage.getItem(`${STORAGE_PREFIX}last_language`);
  if (savedLang === "java" || savedLang === "python") {
    currentLanguage = savedLang;
  }
  const savedQ = parseInt(localStorage.getItem(`${STORAGE_PREFIX}last_question_id`), 10);
  if (QUESTIONS.some(q => q.id === savedQ)) {
    currentQuestionId = savedQ;
  }
} catch (e) {}

let currentFontSize = 15;
try {
  const storedSize = parseInt(localStorage.getItem(`${STORAGE_PREFIX}font_size`), 10);
  if (storedSize >= 10 && storedSize <= 36) {
    currentFontSize = storedSize;
  }
} catch (e) {}

// Editor instance & timers
let monacoEditor = null;
let isSettingValue = false;
let saveTimeout = null;

// ---- DOM Elements ----
const envSelector = document.getElementById("env-selector");
const templateListEl = document.getElementById("template-list");
const questionDisplayEl = document.getElementById("question-display");

const editorSection = document.getElementById("editor-section");
const ioSection = document.getElementById("io-section");
const gutterV = document.getElementById("gutter-v");
const gutterH = document.getElementById("gutter-h");
const sidebar = document.getElementById("sidebar");

const outputDisplay = document.getElementById("output-display");
const expectedOutputDisplay = document.getElementById("expected-output-display");
const matchBadge = document.getElementById("match-badge");
const outputMeta = document.getElementById("output-meta");

const btnRun = document.getElementById("btn-run");
const btnRunText = document.getElementById("btn-run-text");
const btnReset = document.getElementById("btn-reset");
const btnFormat = document.getElementById("btn-format");
const btnClearOutput = document.getElementById("btn-clear-output");
const btnCloseOutput = document.getElementById("btn-close-output");

const statusIndicator = document.getElementById("status-indicator");
const statusText = statusIndicator.querySelector(".status-text");
const execInfo = document.getElementById("exec-info");
const fileBadge = document.getElementById("file-badge");

const saveDot = document.getElementById("save-dot");
const saveText = document.getElementById("save-text");

const btnFontDec = document.getElementById("btn-font-dec");
const btnFontInc = document.getElementById("btn-font-inc");
const fontSizeDisplay = document.getElementById("font-size-display");
const footerLangMode = document.getElementById("footer-lang-mode");

const btnLangJava = document.getElementById("btn-lang-java");
const btnLangPython = document.getElementById("btn-lang-python");

// ---- LocalStorage Helpers ----
function getSavedCode(qId, lang) {
  try {
    const key = `${STORAGE_PREFIX}code_${lang}_${qId}`;
    const val = localStorage.getItem(key);
    if (val !== null) return val;

    // Backward compatibility: If Java requested and old single-language code exists, migrate it
    if (lang === "java") {
      const oldVal = localStorage.getItem(`${STORAGE_PREFIX}code_${qId}`);
      if (oldVal !== null) {
        localStorage.setItem(key, oldVal);
        return oldVal;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

function saveCode(qId, lang, code) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}code_${lang}_${qId}`, code);
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
}

function clearSavedQuestion(qId, lang) {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}code_${lang}_${qId}`);
    if (lang === "java") {
      localStorage.removeItem(`${STORAGE_PREFIX}code_${qId}`);
    }
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
  } else {
    saveDot.style.backgroundColor = "#10b981";
    saveText.textContent = "Saved";
    saveText.style.color = "#888";
  }
}

// ---- Font Size Control ----
function setFontSize(newSize) {
  currentFontSize = Math.min(36, Math.max(10, newSize));
  try {
    localStorage.setItem(`${STORAGE_PREFIX}font_size`, currentFontSize);
  } catch (e) {}

  if (monacoEditor) monacoEditor.updateOptions({ fontSize: currentFontSize });
  if (fontSizeDisplay) fontSizeDisplay.textContent = `${currentFontSize}px`;
}

// ---- Dynamic Question Description Generator ----
function getQuestionDescription(q) {
  if (q.id === 7) {
    if (currentLanguage === "python") {
      return `<h3>Custom Python OOP Program</h3>
<p>Write your own Python Object-Oriented Program from scratch!</p>
<ul>
  <li>Define classes, <code>__init__</code> constructors, methods, and functions in <code>main.py</code></li>
  <li>Output and Expected Output will appear below once you click <strong>Run</strong></li>
</ul>`;
    } else {
      return `<h3>Custom Java Program</h3>
<p>Write your own Java OOP program from scratch!</p>
<p>Use the editor to write any Java class, then compile and run it.</p>
<ul>
  <li>The main class <strong>must</strong> be named <code>Main</code></li>
  <li>Output and Expected Output will appear below once you click <strong>Run</strong></li>
</ul>`;
    }
  }
  return q.description;
}

// ---- Question Loading ----
function loadQuestion(id) {
  const q = QUESTIONS.find(q => q.id === id);
  if (!q) return;

  currentQuestionId = id;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}last_question_id`, id);
  } catch (e) {}

  // Update sidebar
  questionDisplayEl.innerHTML = getQuestionDescription(q);

  // Update active item in sidebar list
  document.querySelectorAll(".template-item").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.id, 10) === id);
  });

  // Load saved code for active language
  const saved = getSavedCode(id, currentLanguage);
  const codeToSet = saved !== null ? saved : (q.code || "");

  if (monacoEditor) {
    isSettingValue = true;
    monacoEditor.setValue(codeToSet);
    monacoEditor.setScrollTop(0);
    isSettingValue = false;
    updateSaveStatus("saved");
  }

  // Hide the execution output drawer on switching questions
  hideOutputDrawer();
}

// ---- Language Switcher (Java <-> Python) ----
function setLanguage(lang) {
  if (lang !== "java" && lang !== "python") return;

  // Save current language draft before switching
  if (monacoEditor && !isSettingValue) {
    saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
  }

  currentLanguage = lang;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}last_language`, lang);
  } catch (e) {}

  // Update Language toggle buttons
  btnLangJava.classList.toggle("active", lang === "java");
  btnLangJava.setAttribute("aria-selected", lang === "java");
  btnLangPython.classList.toggle("active", lang === "python");
  btnLangPython.setAttribute("aria-selected", lang === "python");

  // Update file badge
  if (lang === "java") {
    fileBadge.className = "badge-java";
    fileBadge.textContent = "☕ Main.java";
    btnRunText.textContent = "Run";
    footerLangMode.textContent = "Java 17 • Execution Server";
  } else {
    fileBadge.className = "badge-python";
    fileBadge.textContent = "🐍 main.py";
    btnRunText.textContent = "Run";
    footerLangMode.textContent = "Python 3 • Execution Server";
  }

  // Update Monaco language mode & load saved code
  if (monacoEditor) {
    const model = monacoEditor.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, lang);
    }
    const saved = getSavedCode(currentQuestionId, lang);
    const q = QUESTIONS.find(q => q.id === currentQuestionId);
    isSettingValue = true;
    monacoEditor.setValue(saved !== null ? saved : (q ? q.code : ""));
    isSettingValue = false;
    updateSaveStatus("saved");
  }

  // Update Question 7 description if selected
  if (currentQuestionId === 7) {
    const q7 = QUESTIONS.find(q => q.id === 7);
    if (q7) questionDisplayEl.innerHTML = getQuestionDescription(q7);
  }
}

// ---- Output Drawer Controls ----
function showOutputDrawer() {
  ioSection.style.display = "flex";
  gutterV.style.display = "block";
  if (monacoEditor) {
    setTimeout(() => monacoEditor.layout(), 10);
  }
}

function hideOutputDrawer() {
  ioSection.style.display = "none";
  gutterV.style.display = "none";
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  if (monacoEditor) {
    setTimeout(() => monacoEditor.layout(), 10);
  }
}

// ---- Monaco Initialization ----
function initMonaco() {
  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
  });

  require(["vs/editor/editor.main"], function () {
    const q = QUESTIONS.find(q => q.id === currentQuestionId);
    const initialSaved = getSavedCode(currentQuestionId, currentLanguage);
    const initialCode = initialSaved !== null ? initialSaved : (q ? q.code : "");

    monacoEditor = monaco.editor.create(document.getElementById("monaco-editor"), {
      theme: "vs-dark",
      language: currentLanguage,
      value: initialCode,
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
      guides: { bracketPairs: true, indentation: true },
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
        verticalSliderSize: 6
      }
    });

    // Keyboard Command: Ctrl+Enter inside editor runs code
    monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runCode();
    });

    // Auto-save on editor input
    monacoEditor.onDidChangeModelContent(() => {
      if (isSettingValue) return;
      updateSaveStatus("saving");
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
        updateSaveStatus("saved");
      }, 300);
    });

    setLanguage(currentLanguage);
    loadQuestion(currentQuestionId);
  });
}

// ---- Sidebar Template List ----
function renderTemplateList() {
  templateListEl.innerHTML = "";
  QUESTIONS.forEach(q => {
    const item = document.createElement("div");
    item.className = `template-item${q.id === currentQuestionId ? " active" : ""}`;
    item.dataset.id = q.id;
    item.innerHTML = `
      <span class="template-number">${q.id}.</span>
      <span class="template-name">${q.name}</span>
    `;
    item.addEventListener("click", () => loadQuestion(q.id));
    templateListEl.appendChild(item);
  });
}

// ---- Execute Code via Local/Cloud Backend ----
async function executeCode(language, sourceCode, stdin) {
  const selectedEnv = envSelector ? (envSelector.value || "cloud") : "cloud";
  const url = ENDPOINTS[selectedEnv] || ENDPOINTS.cloud;

  const fileName = language === "python" ? "main.py" : "Main.java";
  const payload = {
    language: language,
    files: [{ name: fileName, content: sourceCode }],
    stdin: stdin || ""
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`Server Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    if (selectedEnv === "cloud") {
      throw new Error(`Failed to connect to Cloud Server. (${err.message}). Note: Render free tier takes ~30-60s to wake up on cold starts.`);
    } else {
      throw new Error(`Failed to connect to Local Server (http://localhost:3000). Ensure \`node Backend/server.js\` is running.`);
    }
  }
}

// ---- Run Code Engine ----
let isRunning = false;

async function runCode() {
  if (isRunning || !monacoEditor) return;

  const code = monacoEditor.getValue();
  if (!code.trim()) {
    showOutputDrawer();
    outputDisplay.innerHTML = `<span class="output-placeholder">Code is empty. Write your ${currentLanguage === "python" ? "Python" : "Java"} code first!</span>`;
    return;
  }

  const q = QUESTIONS.find(q => q.id === currentQuestionId);
  const expectedText = (q && q.expectedOutput) ? q.expectedOutput : "";
  const sampleStdin = (q && q.stdin) ? q.stdin : "";

  // Show the output drawer
  showOutputDrawer();
  expectedOutputDisplay.textContent = expectedText || "None specified";

  isRunning = true;
  const startTime = performance.now();
  const langLabel = currentLanguage === "python" ? "Python" : "Java";

  // UI: Running State
  btnRun.classList.add("running");
  btnRun.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    <span>Running ${langLabel}...</span>
  `;

  setStatus("running", `Running ${langLabel}...`);
  outputDisplay.innerHTML = `<span class="output-placeholder">Executing ${langLabel} code...</span>`;
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  outputMeta.textContent = "";

  try {
    const result = await executeCode(currentLanguage, code, sampleStdin);
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

    // Check for compilation failure
    if (result.compile && result.compile.code !== 0) {
      let errorMsg = result.compile.stderr || result.compile.output || "Compilation error";
      
      // Detection: if older cloud server tried to compile Python with javac
      if (currentLanguage === "python" && errorMsg.includes("Main.java")) {
        errorMsg = `⚠️ Cloud Server does not have Python installed yet.\nPlease redeploy the updated server to Render, or switch Server to "Local" (run \`node Backend/server.js\`) to execute Python code!`;
      }
      
      outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(errorMsg)}</span>`;
      setStatus("error", `${langLabel} Error`);
      execInfo.textContent = `${langLabel} compile failed • ${elapsed}s`;
      outputMeta.textContent = `Compile Error (${elapsed}s)`;
    } else if (result.run) {
      const output = result.run.output || "";
      const stderr = result.run.stderr || "";

      if (result.run.code !== 0 && stderr) {
        outputDisplay.innerHTML = `<span class="output-error">${escapeHtml(stderr)}</span>`;
        if (output) {
          outputDisplay.innerHTML += `\n${escapeHtml(output)}`;
        }
        setStatus("error", `${langLabel} Runtime Error`);
        execInfo.textContent = `${langLabel} error (code ${result.run.code}) • ${elapsed}s`;
        outputMeta.textContent = `Exit Code: ${result.run.code} (${elapsed}s)`;
      } else {
        const displayOutput = output.replace(/\n$/, "");
        outputDisplay.innerHTML = `<span class="output-success">${escapeHtml(displayOutput)}</span>`;
        setStatus("ready", "Success");
        execInfo.textContent = `${langLabel} executed in ${elapsed}s`;
        outputMeta.textContent = `${elapsed}s`;
        
        // Auto-verify with expected output
        checkOutput(displayOutput, expectedText);
      }
    } else {
      outputDisplay.innerHTML = '<span class="output-error">No response from execution engine.</span>';
      setStatus("error", "Error");
      execInfo.textContent = "";
    }
  } catch (err) {
    outputDisplay.innerHTML = `<span class="output-error">Error: ${escapeHtml(err.message)}</span>`;
    setStatus("error", "Error");
    execInfo.textContent = "";
  } finally {
    isRunning = false;
    btnRun.classList.remove("running");
    btnRun.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span id="btn-run-text">Run</span>
    `;
  }
}

// ---- Output Verification against Expected Output ----
function checkOutput(actual, expected) {
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

function clearOutput() {
  outputDisplay.innerHTML = '<span class="output-placeholder">Output cleared. Run code again to see results.</span>';
  matchBadge.className = "match-badge";
  matchBadge.textContent = "";
  outputMeta.textContent = "";
}

function setStatus(state, text) {
  statusIndicator.className = `status-indicator${state === "running" ? " running" : state === "error" ? " error" : state === "ready" ? " ready" : ""}`;
  statusText.textContent = text;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---- Reset Code ----
function handleReset() {
  const langLabel = currentLanguage === "python" ? "Python" : "Java";
  const hasSaved = getSavedCode(currentQuestionId, currentLanguage) !== null;

  if (hasSaved) {
    const confirmed = confirm(`Are you sure you want to reset your saved ${langLabel} code for this question?`);
    if (!confirmed) return;
    clearSavedQuestion(currentQuestionId, currentLanguage);
  }

  if (monacoEditor) {
    isSettingValue = true;
    monacoEditor.setValue("");
    isSettingValue = false;
    updateSaveStatus("saved");
  }
}

// ---- Format Code ----
function handleFormat() {
  if (monacoEditor) {
    monacoEditor.getAction("editor.action.formatDocument")?.run();
  }
}

// ---- Event Listeners ----
btnRun.addEventListener("click", () => runCode());
btnReset.addEventListener("click", handleReset);
btnFormat.addEventListener("click", handleFormat);
btnClearOutput.addEventListener("click", clearOutput);
btnCloseOutput.addEventListener("click", hideOutputDrawer);

// Language Toggle Buttons (Side-by-Side: Java | Python)
btnLangJava.addEventListener("click", () => setLanguage("java"));
btnLangPython.addEventListener("click", () => setLanguage("python"));

// Font size buttons
if (btnFontInc) btnFontInc.addEventListener("click", () => setFontSize(currentFontSize + 1));
if (btnFontDec) btnFontDec.addEventListener("click", () => setFontSize(currentFontSize - 1));
if (fontSizeDisplay) fontSizeDisplay.textContent = `${currentFontSize}px`;

// Environment selector toggle
const envBtns = document.querySelectorAll(".env-toggle-btn");
if (envSelector) {
  envSelector.value = "cloud"; // default
  envBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      envBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      envSelector.value = btn.dataset.value;
    });
  });
}

// Save before reload or tab close
window.addEventListener("beforeunload", () => {
  if (monacoEditor && !isSettingValue) {
    saveCode(currentQuestionId, currentLanguage, monacoEditor.getValue());
  }
});

// Window resize layout
window.addEventListener("resize", () => {
  if (monacoEditor) monacoEditor.layout();
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl + Enter: Run code
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
  // Escape: Close output drawer
  else if (e.key === "Escape" && ioSection.style.display !== "none") {
    e.preventDefault();
    hideOutputDrawer();
  }
  // Alt + J: Switch to Java
  else if (e.altKey && (e.key === "j" || e.key === "J")) {
    e.preventDefault();
    setLanguage("java");
  }
  // Alt + P: Switch to Python
  else if (e.altKey && (e.key === "p" || e.key === "P")) {
    e.preventDefault();
    setLanguage("python");
  }
  // Ctrl + Plus / Equal: Font +
  else if ((e.ctrlKey || e.metaKey) && (e.key === "=" || e.key === "+")) {
    e.preventDefault();
    setFontSize(currentFontSize + 1);
  }
  // Ctrl + Minus: Font -
  else if ((e.ctrlKey || e.metaKey) && (e.key === "-" || e.key === "_")) {
    e.preventDefault();
    setFontSize(currentFontSize - 1);
  }
  // Ctrl + 0: Default font size
  else if ((e.ctrlKey || e.metaKey) && e.key === "0") {
    e.preventDefault();
    setFontSize(15);
  }
});

// ---- Resizing Gutters ----
let isResizingH = false;
let isResizingV = false;

// Horizontal Sidebar Resizer
gutterH.addEventListener("mousedown", () => {
  isResizingH = true;
  document.body.style.cursor = "col-resize";
  gutterH.classList.add("active");
});

// Vertical IO Resizer
gutterV.addEventListener("mousedown", () => {
  isResizingV = true;
  document.body.style.cursor = "row-resize";
  gutterV.classList.add("active");
});

document.addEventListener("mousemove", (e) => {
  if (isResizingH) {
    const totalWidth = document.getElementById("app-main").clientWidth;
    const newWidth = (e.clientX / totalWidth) * 100;
    if (newWidth > 15 && newWidth < 80) {
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

    if (monacoEditor) monacoEditor.layout();
  }
});

// ---- Initialize Application ----
renderTemplateList();
initMonaco();
