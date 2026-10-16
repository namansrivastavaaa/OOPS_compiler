/* ==========================================================================
   AI/ML Technical Placement Assessment Question Bank (40 Questions)
   Covers 8 Topics: 5 Questions each (2 Theory, 3 Practical/Code/Scenario)
   Difficulty: 30% Easy, 50% Medium, 20% Hard
   ========================================================================== */

const QUIZ_TOPICS = [
  { id: "all", name: "All Topics", count: 40, icon: "📋" },
  { id: "sql", name: "SQL", count: 5, icon: "🗄️" },
  { id: "ai_basics", name: "AI Basics", count: 5, icon: "🧠" },
  { id: "eda", name: "EDA & Visualization", count: 5, icon: "📊" },
  { id: "supervised", name: "Supervised Learning", count: 5, icon: "🎯" },
  { id: "unsupervised", name: "Unsupervised Learning", count: 5, icon: "🔍" },
  { id: "advanced_ml", name: "Advanced Machine Learning", count: 5, icon: "⚡" },
  { id: "genai", name: "Generative AI & LLMs", count: 5, icon: "✨" },
  { id: "agentic", name: "Agentic AI & RAG", count: 5, icon: "🤖" }
];

const QUIZ_QUESTIONS = [
  // ==================== TOPIC 1: SQL ====================
  {
    id: 1,
    topicId: "sql",
    topicName: "SQL",
    type: "theory",
    difficulty: "easy",
    question: "In standard ANSI SQL, given an `Employees` table with 5 rows where the `bonus` column contains values `[100, 200, NULL, 300, NULL]`, which of the following queries is guaranteed to return the scalar value `3`?",
    codeSnippet: null,
    schemaInfo: "Employees (emp_id INT, name VARCHAR(50), bonus INT)",
    options: [
      { id: "A", text: "SELECT COUNT(*) FROM Employees;" },
      { id: "B", text: "SELECT COUNT(bonus) FROM Employees;" },
      { id: "C", text: "SELECT AVG(bonus) FROM Employees;" },
      { id: "D", text: "SELECT COUNT(DISTINCT bonus) FROM Employees WHERE bonus IS NULL;" }
    ],
    correctAnswer: "B",
    explanation: "`COUNT(column_name)` ignores NULL values and counts only rows where the specified column contains a non-NULL value. Here, 3 rows have valid numbers (100, 200, 300), so `COUNT(bonus)` returns 3.",
    whyWrong: {
      A: "`COUNT(*)` counts all rows in the table regardless of NULLs, returning 5.",
      C: "`AVG(bonus)` calculates (100 + 200 + 300) / 3 = 200.0, which is an average, not 3.",
      D: "`WHERE bonus IS NULL` filters to the 2 NULL rows, and `COUNT(DISTINCT bonus)` on NULL values yields 0."
    },
    keyConcept: "NULL Handling in Aggregate Functions: `COUNT(*)` counts all rows; column-specific aggregates (`COUNT(col)`, `SUM(col)`, `AVG(col)`) strictly skip NULLs."
  },
  {
    id: 2,
    topicId: "sql",
    topicName: "SQL",
    type: "theory",
    difficulty: "medium",
    question: "You need to retrieve departments that employ more than 5 senior engineers whose individual base salary exceeds $100,000. In SQL logical query processing, which clause filters individual employee salaries and which clause filters the aggregated departmental headcount?",
    codeSnippet: null,
    schemaInfo: "Employees (emp_id INT, dept_id INT, job_title VARCHAR(50), salary INT)",
    options: [
      { id: "A", text: "WHERE filters individual employee salaries; HAVING filters the aggregated departmental count." },
      { id: "B", text: "HAVING filters individual employee salaries; WHERE filters the aggregated departmental count." },
      { id: "C", text: "Both conditions must be evaluated in the HAVING clause using subqueries." },
      { id: "D", text: "Both conditions must be evaluated in the WHERE clause prior to grouping." }
    ],
    correctAnswer: "A",
    explanation: "`WHERE` is evaluated before rows are grouped (filtering individual records by `salary > 100000`). `GROUP BY dept_id` then groups the remaining rows, and `HAVING COUNT(*) > 5` evaluates group-level aggregate predicates.",
    whyWrong: {
      B: "Logical query execution sequence is FROM -> WHERE -> GROUP BY -> HAVING -> SELECT. `WHERE` cannot evaluate aggregate functions.",
      C: "Filtering non-aggregated row columns in `HAVING` without grouping is either invalid SQL or severely degrades query optimization.",
      D: "`WHERE` cannot filter on aggregate results like `COUNT(*) > 5` because aggregates are only formed after `GROUP BY`."
    },
    keyConcept: "Logical Execution Order: `WHERE` filters rows before grouping; `HAVING` filters groups after aggregate calculation."
  },
  {
    id: 3,
    topicId: "sql",
    topicName: "SQL",
    type: "practical",
    difficulty: "medium",
    question: "Examine the following tables and query. What exact rows are returned by the query?",
    codeSnippet: `-- Schema & Sample Data:
-- Customers: (1, 'Alice'), (2, 'Bob'), (4, 'David')
-- Orders: (101, 1, 'Completed'), (102, 2, 'Pending'), (103, 3, 'Completed')

SELECT c.name, o.order_id
FROM Customers c
LEFT JOIN Orders o 
  ON c.customer_id = o.customer_id
WHERE o.status = 'Completed';`,
    schemaInfo: "Customers (customer_id, name) | Orders (order_id, customer_id, status)",
    options: [
      { id: "A", text: "('Alice', 101), ('Bob', NULL), ('David', NULL)" },
      { id: "B", text: "('Alice', 101) only" },
      { id: "C", text: "('Alice', 101), ('Bob', 102), ('David', NULL)" },
      { id: "D", text: "SQL execution error because WHERE cannot evaluate outer-joined nullable columns." }
    ],
    correctAnswer: "B",
    explanation: "Even though `LEFT JOIN` preserves all rows from `Customers` (David would get a NULL order record), the `WHERE o.status = 'Completed'` condition executes AFTER the join. For David, `o.status` is NULL, and in SQL 3-valued logic, `NULL = 'Completed'` evaluates to `UNKNOWN`, discarding the row. Bob has status 'Pending' which evaluates to `FALSE`. Only Alice meets the WHERE criteria, effectively converting the LEFT JOIN into an INNER JOIN.",
    whyWrong: {
      A: "David and Bob are eliminated because their `o.status` evaluates to NULL and 'Pending' respectively, neither matching `'Completed'` in the WHERE clause.",
      C: "Bob's status is 'Pending', so it does not satisfy `o.status = 'Completed'`.",
      D: "Filtering outer-joined columns in WHERE is valid SQL; it simply filters out NULL and non-matching rows."
    },
    keyConcept: "Outer Join Predicate Placement: Placing right-table filter conditions in `WHERE` converts a `LEFT JOIN` into an `INNER JOIN`. To preserve outer rows, place the condition in the `ON` clause."
  },
  {
    id: 4,
    topicId: "sql",
    topicName: "SQL",
    type: "practical",
    difficulty: "hard",
    question: "A company's `Employees` table has columns `(emp_id, dept_id, salary)`. You must retrieve the employee with the second highest salary in each department. If two employees tie for the highest salary, the next distinct lower salary must be assigned rank 2. Which query guarantees this?",
    codeSnippet: null,
    schemaInfo: "Employees (emp_id INT, dept_id INT, salary INT)",
    options: [
      { id: "A", text: "SELECT dept_id, salary FROM (SELECT dept_id, salary, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk FROM Employees) t WHERE rnk = 2;" },
      { id: "B", text: "SELECT dept_id, salary FROM (SELECT dept_id, salary, DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk FROM Employees) t WHERE rnk = 2;" },
      { id: "C", text: "SELECT dept_id, salary FROM (SELECT dept_id, salary, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk FROM Employees) t WHERE rnk = 2;" },
      { id: "D", text: "SELECT dept_id, MAX(salary) FROM Employees GROUP BY dept_id HAVING salary < MAX(salary);" }
    ],
    correctAnswer: "B",
    explanation: "`DENSE_RANK()` assigns consecutive integers without gaps when ties occur. If two employees in department 10 have top salaries of $120,000, both receive rank 1. The next highest salary ($110,000) receives rank 2. `RANK()` would skip rank 2 and assign rank 3, returning nothing for `rnk = 2`.",
    whyWrong: {
      A: "`RANK()` skips ranks after duplicate ties (1, 1, 3...), failing when there is a tie for 1st place.",
      C: "`ROW_NUMBER()` assigns arbitrary distinct numbers (1, 2) to tied values, picking one of the tied top earners as rank 2 instead of the second distinct salary.",
      D: "Invalid SQL: `salary` is not an aggregate and cannot be placed inside `HAVING` without `GROUP BY` inclusion."
    },
    keyConcept: "Window Functions: `ROW_NUMBER()` never ties; `RANK()` leaves gaps after ties; `DENSE_RANK()` produces contiguous rankings without skipping."
  },
  {
    id: 5,
    topicId: "sql",
    topicName: "SQL",
    type: "practical",
    difficulty: "medium",
    question: "Given the table `Sales` and the query below, predict the resulting output rows:",
    codeSnippet: `-- Table: Sales (region VARCHAR(10), amount INT)
-- Data rows:
-- ('North', 50)
-- ('North', NULL)
-- ('South', 100)
-- ('South', 0)
-- ('East', NULL)

SELECT region, COUNT(amount) AS cnt, SUM(COALESCE(amount, 10)) AS total
FROM Sales
GROUP BY region
HAVING COUNT(*) >= 2;`,
    schemaInfo: "Sales (region VARCHAR(10), amount INT)",
    options: [
      { id: "A", text: "North: (cnt=1, total=60) | South: (cnt=2, total=100)" },
      { id: "B", text: "North: (cnt=2, total=60) | South: (cnt=2, total=100) | East: (cnt=0, total=10)" },
      { id: "C", text: "North: (cnt=1, total=50) | South: (cnt=2, total=100)" },
      { id: "D", text: "South: (cnt=2, total=100) only" }
    ],
    correctAnswer: "A",
    explanation: "1. `HAVING COUNT(*) >= 2`: North has 2 rows, South has 2 rows, East has 1 row. East is excluded.\n2. For 'North': `COUNT(amount)` ignores NULL, giving cnt = 1. `COALESCE(amount, 10)` turns NULL to 10, so `50 + 10 = 60`.\n3. For 'South': both 100 and 0 are non-NULL, so cnt = 2. `100 + 0 = 100`.\nResult: North: (1, 60), South: (2, 100).",
    whyWrong: {
      B: "East has only 1 row (`COUNT(*) = 1`), so it is filtered out by `HAVING COUNT(*) >= 2`.",
      C: "For North, `COALESCE(NULL, 10)` replaces NULL with 10, making the sum 60, not 50.",
      D: "North satisfies `COUNT(*) >= 2` because `COUNT(*)` counts all records including NULLs."
    },
    keyConcept: "`COALESCE(val, default)` substitutes fallback values for NULLs; `COUNT(*)` checks group size regardless of NULL attributes."
  },

  // ==================== TOPIC 2: AI BASICS ====================
  {
    id: 6,
    topicId: "ai_basics",
    topicName: "AI Basics",
    type: "theory",
    difficulty: "easy",
    question: "Which of the following statements accurately characterizes the hierarchical relationship between Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL), and Generative AI (GenAI)?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "GenAI is a subset of DL, which is a subset of ML, which is a subset of AI." },
      { id: "B", text: "DL and ML are separate parallel branches of AI with zero architectural overlap." },
      { id: "C", text: "GenAI is a superset of AI that encompasses rule-based expert systems." },
      { id: "D", text: "ML is a subset of DL, which directly powers all symbolic AI reasoning engines." }
    ],
    correctAnswer: "A",
    explanation: "AI is the broad umbrella of systems mimicking human intelligence. ML is the subset of AI that learns patterns from data without explicit programming. DL is the subset of ML utilizing multi-layered neural networks. GenAI is a specialized subset of DL focused on generating synthetic content (text, images, audio, code).",
    whyWrong: {
      B: "Deep Learning is an architectural subset of Machine Learning, not an independent parallel discipline.",
      C: "GenAI is a specialized modern subfield of Deep Learning, not a superset of AI.",
      D: "Inverts the relationship: Deep Learning is a subset of Machine Learning, not the other way around."
    },
    keyConcept: "AI Taxonomy: AI ⊃ Machine Learning ⊃ Deep Learning ⊃ Generative AI."
  },
  {
    id: 7,
    topicId: "ai_basics",
    topicName: "AI Basics",
    type: "theory",
    difficulty: "easy",
    question: "What is the primary technical distinction between a model parameter and a hyperparameter in machine learning?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Parameters are tuned manually before training; hyperparameters are learned by the model from data." },
      { id: "B", text: "Parameters are learned internally from training data (e.g., weights and biases); hyperparameters are external configuration settings specified before training (e.g., learning rate, tree depth)." },
      { id: "C", text: "Hyperparameters exist exclusively in neural networks, while parameters exist only in linear models." },
      { id: "D", text: "Parameters determine model evaluation metrics, while hyperparameters determine loss values." }
    ],
    correctAnswer: "B",
    explanation: "Parameters (like weights $w$ and bias $b$ in neural networks or regression) are optimized automatically by the training algorithm via gradient descent or closed-form solutions. Hyperparameters (like learning rate, regularization strength $\\lambda$, batch size, tree depth, $k$ in KNN) are architectural choices set by the practitioner prior to training.",
    whyWrong: {
      A: "Inverts the definitions: parameters are learned, hyperparameters are configured externally.",
      C: "Both linear models (regularization $\\lambda$) and tree algorithms (depth, impurity) have hyperparameters; neural networks have both.",
      D: "Metrics and loss functions evaluate performance; parameters and hyperparameters define the model and optimization process."
    },
    keyConcept: "Parameters vs Hyperparameters: Parameters are learned from data; hyperparameters guide how parameters are learned."
  },
  {
    id: 8,
    topicId: "ai_basics",
    topicName: "AI Basics",
    type: "practical",
    difficulty: "medium",
    question: "A data scientist preprocesses a dataset by calling `StandardScaler().fit_transform(X)` on the entire dataset of 10,000 rows BEFORE calling `train_test_split(X, y, test_size=0.2)`. The test accuracy is 95%, but in production on new customer traffic, accuracy plunges to 71%. What technical flaw caused this?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Underfitting occurred due to using too small of a training dataset." },
      { id: "B", text: "Data leakage occurred because test set statistics (mean and variance) leaked into the training representation; the scaler should be fit only on the training split." },
      { id: "C", text: "StandardScaler cannot be used with train_test_split; MinMaxScaler is required." },
      { id: "D", text: "The test split proportion must be at least 50% to prevent distribution shifts." }
    ],
    correctAnswer: "B",
    explanation: "Fitting a preprocessor on the entire dataset computes the global mean and standard deviation across both training and test sets. Information from the hold-out test set leaks into the training pipeline (Data Leakage). Consequently, evaluation metrics are artificially optimistic, and performance drops when deployed on unseen data.",
    whyWrong: {
      A: "Overly optimistic test results that fail in production indicate leakage and overfitting, not underfitting.",
      C: "Both `StandardScaler` and `MinMaxScaler` are valid, provided `.fit()` is executed strictly on `X_train`.",
      D: "Standard holdout split is 80/20 or 70/30; a 50% split is unnecessary and would deprive the model of training data."
    },
    keyConcept: "Data Leakage Prevention: Always split data FIRST. Fit transformers only on `X_train` (`scaler.fit(X_train)`), then transform both `X_train` and `X_test`."
  },
  {
    id: 9,
    topicId: "ai_basics",
    topicName: "AI Basics",
    type: "practical",
    difficulty: "medium",
    question: "During model development, an ML engineer records the following performance benchmarks (human baseline error is 1.5%):\n• Model A: Training Error = 26.0%, Validation Error = 28.5%\n• Model B: Training Error = 1.8%, Validation Error = 22.4%\nHow should Model A and Model B be diagnosed?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Model A suffers from High Variance (Overfitting); Model B suffers from High Bias (Underfitting)." },
      { id: "B", text: "Model A suffers from High Bias (Underfitting); Model B suffers from High Variance (Overfitting)." },
      { id: "C", text: "Both models suffer from data leakage." },
      { id: "D", text: "Both models have achieved the optimal bias-variance trade-off." }
    ],
    correctAnswer: "B",
    explanation: "Model A has high error on training data (26% vs 1.5% human baseline), indicating it cannot capture underlying patterns (High Bias / Underfitting). Model B achieves very low training error (1.8%), but its validation error jumps to 22.4%, showing that it memorized training noise and fails to generalize (High Variance / Overfitting).",
    whyWrong: {
      A: "Inverts the diagnoses: High Bias causes poor training performance; High Variance causes a large gap between train and validation performance.",
      C: "Data leakage would cause validation error to be deceptively low, not high.",
      D: "Neither model is optimal: Model A needs a more expressive architecture; Model B needs regularization, dropout, or more data."
    },
    keyConcept: "Diagnosing Bias vs Variance: High Training Error = High Bias (Underfitting). Low Training Error + High Validation Error = High Variance (Overfitting)."
  },
  {
    id: 10,
    topicId: "ai_basics",
    topicName: "AI Basics",
    type: "practical",
    difficulty: "hard",
    question: "An airline company needs an autonomous pricing system for flight seats. There are no historical static labels of the 'perfect price'. Instead, the system makes sequential price changes, observing user booking conversions, competitor price shifts, and flight capacity, receiving delayed revenue feedback after each booking window. Which ML paradigm is best suited?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Supervised Regression using Linear Regression" },
      { id: "B", text: "Unsupervised K-Means Clustering on customer demographics" },
      { id: "C", text: "Reinforcement Learning (Markov Decision Process with policy optimization)" },
      { id: "D", text: "Self-supervised Autoencoding" }
    ],
    correctAnswer: "C",
    explanation: "When an agent interacts with a dynamic environment through sequential actions (setting prices) and receives delayed numerical feedback (total revenue generated) rather than static pre-labeled ground truth, Reinforcement Learning (RL) modeled as a Markov Decision Process (MDP) is the ideal paradigm.",
    whyWrong: {
      A: "Supervised learning requires labeled targets ($y$) for every sample, which do not exist for counterfactual pricing decisions.",
      B: "K-Means clusters data without decision-making or reward optimization capabilities.",
      D: "Autoencoders reconstruct input representations and do not take operational actions to maximize rewards."
    },
    keyConcept: "Machine Learning Paradigms: Supervised = labeled pairs $(X, y)$; Unsupervised = find latent structure in $X$; Reinforcement = sequential actions in environment to maximize cumulative reward."
  },

  // ==================== TOPIC 3: EDA & VISUALIZATION ====================
  {
    id: 11,
    topicId: "eda",
    topicName: "EDA & Visualization",
    type: "theory",
    difficulty: "easy",
    question: "When analyzing a national income distribution that is heavily right-skewed (a few billionaires alongside millions of median-income citizens), which measure of central tendency is the most reliable representation of typical income, and why?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Mean, because it incorporates every citizen's exact earnings." },
      { id: "B", text: "Median, because it is robust against extreme outliers and reflects the 50th percentile." },
      { id: "C", text: "Standard deviation, because it measures the total variance of wealth." },
      { id: "D", text: "Mode, because financial values are strictly discrete categories." }
    ],
    correctAnswer: "B",
    explanation: "In skewed distributions, the mean is pulled heavily toward the long tail by extreme values (billionaires). The median represents the middle value (50th percentile) and is non-parametric and resistant to outliers, reflecting the typical citizen's income accurately.",
    whyWrong: {
      A: "The mean is distorted by extreme values and overstates the typical citizen's income.",
      C: "Standard deviation is a measure of dispersion, not central tendency, and is also sensitive to outliers.",
      D: "Income is continuous numeric data; mode is generally used for categorical attributes."
    },
    keyConcept: "Robust Statistics: In skewed distributions, Median > Mean for central tendency; Interquartile Range (IQR) > Standard Deviation for dispersion."
  },
  {
    id: 12,
    topicId: "eda",
    topicName: "EDA & Visualization",
    type: "theory",
    difficulty: "medium",
    question: "You want to visually inspect and compare the distribution shape, median, spread, interquartile range (IQR), and suspect outliers of salary across 6 distinct engineering job roles simultaneously. Which visualization is most effective?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Stacked 100% Bar Chart" },
      { id: "B", text: "Pie Chart" },
      { id: "C", text: "Box-and-Whisker Plot (Boxplot)" },
      { id: "D", text: "Pairwise Correlation Heatmap" }
    ],
    correctAnswer: "C",
    explanation: "A box plot displays the 25th percentile ($Q_1$), median ($Q_2$), 75th percentile ($Q_3$), whiskers (typically $1.5 \\times \\text{IQR}$), and individual plotted outlier points, allowing direct visual comparison across multiple categories.",
    whyWrong: {
      A: "Stacked bar charts display categorical proportions, not continuous statistical distributions.",
      B: "Pie charts represent part-to-whole proportions of single variables and cannot show spread or outliers.",
      D: "Correlation heatmaps display pairwise linear correlation coefficients between numerical columns, not group distributions."
    },
    keyConcept: "Chart Selection: Boxplots and Violin plots are standard tools for comparing continuous feature distributions and outliers across categories."
  },
  {
    id: 13,
    topicId: "eda",
    topicName: "EDA & Visualization",
    type: "practical",
    difficulty: "medium",
    question: "What is the exact printed output of the following Python Pandas code snippet?",
    codeSnippet: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 3, np.nan, 3, 1],
    'B': [10, 20, 30, 20, 10]
})

df = df.drop_duplicates()
df['A'] = df['A'].fillna(df['A'].mean())
print(len(df), int(df['A'].sum()))`,
    schemaInfo: null,
    options: [
      { id: "A", text: "3 6" },
      { id: "B", text: "3 4" },
      { id: "C", text: "5 8" },
      { id: "D", text: "4 6" }
    ],
    correctAnswer: "A",
    explanation: "1. `df` starts with 5 rows. Index 3 is a duplicate of index 1, and index 4 is a duplicate of index 0.\n2. `df.drop_duplicates()` leaves 3 rows: (1, 10), (3, 20), (NaN, 30). So `len(df) = 3`.\n3. `df['A'].mean()` ignores NaN: `(1 + 3) / 2 = 2.0`.\n4. `fillna(2.0)` replaces the NaN with 2.0. Column 'A' is now `[1.0, 3.0, 2.0]`.\n5. `df['A'].sum()` is `1 + 3 + 2 = 6.0`. `int(6.0)` is `6`.\nOutput: `3 6`.",
    whyWrong: {
      B: "Calculated mean incorrectly or dropped NaN instead of filling.",
      C: "Failed to apply `drop_duplicates()`, which removes redundant rows 3 and 4.",
      D: "Incorrect duplicate removal: only 3 unique rows exist."
    },
    keyConcept: "Pandas Missing Values: `drop_duplicates()` checks whole rows by default; aggregation functions (`mean()`, `sum()`) ignore `NaN` values unless specified."
  },
  {
    id: 14,
    topicId: "eda",
    topicName: "EDA & Visualization",
    type: "practical",
    difficulty: "hard",
    question: "A feature in a dataset has first quartile $Q_1 = 24$ and third quartile $Q_3 = 40$. Using Tukey's standard $1.5 \\times \\text{IQR}$ rule, what are the lower and upper threshold boundaries outside of which data points are flagged as outliers?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Lower: 0, Upper: 64" },
      { id: "B", text: "Lower: 8, Upper: 56" },
      { id: "C", text: "Lower: 24, Upper: 40" },
      { id: "D", text: "Lower: -16, Upper: 80" }
    ],
    correctAnswer: "A",
    explanation: "1. $\\text{IQR} = Q_3 - Q_1 = 40 - 24 = 16$.\n2. $1.5 \\times \\text{IQR} = 1.5 \\times 16 = 24$.\n3. $\\text{Lower Bound} = Q_1 - 1.5 \\times \\text{IQR} = 24 - 24 = 0$.\n4. $\\text{Upper Bound} = Q_3 + 1.5 \\times \\text{IQR} = 40 + 24 = 64$.\nValues $< 0$ or $> 64$ are flagged as outliers.",
    whyWrong: {
      B: "Multiplied IQR by 1.0 instead of 1.5.",
      C: "These are simply $Q_1$ and $Q_3$, the inner 50% box boundaries, not outlier fences.",
      D: "Subtracted and added $2.5 \\times \\text{IQR}$ instead of 1.5."
    },
    keyConcept: "Tukey's IQR Fences: Outliers are values outside $[Q_1 - 1.5 \\times \\text{IQR}, Q_3 + 1.5 \\times \\text{IQR}]$."
  },
  {
    id: 15,
    topicId: "eda",
    topicName: "EDA & Visualization",
    type: "practical",
    difficulty: "medium",
    question: "In an exploratory correlation analysis for a housing price prediction model, two features `size_sq_ft` and `size_sq_meters` have a Pearson correlation coefficient $r = 0.999$, and both correlate $r \\approx 0.76$ with the target `price`. What statistical issue does this introduce into Linear Regression, and what is the best remedial action?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Heteroscedasticity; log-transform the target variable." },
      { id: "B", text: "Multicollinearity; drop one of the two redundant features because collinearity inflates coefficient variance and destabilizes model interpretation." },
      { id: "C", text: "Overfitting; create an interaction term multiplying both features together." },
      { id: "D", text: "Data leakage; convert both continuous measurements into one-hot encoded categories." }
    ],
    correctAnswer: "B",
    explanation: "Near-perfect correlation between independent features causes severe multicollinearity. In Ordinary Least Squares (OLS), the $(X^T X)$ matrix becomes near-singular (non-invertible), causing coefficient estimates to fluctuate wildly with massive standard errors. Dropping one redundant metric eliminates the collinearity without losing information.",
    whyWrong: {
      A: "Heteroscedasticity refers to non-constant variance of residuals, not collinearity among predictor features.",
      C: "Multiplying collinear features together worsens the correlation and introduces polynomial collinearity.",
      D: "One-hot encoding continuous features destroys ordering and does not solve collinearity."
    },
    keyConcept: "Multicollinearity Detection & Resolution: High pairwise correlation ($|r| > 0.85$) or high Variance Inflation Factor (VIF > 5-10) requires dropping or combining redundant features."
  },

  // ==================== TOPIC 4: SUPERVISED LEARNING ====================
  {
    id: 16,
    topicId: "supervised",
    topicName: "Supervised Learning",
    type: "theory",
    difficulty: "easy",
    question: "Why does standard Logistic Regression apply the Sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ to the linear combination $z = w^T x + b$ instead of using linear regression directly for classification?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "To map unbounded real values $(-\\infty, \\infty)$ into $(0, 1)$, enabling interpretation as valid class probabilities." },
      { id: "B", text: "To eliminate the need for training labels during loss minimization." },
      { id: "C", text: "To guarantee that the cost function always reaches a zero training loss." },
      { id: "D", text: "To convert linear decision boundaries into complex non-linear polynomials automatically." }
    ],
    correctAnswer: "A",
    explanation: "Linear regression predicts continuous, unbounded values $(-\\infty, \\infty)$ which can exceed $[0, 1]$ and are highly distorted by outliers. The sigmoid function squashes any real value into the range $(0, 1)$, modeling the posterior probability $P(Y=1|X)$.",
    whyWrong: {
      B: "Logistic regression is supervised and requires binary training labels ($y \\in \\{0, 1\\}$).",
      C: "Sigmoid does not guarantee zero training loss; it guarantees bounded probability output.",
      D: "Standard logistic regression still produces a linear decision boundary ($w^T x + b = 0$)."
    },
    keyConcept: "Logistic Function: Squashes log-odds into probabilities $\\sigma(z) \\in (0, 1)$; decision threshold (typically 0.5) separates classes."
  },
  {
    id: 17,
    topicId: "supervised",
    topicName: "Supervised Learning",
    type: "theory",
    difficulty: "medium",
    question: "In the K-Nearest Neighbors (KNN) algorithm, what happens to model complexity, bias, and variance as the hyperparameter $K$ is increased from $K=1$ to $K=N$ (where $N$ is total training set size)?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "At $K=1$, the model has high bias and low variance; at $K=N$, it has low bias and high variance." },
      { id: "B", text: "At $K=1$, the model has low bias and high variance (overfitting); at $K=N$, it has high bias and low variance (underfitting)." },
      { id: "C", text: "Variance remains constant while bias decreases monotonically." },
      { id: "D", text: "Increasing $K$ always increases decision boundary roughness and model complexity." }
    ],
    correctAnswer: "B",
    explanation: "At $K=1$, the decision boundary tightly contours around every single training point, fitting training noise (zero training error, high variance, low bias = overfitting). At $K=N$, the model considers all points and simply predicts the global majority class everywhere (overly simple, high bias, low variance = underfitting).",
    whyWrong: {
      A: "Inverts the relationship: small $K$ is complex (high variance); large $K$ is simple (high bias).",
      C: "Variance drops significantly as $K$ increases because averaging across more neighbors dampens noise.",
      D: "Increasing $K$ smooths the decision boundary, reducing model complexity."
    },
    keyConcept: "KNN Bias-Variance Trade-off: Small $K$ = High Variance, Low Bias. Large $K$ = Low Variance, High Bias."
  },
  {
    id: 18,
    topicId: "supervised",
    topicName: "Supervised Learning",
    type: "practical",
    difficulty: "medium",
    question: "A machine learning model screens 1,000 patients for an aggressive cancer. The confusion matrix results are:\n• True Positives (TP) = 90\n• False Negatives (FN) = 10\n• False Positives (FP) = 40\n• True Negatives (TN) = 860\nWhat is the Recall (Sensitivity) of this model, and why is Recall prioritized over Precision in this domain?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Recall = 90.0%; prioritized because missing a cancerous patient (False Negative) can be fatal." },
      { id: "B", text: "Recall = 69.2%; prioritized to minimize the number of healthy people sent for biopsies." },
      { id: "C", text: "Recall = 95.5%; prioritized because True Negatives dominate the sample." },
      { id: "D", text: "Recall = 90.0%; prioritized because Precision can only be computed when FP is 0." }
    ],
    correctAnswer: "A",
    explanation: "$\\text{Recall} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{90}{90 + 10} = \\frac{90}{100} = 0.90$ (90%). In critical medical diagnosis, a False Negative (telling a cancer patient they are healthy) delays treatment and is catastrophic, whereas a False Positive merely leads to a secondary confirmatory test.",
    whyWrong: {
      B: "69.2% is Precision: $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{90}{90 + 40} = 69.2\\%$.",
      C: "95.5% is Specificity: $\\frac{\\text{TN}}{\\text{TN} + \\text{FP}} = \\frac{860}{900} = 95.5\\%$.",
      D: "Precision is easily computed ($90/130 = 69.2\\%$) even with non-zero False Positives."
    },
    keyConcept: "Recall (Sensitivity): Measures $\\frac{\\text{TP}}{\\text{Actual Positives}}$. Prioritized when cost of False Negatives is significantly higher than False Positives."
  },
  {
    id: 19,
    topicId: "supervised",
    topicName: "Supervised Learning",
    type: "practical",
    difficulty: "medium",
    question: "In a financial fraud detection dataset, only 0.2% of transactions are fraudulent (99.8% legitimate). A naive baseline model classifies every transaction as 'Legitimate'. What is the accuracy of this model, and what evaluation metric should be used instead to measure actual performance?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Accuracy = 50.0%; use Mean Absolute Error instead." },
      { id: "B", text: "Accuracy = 99.8%; use Precision-Recall AUC (PR-AUC) or F1-Score instead." },
      { id: "C", text: "Accuracy = 0.2%; use ROC-AUC because it is unaffected by class skew." },
      { id: "D", text: "Accuracy = 99.8%; accuracy is already the most robust metric available." }
    ],
    correctAnswer: "B",
    explanation: "The model achieves 99.8% accuracy simply by guessing the majority class, yet it catches zero fraud cases (Accuracy Paradox). For severe class imbalance, metrics focusing on the positive class (Precision, Recall, F1-Score, and PR-AUC) must be used.",
    whyWrong: {
      A: "Accuracy is 99.8% because 998 out of 1000 majority class rows are predicted correctly.",
      C: "Accuracy is 99.8%, not 0.2%. ROC-AUC can also present an overly optimistic picture under extreme imbalance due to large True Negatives.",
      D: "Accuracy is highly misleading on imbalanced datasets."
    },
    keyConcept: "Accuracy Paradox: High accuracy does not imply good performance when classes are heavily imbalanced. Rely on PR-AUC, F1-Score, and confusion matrix breakdown."
  },
  {
    id: 20,
    topicId: "supervised",
    topicName: "Supervised Learning",
    type: "practical",
    difficulty: "hard",
    question: "A standard unpruned Decision Tree achieves 100% training accuracy but only 61% test accuracy. Which set of hyperparameter modifications will most effectively curb overfitting without abandoning the Decision Tree model?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Increase `max_depth` and set `min_samples_split=2`." },
      { id: "B", text: "Set a lower `max_depth`, increase `min_samples_leaf`, and tune cost-complexity pruning (`ccp_alpha`)." },
      { id: "C", text: "Switch from Gini impurity to Entropy without constraining tree growth." },
      { id: "D", text: "Normalize all numerical features using z-score standardization." }
    ],
    correctAnswer: "B",
    explanation: "Decision trees overfit by creating deep, isolated branches that isolate single training samples. Limiting `max_depth`, enforcing a higher `min_samples_leaf` (e.g. >= 10), and applying post-pruning via `ccp_alpha` prevents the creation of hyper-specific leaves. Feature scaling has zero effect on tree splits.",
    whyWrong: {
      A: "Increasing depth and setting minimum samples to 2 exacerbates overfitting.",
      C: "Gini vs Entropy produce nearly identical trees; neither stops tree expansion.",
      D: "Decision trees are monotonic and invariant to scale; normalization does not affect tree splits."
    },
    keyConcept: "Decision Tree Regularization: Constrain growth with `max_depth`, `min_samples_split`, `min_samples_leaf`, and cost-complexity pruning (`ccp_alpha`)."
  },

  // ==================== TOPIC 5: UNSUPERVISED LEARNING ====================
  {
    id: 21,
    topicId: "unsupervised",
    topicName: "Unsupervised Learning",
    type: "theory",
    difficulty: "easy",
    question: "Why does standard K-Means clustering often produce poor cluster partitions with random centroid initialization, and how does the K-Means++ initialization algorithm address this?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "K-Means++ initializes centroids using a supervised Random Forest." },
      { id: "B", text: "K-Means++ samples initial centroids sequentially with a probability proportional to their squared Euclidean distance from the nearest existing centroid." },
      { id: "C", text: "K-Means++ performs hierarchical clustering before every iteration." },
      { id: "D", text: "K-Means++ replaces Euclidean distance with Manhattan distance." }
    ],
    correctAnswer: "B",
    explanation: "Standard random initialization often places multiple centroids close to each other in the same dense cluster, trapping gradient descent in local minima. K-Means++ chooses the first center uniformly at random, then chooses each subsequent center with probability $P(x) = \\frac{D(x)^2}{\\sum D(x)^2}$, ensuring well-separated seeds and faster convergence.",
    whyWrong: {
      A: "K-Means++ is completely unsupervised and does not use supervised classifiers.",
      C: "Hierarchical clustering is computationally expensive ($O(N^3)$) and is not part of K-Means++.",
      D: "K-Means++ still utilizes squared Euclidean distance."
    },
    keyConcept: "K-Means++: Spreads out initial cluster centroids based on squared distance from nearest existing center, avoiding poor local minima."
  },
  {
    id: 22,
    topicId: "unsupervised",
    topicName: "Unsupervised Learning",
    type: "theory",
    difficulty: "medium",
    question: "In Market Basket Association Rule Mining, an algorithm evaluates the rule `{Milk} -> {Diapers}` and finds a Lift metric of 2.4. What does a Lift of 2.4 indicate?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Milk and Diapers appear together in 2.4% of total customer transactions." },
      { id: "B", text: "Customers who purchase Milk are 2.4 times more likely to purchase Diapers than a random customer." },
      { id: "C", text: "Milk purchases reduce the likelihood of Diapers purchases by 2.4 times." },
      { id: "D", text: "Diapers are purchased 2.4 times more frequently than Milk store-wide." }
    ],
    correctAnswer: "B",
    explanation: "$\\text{Lift}(A \\rightarrow B) = \\frac{P(A \\cap B)}{P(A)P(B)} = \\frac{\\text{Confidence}(A \\rightarrow B)}{\\text{Support}(B)}$. A Lift equal to 1 implies independence between items. A Lift of 2.4 signifies a strong positive association: buying item A increases the probability of buying item B by 2.4 times compared to B's baseline purchase frequency.",
    whyWrong: {
      A: "That defines Support: $P(\\text{Milk} \\cap \\text{Diapers}) = 2.4\\%$.",
      C: "A Lift $< 1$ implies negative association (substitution); Lift $> 1$ indicates positive association.",
      D: "Lift compares joint occurrence against independent probabilities, not total item volume."
    },
    keyConcept: "Association Rules: Support = Frequency of itemset; Confidence = Conditional probability $P(B|A)$; Lift = $\\frac{\\text{Confidence}}{\\text{Support}(B)}$."
  },
  {
    id: 23,
    topicId: "unsupervised",
    topicName: "Unsupervised Learning",
    type: "practical",
    difficulty: "medium",
    question: "You apply K-Means clustering on customer records with two features: `Age` (range: 18 - 65) and `Annual Income` (range: $20,000 - $350,000). The resulting clusters form horizontal slices based exclusively on Income, completely ignoring Age. What is the root cause and standard fix?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "K-Means cannot process continuous variables; discretize Income into binary bins." },
      { id: "B", text: "Euclidean distance is dominated by features with large absolute numerical scales; apply `StandardScaler` to equalize feature variances." },
      { id: "C", text: "Increase $K$ to 50 so Age variations are captured." },
      { id: "D", text: "Switch from K-Means to PCA without preprocessing." }
    ],
    correctAnswer: "B",
    explanation: "K-Means computes Euclidean distance: $\\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$. An income variation of $10,000 produces $(10^4)^2 = 10^8$, completely dwarfing an age variation of 30 years ($30^2 = 900$). Features must be standardized (zero mean, unit variance) so each feature contributes proportionally.",
    whyWrong: {
      A: "K-Means is designed specifically for continuous variables; binary conversion is unhelpful.",
      C: "Increasing $K$ will merely create smaller slices along the Income axis.",
      D: "PCA also calculates variance and is equally distorted by unscaled features."
    },
    keyConcept: "Feature Scaling in Distance-Based Algorithms: K-Means, KNN, SVM, and PCA require standardization to prevent large-magnitude features from dominating distances."
  },
  {
    id: 24,
    topicId: "unsupervised",
    topicName: "Unsupervised Learning",
    type: "practical",
    difficulty: "medium",
    question: "When determining the optimal number of clusters $K$ for K-Means, how do the Elbow Method (Inertia/WCSS) and the Silhouette Coefficient compare?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Inertia peaks at the optimal $K$; Silhouette Coefficient drops monotonically toward zero." },
      { id: "B", text: "Inertia (WCSS) decreases monotonically as $K$ increases; Silhouette Coefficient measures cohesion vs separation between -1 and +1, where values near +1 indicate dense, well-separated clusters." },
      { id: "C", text: "Silhouette Coefficient is strictly superior because it requires no distance calculations." },
      { id: "D", text: "The Elbow Method calculates the percentage of explained variance from 0 to 100%." }
    ],
    correctAnswer: "B",
    explanation: "Inertia (Within-Cluster Sum of Squares) always decreases with increasing $K$ (reaching 0 when $K=N$), requiring visual detection of an 'elbow' where returns diminish. The Silhouette Coefficient computes $s = \\frac{b - a}{\\max(a, b)}$ ($a$ is intra-cluster distance, $b$ is nearest-cluster distance), giving an objective metric between -1 and +1.",
    whyWrong: {
      A: "Inertia drops toward zero, it does not peak; Silhouette can increase or decrease.",
      C: "Silhouette Coefficient relies directly on pairwise Euclidean distance calculations ($O(N^2)$).",
      D: "Inertia is raw squared distance sum, not a bounded percentage."
    },
    keyConcept: "Cluster Validation: Elbow Method uses WCSS bend; Silhouette Score evaluates cluster cohesion vs cluster separation."
  },
  {
    id: 25,
    topicId: "unsupervised",
    topicName: "Unsupervised Learning",
    type: "practical",
    difficulty: "hard",
    question: "You fit `PCA()` in scikit-learn on a 100-feature dataset. Calling `pca.explained_variance_ratio_` yields the following cumulative variance sum for the first 5 components:\n`[0.48, 0.72, 0.84, 0.91, 0.96]`\nTo satisfy a business requirement of preserving at least 95% of total dataset variance while minimizing dimensionality, how many principal components must be retained?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "3 components" },
      { id: "B", text: "4 components" },
      { id: "C", text: "5 components" },
      { id: "D", text: "100 components" }
    ],
    correctAnswer: "C",
    explanation: "The cumulative explained variance for the first 4 components is 0.91 (91%), which is strictly below the required 95% threshold. The 5th component increases cumulative explained variance to 0.96 (96%), satisfying the requirement ($\\ge 95\\%$). Hence, 5 components must be retained.",
    whyWrong: {
      A: "3 components only retain 84% of variance, failing the 95% threshold.",
      B: "4 components retain 91%, which falls short of 95%.",
      D: "Keeping 100 components performs zero dimensionality reduction."
    },
    keyConcept: "PCA Dimensionality Selection: Choose the minimum number of components $k$ such that $\\sum_{i=1}^k \\text{explained\\_variance\\_ratio\\_}[i] \\ge \\text{Threshold}$."
  },

  // ==================== TOPIC 6: ADVANCED MACHINE LEARNING ====================
  {
    id: 26,
    topicId: "advanced_ml",
    topicName: "Advanced Machine Learning",
    type: "theory",
    difficulty: "easy",
    question: "What is the primary architectural difference between Bagging (e.g., Random Forest) and Boosting (e.g., XGBoost, Gradient Boosting) in how base learners are trained and how error is reduced?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Bagging trains base learners sequentially to reduce bias; Boosting trains base learners in parallel to reduce variance." },
      { id: "B", text: "Bagging trains independent base learners in parallel on bootstrap samples to reduce variance; Boosting trains base learners sequentially where each tree learns from the residual errors of prior trees to reduce bias." },
      { id: "C", text: "Bagging works only with linear models; Boosting works only with neural networks." },
      { id: "D", text: "Bagging always causes overfitting, whereas Boosting cannot overfit under any circumstances." }
    ],
    correctAnswer: "B",
    explanation: "Bagging (Bootstrap Aggregating) trains deep, low-bias trees independently in parallel on random sub-samples and averages their predictions to reduce variance. Boosting fits shallow, high-bias trees sequentially, where each new tree fits the residual errors (gradients) of the ensemble to reduce bias.",
    whyWrong: {
      A: "Inverts the mechanisms: Bagging is parallel (variance reduction); Boosting is sequential (bias reduction).",
      C: "Both ensemble methods are commonly built with decision trees as base learners.",
      D: "Boosting can easily overfit if number of estimators is too high or learning rate is unregularized."
    },
    keyConcept: "Ensemble Learning: Bagging reduces variance via parallel independent averaging; Boosting reduces bias via sequential residual fitting."
  },
  {
    id: 27,
    topicId: "advanced_ml",
    topicName: "Advanced Machine Learning",
    type: "theory",
    difficulty: "medium",
    question: "Geometrically and mathematically, why does L1 regularization (Lasso: $\\lambda \\sum |w_i|$) generate sparse models with exact zero weights for irrelevant features, whereas L2 regularization (Ridge: $\\lambda \\sum w_i^2$) merely shrinks weights toward zero without setting them to zero?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "The L1 constraint boundary has sharp corners (vertices) on the coordinate axes where elliptical loss contours intersect at $w_i = 0$; the L2 constraint boundary is a smooth hypersphere where axis intersections rarely occur." },
      { id: "B", text: "L1 uses the second derivative of the loss, which zeros out gradients." },
      { id: "C", text: "L2 eliminates features whose p-value is greater than 0.05." },
      { id: "D", text: "L1 is applied only to categorical features, while L2 is applied only to continuous features." }
    ],
    correctAnswer: "A",
    explanation: "The $L_1$ norm constraint region is a diamond ($|w_1| + |w_2| \\le t$) with vertices positioned directly on the coordinate axes ($w_1 = 0$ or $w_2 = 0$). When the elliptical contours of the least-squares loss expand, they typically touch a sharp corner first, driving weights to exact zeros (feature selection). The $L_2$ ball is circular, so tangency points almost never align exactly on the axes.",
    whyWrong: {
      B: "L1 has a non-differentiable corner at 0 and constant derivative $\\pm 1$; it does not use second derivatives.",
      C: "p-values are classical statistical hypothesis metrics, not part of L2 regularization.",
      D: "Both L1 and L2 regularize numerical weight parameters regardless of feature type."
    },
    keyConcept: "Regularization Geometry: L1 (Lasso) diamond constraint yields sparsity and automatic feature selection; L2 (Ridge) spherical constraint shrinks weights smoothly."
  },
  {
    id: 28,
    topicId: "advanced_ml",
    topicName: "Advanced Machine Learning",
    type: "practical",
    difficulty: "medium",
    question: "While training a Random Forest with 500 trees on a massive dataset, 5-fold cross-validation takes over an hour. How can an ML engineer obtain an unbiased out-of-sample generalization estimate without running cross-validation?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Enable `oob_score=True`; each tree is evaluated on the ~36.8% Out-of-Bag samples that were excluded from its bootstrap training split." },
      { id: "B", text: "Evaluate the model directly on the training set, multiplying the training accuracy by 0.8." },
      { id: "C", text: "Use synthetic data generated by SMOTE to test the trees." },
      { id: "D", text: "Disable bootstrapping so all trees see 100% of the dataset." }
    ],
    correctAnswer: "A",
    explanation: "In bootstrap sampling with replacement, the probability of any sample being omitted from a tree's training set is $(1 - 1/N)^N \\approx 1/e \\approx 36.8\\%$. These 'Out-of-Bag' (OOB) samples act as a built-in cross-validation set for each tree, providing an unbiased error estimate with zero additional training cost.",
    whyWrong: {
      B: "Training accuracy is biased and multiplying by an arbitrary factor is mathematically invalid.",
      C: "Testing on synthetic SMOTE data introduces distribution artifacts and does not measure true generalization.",
      D: "Disabling bootstrapping eliminates the core variance-reduction power of Random Forests."
    },
    keyConcept: "Out-of-Bag (OOB) Score: Built-in validation metric in bagging algorithms derived from the ~36.8% samples left unpicked during bootstrapping."
  },
  {
    id: 29,
    topicId: "advanced_ml",
    topicName: "Advanced Machine Learning",
    type: "practical",
    difficulty: "hard",
    question: "Which of the following describes key algorithmic advancements introduced by XGBoost over standard gradient boosting implementations?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "XGBoost uses exclusively first-order gradients and trains trees to infinite depth." },
      { id: "B", text: "XGBoost optimizes a second-order Taylor expansion of the loss (gradients and Hessians), adds explicit tree complexity penalties (L1/L2 and leaf count), and learns a default split direction for missing values." },
      { id: "C", text: "XGBoost trains completely unpruned decision trees using genetic algorithms." },
      { id: "D", text: "XGBoost can only run on a single CPU thread and cannot handle sparse matrices." }
    ],
    correctAnswer: "B",
    explanation: "XGBoost improves on standard GBM by: 1) using second-order Taylor approximation ($g_i$ gradients and $h_i$ Hessians), 2) including formal regularization terms in the objective function ($\\Omega(f) = \\gamma T + \\frac{1}{2}\\lambda \\sum w_j^2$), 3) sparsity-aware split finding for automatic handling of missing values, and 4) parallelized column block structures.",
    whyWrong: {
      A: "XGBoost utilizes second-order Hessians, not just first-order gradients.",
      C: "XGBoost prunes trees using a max_depth limit and negative gain threshold ($\\gamma$).",
      D: "XGBoost is famous for parallel multi-threading, GPU acceleration, and native sparse matrix handling."
    },
    keyConcept: "XGBoost Innovations: Second-order Taylor optimization, regularization parameters ($\\gamma, \\lambda, \\alpha$), and native missing-value routing."
  },
  {
    id: 30,
    topicId: "advanced_ml",
    topicName: "Advanced Machine Learning",
    type: "practical",
    difficulty: "medium",
    question: "You need to tune 8 continuous hyperparameters for a deep learning model where each training iteration takes 2 hours. Your compute budget allows for only 40 total training runs. Which hyperparameter optimization technique is most suitable?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Grid Search, because it guarantees testing all parameter combinations." },
      { id: "B", text: "Bayesian Optimization (e.g., using Gaussian Processes or Tree-structured Parzen Estimators), because it builds a probabilistic surrogate model to balance exploration and exploitation based on past trials." },
      { id: "C", text: "Brute-force exhaustive search across all combinations." },
      { id: "D", text: "Genetic recombination requiring 5,000 generations." }
    ],
    correctAnswer: "B",
    explanation: "Grid Search suffers from the curse of dimensionality (8 parameters with 3 values each requires $3^8 = 6,561$ runs). Bayesian Optimization uses historical evaluation outputs to fit a surrogate model (like Gaussian Processes or TPE) and evaluates an acquisition function (e.g., Expected Improvement) to intelligently select the most promising next hyperparameter point, maximizing efficiency under tight budgets.",
    whyWrong: {
      A: "Grid Search would require thousands of runs and is impossible within 40 trials.",
      C: "Exhaustive search is identical to grid search and fails for continuous high-dimensional search spaces.",
      D: "5,000 generations would take 10,000 hours, exceeding the budget."
    },
    keyConcept: "Hyperparameter Search: Grid Search = exhaustive/slow; Random Search = unguided exploration; Bayesian Optimization = intelligent sequential probabilistic search."
  },

  // ==================== TOPIC 7: GENERATIVE AI & LLMS ====================
  {
    id: 31,
    topicId: "genai",
    topicName: "Generative AI & LLMs",
    type: "theory",
    difficulty: "medium",
    question: "In the Transformer Scaled Dot-Product Attention equation $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$, why is the dot product $Q K^T$ divided by the scaling factor $\\sqrt{d_k}$?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "To compress the dimension of the value matrix $V$ down to 1." },
      { id: "B", text: "For large projection dimensions $d_k$, the dot product grows large in magnitude, pushing the softmax function into regions with extremely small gradients (vanishing gradients); scaling preserves unit variance." },
      { id: "C", text: "To prevent the model from attending to tokens in the prompt context." },
      { id: "D", text: "To guarantee that all matrix values are positive integers." }
    ],
    correctAnswer: "B",
    explanation: "Assuming $q$ and $k$ are independent random variables with zero mean and unit variance, their dot product has mean 0 and variance $d_k$. For large dimensions (e.g., $d_k = 64$ or $128$), the dot products grow large, pushing softmax into extreme saturation zones with near-zero gradients. Dividing by $\\sqrt{d_k}$ scales variance back to 1, stabilizing training.",
    whyWrong: {
      A: "Scaling is a scalar division; it does not change matrix shape.",
      C: "Causal masking (setting future positions to $-\\infty$) controls attention direction, not the $\\sqrt{d_k}$ factor.",
      D: "Softmax handles real values; scaling does not turn values into integers."
    },
    keyConcept: "Scaled Dot-Product Attention: Scaling by $\\frac{1}{\\sqrt{d_k}}$ prevents softmax gradient saturation during backpropagation."
  },
  {
    id: 32,
    topicId: "genai",
    topicName: "Generative AI & LLMs",
    type: "theory",
    difficulty: "easy",
    question: "Which of the following correctly pairs Transformer architectural variants with their primary operational design and flagship model?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Encoder-only (BERT) for bi-directional representation/classification; Decoder-only (GPT) for autoregressive causal token generation." },
      { id: "B", text: "Decoder-only (BERT) for machine translation; Encoder-only (GPT) for sentiment analysis." },
      { id: "C", text: "Encoder-Decoder (GPT-4) for classification; Decoder-only (T5) for masked token filling." },
      { id: "D", text: "All modern LLMs are recurrent neural networks (RNNs) with no attention layers." }
    ],
    correctAnswer: "A",
    explanation: "Encoder-only models (BERT, RoBERTa) inspect tokens bidirectionally, making them ideal for sentence embeddings and classification. Decoder-only models (GPT-3/4, LLaMA) use causal masking to predict the next token autoregressively. Encoder-Decoder models (T5, BART) map an input sequence to a separate output sequence (translation, summarization).",
    whyWrong: {
      B: "BERT is Encoder-only; GPT is Decoder-only.",
      C: "GPT-4 is a Decoder-only autoregressive model; T5 is Encoder-Decoder.",
      D: "Modern LLMs are built on the Transformer attention architecture, not recurrent networks."
    },
    keyConcept: "Transformer Variants: Encoder-only (Bi-directional understanding), Decoder-only (Autoregressive text generation), Encoder-Decoder (Sequence-to-sequence translation)."
  },
  {
    id: 33,
    topicId: "genai",
    topicName: "Generative AI & LLMs",
    type: "practical",
    difficulty: "medium",
    question: "An enterprise is building an LLM-powered financial compliance tool to extract numerical figures from SEC 10-K filings. The application currently hallucinates inconsistent financial figures on repeated runs. Which parameter configuration is most effective to enforce deterministic, strictly factual outputs?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Increase Temperature to 1.8 and set Top-p to 0.99." },
      { id: "B", text: "Set Temperature to 0.0 (greedy decoding) and restrict Top-p to a low threshold (e.g., 0.1)." },
      { id: "C", text: "Increase maximum token length and enable frequency penalty of 2.0." },
      { id: "D", text: "Remove the system prompt completely." }
    ],
    correctAnswer: "B",
    explanation: "Temperature scales logits before softmax ($p_i = \\frac{e^{z_i / T}}{\\sum e^{z_j / T}}$). As $T \\rightarrow 0$, the probability distribution collapses into greedy decoding, where the single highest-probability token is selected deterministically every time, minimizing creativity and hallucinations for extraction tasks.",
    whyWrong: {
      A: "High temperature ($T = 1.8$) flattens probability distributions, causing maximum randomness and hallucinations.",
      C: "Frequency penalty discourages repeating words, which could penalize repeated financial figures.",
      D: "Removing the system prompt deprives the model of behavioral grounding and extraction guidelines."
    },
    keyConcept: "LLM Decoding Parameters: Low Temperature (0.0 - 0.2) = deterministic and factual; High Temperature (0.7 - 1.2) = diverse and creative."
  },
  {
    id: 34,
    topicId: "genai",
    topicName: "Generative AI & LLMs",
    type: "practical",
    difficulty: "medium",
    question: "A company requires an internal HR assistant that can answer employee questions about internal leave policies, reimbursement schedules, and health plans. The company's policies update weekly, and every answer must cite the specific handbook section. Which approach is most architecturally sound and cost-effective?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Pretrain a 70B parameter foundational model from scratch on the HR documents." },
      { id: "B", text: "Supervised Fine-Tuning (SFT) of an open-weights LLM each time a policy updates." },
      { id: "C", text: "Retrieval-Augmented Generation (RAG) connecting the LLM to a vector database indexing the chunked policy documents with metadata citations." },
      { id: "D", text: "Quantizing the model weights from 16-bit to 4-bit." }
    ],
    correctAnswer: "C",
    explanation: "Fine-tuning or pretraining encodes knowledge into static weights, which is expensive, suffers from catastrophic forgetting, cannot update weekly without continuous retraining, and cannot provide verifiable document citations. RAG decouples knowledge storage from generation, allowing real-time index updates and exact paragraph citations.",
    whyWrong: {
      A: "Pretraining from scratch costs millions of dollars and cannot be repeated weekly.",
      B: "Fine-tuning is prone to hallucinations, cannot reliably cite sources, and takes hours of compute per update.",
      D: "Quantization reduces memory footprint; it does not inject enterprise knowledge."
    },
    keyConcept: "RAG vs Fine-Tuning: RAG is ideal for dynamic knowledge, external documentation, and verifiable citations; Fine-tuning is ideal for teaching stylistic tone, syntax, or domain format."
  },
  {
    id: 35,
    topicId: "genai",
    topicName: "Generative AI & LLMs",
    type: "practical",
    difficulty: "hard",
    question: "When passing 20 retrieved technical snippets into a 32,000-token context window of an LLM, the model consistently fails to answer questions whose supporting fact is located in snippet #10 (the middle of the prompt), but succeeds when that snippet is moved to the top or bottom of the prompt. What is this phenomenon called, and how can it be mitigated?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Tokenizer Truncation; mitigate by increasing the `max_tokens` generation parameter." },
      { id: "B", text: "'Lost in the Middle' phenomenon; mitigate by using a reranker to position top-scoring chunks at the beginning and end of the context, and pruning irrelevant chunks." },
      { id: "C", text: "Vector embedding drift; mitigate by re-indexing the vector database." },
      { id: "D", text: "Greedy decoding collapse; mitigate by increasing Temperature to 1.5." }
    ],
    correctAnswer: "B",
    explanation: "Research (Liu et al., 'Lost in the Middle') reveals that decoder attention mechanisms suffer from positional bias: models access information placed at the beginning (primacy effect) or end (recency effect) of long context windows much more reliably than facts placed in the center. Rerankers and contextual compressors mitigate this by placing top-priority chunks at boundaries.",
    whyWrong: {
      A: "The text was within the 32k window and not truncated; the issue is attention distribution.",
      C: "The retriever successfully fetched snippet #10; the failure occurred inside LLM context processing.",
      D: "Adjusting temperature does not correct positional attention degradation."
    },
    keyConcept: "'Lost in the Middle': LLM retrieval and attention performance degrades significantly when key supporting evidence is located in the middle of long context prompts."
  },

  // ==================== TOPIC 8: AGENTIC AI & RAG ====================
  {
    id: 36,
    topicId: "agentic",
    topicName: "Agentic AI & RAG",
    type: "theory",
    difficulty: "easy",
    question: "In the ReAct (Reasoning + Acting) agent framework, what is the core cyclic execution pattern that enables an LLM agent to solve complex multi-step problems?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "The agent generates Python code and compiles it offline without external tool access." },
      { id: "B", text: "The agent generates a Thought (reasoning), selects an Action (tool/API call with arguments), receives an Observation (environment/tool output), and repeats until the final answer is synthesized." },
      { id: "C", text: "The agent fine-tunes its own weights via backpropagation after each user query." },
      { id: "D", text: "The agent executes an infinite loop that ignores API rate limits." }
    ],
    correctAnswer: "B",
    explanation: "ReAct alternates between generating explicit verbal reasoning traces ('Thought') and structured actions ('Action') targeting tools (search, database, calculator). The environment executes the action and returns the output ('Observation'), which the agent ingests to inform the next reasoning step.",
    whyWrong: {
      A: "ReAct is built specifically to interact with external tools and environments.",
      C: "LLM agents run at inference time; they do not update model weights during user sessions.",
      D: "Agent loops require stopping criteria and guardrails to prevent runaway execution."
    },
    keyConcept: "ReAct Pattern: Thought -> Action -> Observation cycle enabling reasoning, tool invocation, and grounded decision making."
  },
  {
    id: 37,
    topicId: "agentic",
    topicName: "Agentic AI & RAG",
    type: "theory",
    difficulty: "medium",
    question: "When chunking large unstructured technical manuals for a vector database in a RAG pipeline, why is sliding token overlap (e.g., chunk size of 500 tokens with 50 tokens overlap) recommended over 0% overlap?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "To artificially inflate the size of the vector database for benchmarking." },
      { id: "B", text: "To prevent crucial semantic context, relationships, and sentence boundaries from being split abruptly across consecutive chunks." },
      { id: "C", text: "To allow the embedding model to learn new vocabulary tokens." },
      { id: "D", text: "To convert dense vector embeddings into sparse keyword matrices." }
    ],
    correctAnswer: "B",
    explanation: "Hard splits at token limits risk cutting sentences or clauses in half. For example, if a conditional clause ('Do not press button A if...') is split so the premise is in Chunk 1 and the condition is in Chunk 2, the true semantic meaning is lost. Overlap ensures boundary context is captured in both adjacent chunks.",
    whyWrong: {
      A: "Database expansion is a side effect, not the engineering objective.",
      C: "Embedding models are frozen during chunking and do not update their token vocabulary.",
      D: "Chunk overlap does not alter the dense embedding generation process."
    },
    keyConcept: "Document Chunking: Token overlap (10-20%) preserves boundary semantics and prevents contextual fragmentation."
  },
  {
    id: 38,
    topicId: "agentic",
    topicName: "Agentic AI & RAG",
    type: "practical",
    difficulty: "medium",
    question: "A technical support RAG system uses pure dense vector search (cosine similarity on OpenAI embeddings). A technician queries: 'How to fix error code ERR_CONN_RESET_904 on model X-42?'. The vector search returns general network overviews but completely misses the exact troubleshooting article for model X-42. What is the cause and the industry-standard solution?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Dense embeddings prioritize semantic concepts and often fail on rare alphanumeric identifiers, error codes, and model numbers; implement Hybrid Search (combining BM25 sparse search with dense embeddings) followed by a Cross-Encoder Reranker." },
      { id: "B", text: "Cosine similarity cannot process strings containing numbers; switch to Euclidean distance." },
      { id: "C", text: "The vector database chunk size was too large; reduce chunk size to 2 tokens." },
      { id: "D", text: "The prompt temperature was too low; set temperature to 1.5." }
    ],
    correctAnswer: "A",
    explanation: "Dense embeddings project text into continuous semantic space where exact alphanumeric tokens (e.g., `ERR_CONN_RESET_904`, `X-42`) get diluted into general topic representations ('networking errors'). Hybrid Search combines BM25 (exact keyword matching) with dense vector search via Reciprocal Rank Fusion (RRF), ensuring exact token hits are retrieved.",
    whyWrong: {
      B: "Cosine similarity operates on numerical vectors, not strings; numbers are tokenized like any other characters.",
      C: "2-token chunks destroy all semantic context and make vector retrieval meaningless.",
      D: "Temperature is a generation parameter; it has zero impact on retrieval."
    },
    keyConcept: "Hybrid Search: Combines Sparse Lexical Search (BM25 for exact codes/SKUs) + Dense Semantic Search (embeddings for meaning) + Reranking."
  },
  {
    id: 39,
    topicId: "agentic",
    topicName: "Agentic AI & RAG",
    type: "practical",
    difficulty: "hard",
    question: "An AI agent invokes a tool `transfer_funds(account_id: int, amount: float, currency: str)`. Occasionally, the LLM hallucinates string arguments `account_id='acc_98'` or unsupported currency `currency='BITCOIN'`, causing API crashes. What is the most robust software architecture pattern to prevent this?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Increase LLM temperature to 1.2 to foster self-correction." },
      { id: "B", text: "Define structured schemas using Pydantic/JSON Schema with typed fields and Enum constraints, intercept tool call inputs with a deterministic validator, and feed validation errors back into the agent loop for automated retry." },
      { id: "C", text: "Remove the `transfer_funds` tool and have the LLM output raw SQL." },
      { id: "D", text: "Instruct the LLM in plain English to never make mistakes." }
    ],
    correctAnswer: "B",
    explanation: "Using formal schema validation (e.g. Pydantic models with Enums for currency and type constraints for IDs) guarantees programmatic verification before execution. If validation fails, intercepting the error and returning the descriptive schema traceback to the LLM allows it to correct its parameters autonomously.",
    whyWrong: {
      A: "Increasing temperature increases randomness and worsens argument formatting errors.",
      C: "Allowing an LLM to generate raw SQL mutations directly introduces severe security vulnerabilities and injection risks.",
      D: "Prompt-only instructions ('be careful', 'never make mistakes') fail probabilistically in production."
    },
    keyConcept: "Agent Tool Guardrails: Combine strict schema validation (Pydantic/JSON Schema) with error-feedback reflection loops before executing critical actions."
  },
  {
    id: 40,
    topicId: "agentic",
    topicName: "Agentic AI & RAG",
    type: "practical",
    difficulty: "hard",
    question: "In a multi-agent system, Agent A (Coder) and Agent B (Code Reviewer) communicate iteratively. During a run, Agent B suggests a minor styling tweak, Agent A rewrites the code, Agent B asks for another slight adjustment, and the two agents enter an infinite execution loop, burning API budget. What architectural guardrails prevent this?",
    codeSnippet: null,
    schemaInfo: null,
    options: [
      { id: "A", text: "Delete Agent B completely and never review code." },
      { id: "B", text: "Implement a deterministic `max_iterations` cutoff, define explicit programmatic exit conditions (e.g., test suite pass or consensus check), and use a central supervisor agent with timeout controls." },
      { id: "C", text: "Restrict both agents' context windows to 256 tokens." },
      { id: "D", text: "Run Agent A and Agent B sequentially without passing chat history." }
    ],
    correctAnswer: "B",
    explanation: "Multi-agent workflows (like LangGraph or AutoGen) require state graph flow controls: 1) a maximum recursion/iteration depth (e.g. `max_iterations=5`), 2) deterministic termination criteria (e.g., unit test suite passing rather than subjective reviewer approval), and 3) supervisor/orchestrator timeouts to break cyclic deadlocks.",
    whyWrong: {
      A: "Eliminating code review removes the architectural benefit of the multi-agent system.",
      C: "Restricting context to 256 tokens causes catastrophic context loss without solving the infinite loop.",
      D: "Preventing context passing makes collaborative revision impossible."
    },
    keyConcept: "Multi-Agent Orchestration: Enforce recursion limits (`max_iterations`), programmatic exit conditions, and supervisor oversight to prevent infinite execution loops."
  }
];
