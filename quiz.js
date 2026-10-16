/* ==========================================================================
   AI/ML Technical Placement Assessment — Controller & Interactive Logic
   ========================================================================== */

(function () {
  "use strict";

  // State Management
  const state = {
    currentIndex: 0,
    filteredIndices: [], // indices into QUIZ_QUESTIONS based on active filter
    userAnswers: {},     // { questionId: "A" | "B" | "C" | "D" }
    checkedQuestions: {},// { questionId: true } - revealed in interactive mode
    flagged: new Set(),  // Set of questionId
    mode: "interactive", // "interactive" | "exam"
    filterTopic: "all",
    timerRemaining: 40 * 60, // 40 minutes for 40 questions
    timerInterval: null,
    isSubmitted: false,
    reviewFilter: "all"  // "all" | "incorrect" | "flagged"
  };

  // DOM Elements cache
  let dom = {};

  function initQuiz() {
    cacheDom();
    bindEvents();
    applyFilter("all");
    startTimer();
    render();
  }

  function cacheDom() {
    dom = {
      // Main containers
      compilerNavBtn: document.getElementById("tab-nav-compiler"),
      quizNavBtn: document.getElementById("tab-nav-quiz"),
      compilerMain: document.getElementById("app-main"),
      quizMain: document.getElementById("aiml-quiz-main"),
      headerLangGroup: document.getElementById("lang-selector-group"),
      headerEnvGroup: document.getElementById("env-selector") ? document.getElementById("env-selector").parentElement : null,

      // Quiz Subheader / Controls
      modeSelect: document.getElementById("quiz-mode-select"),
      timerDisplay: document.getElementById("quiz-timer-display"),
      topicPillsContainer: document.getElementById("quiz-topic-pills"),
      questionPalette: document.getElementById("quiz-question-palette"),
      quickScore: document.getElementById("quiz-quick-score"),

      // Question Card
      qTopicBadge: document.getElementById("quiz-q-topic"),
      qDifficultyBadge: document.getElementById("quiz-q-difficulty"),
      qTypeBadge: document.getElementById("quiz-q-type"),
      qNumberText: document.getElementById("quiz-q-number"),
      qQuestionText: document.getElementById("quiz-question-text"),
      qCodeWrapper: document.getElementById("quiz-code-wrapper"),
      qCodeBlock: document.getElementById("quiz-code-block"),
      qSchemaBlock: document.getElementById("quiz-schema-block"),
      optionsContainer: document.getElementById("quiz-options-container"),
      feedbackCard: document.getElementById("quiz-feedback-card"),

      // Navigation Actions
      btnPrev: document.getElementById("quiz-btn-prev"),
      btnNext: document.getElementById("quiz-btn-next"),
      btnFlag: document.getElementById("quiz-btn-flag"),
      btnCheck: document.getElementById("quiz-btn-check"),
      btnClear: document.getElementById("quiz-btn-clear"),
      btnSubmit: document.getElementById("quiz-btn-submit"),
      btnReset: document.getElementById("quiz-btn-reset"),

      // Scorecard Modal
      scorecardDialog: document.getElementById("quiz-scorecard-dialog"),
      scorecardCloseBtn: document.getElementById("quiz-scorecard-close"),
      scorecardRetakeBtn: document.getElementById("quiz-scorecard-retake"),
      scorecardReviewBtn: document.getElementById("quiz-scorecard-review"),
      scorecardTotalMarks: document.getElementById("scorecard-total-marks"),
      scorecardPercentage: document.getElementById("scorecard-percentage"),
      scorecardBadge: document.getElementById("scorecard-status-badge"),
      scorecardTopicBars: document.getElementById("scorecard-topic-bars"),
      scorecardWeakTopics: document.getElementById("scorecard-weak-topics")
    };
  }

  function bindEvents() {
    // Top Tab Switching
    if (dom.compilerNavBtn && dom.quizNavBtn) {
      dom.compilerNavBtn.addEventListener("click", () => switchMainTab("compiler"));
      dom.quizNavBtn.addEventListener("click", () => switchMainTab("quiz"));
    }

    // Mode Toggle
    if (dom.modeSelect) {
      dom.modeSelect.addEventListener("change", (e) => {
        state.mode = e.target.value;
        render();
      });
    }

    // Navigation Buttons
    if (dom.btnPrev) {
      dom.btnPrev.addEventListener("click", () => navigateQuestion(-1));
    }
    if (dom.btnNext) {
      dom.btnNext.addEventListener("click", () => navigateQuestion(1));
    }
    if (dom.btnFlag) {
      dom.btnFlag.addEventListener("click", toggleFlagCurrent);
    }
    if (dom.btnCheck) {
      dom.btnCheck.addEventListener("click", checkAnswerCurrent);
    }
    if (dom.btnClear) {
      dom.btnClear.addEventListener("click", clearAnswerCurrent);
    }
    if (dom.btnSubmit) {
      dom.btnSubmit.addEventListener("click", submitAssessment);
    }
    if (dom.btnReset) {
      dom.btnReset.addEventListener("click", resetAssessment);
    }

    // Scorecard Dialog Buttons
    if (dom.scorecardCloseBtn) {
      dom.scorecardCloseBtn.addEventListener("click", () => dom.scorecardDialog.close());
    }
    if (dom.scorecardReviewBtn) {
      dom.scorecardReviewBtn.addEventListener("click", () => {
        dom.scorecardDialog.close();
        render();
      });
    }
    if (dom.scorecardRetakeBtn) {
      dom.scorecardRetakeBtn.addEventListener("click", () => {
        dom.scorecardDialog.close();
        resetAssessment();
      });
    }

    // Keyboard navigation (Left / Right arrow for questions, 1-4 for options)
    document.addEventListener("keydown", (e) => {
      if (!dom.quizMain || dom.quizMain.style.display === "none") return;
      if (dom.scorecardDialog && dom.scorecardDialog.open) return;

      if (e.key === "ArrowLeft" && (e.altKey || !isInputField(e.target))) {
        e.preventDefault();
        navigateQuestion(-1);
      } else if (e.key === "ArrowRight" && (e.altKey || !isInputField(e.target))) {
        e.preventDefault();
        navigateQuestion(1);
      } else if (["1", "2", "3", "4"].includes(e.key) && !isInputField(e.target) && !state.isSubmitted) {
        const optionIds = ["A", "B", "C", "D"];
        const selectedId = optionIds[parseInt(e.key, 10) - 1];
        selectOption(selectedId);
      }
    });
  }

  function isInputField(el) {
    return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
  }

  function switchMainTab(tabName) {
    if (tabName === "compiler") {
      dom.compilerNavBtn.classList.add("active");
      dom.quizNavBtn.classList.remove("active");
      dom.compilerMain.style.display = "flex";
      dom.quizMain.style.display = "none";
      if (dom.headerLangGroup) dom.headerLangGroup.style.display = "flex";
      if (dom.headerEnvGroup) dom.headerEnvGroup.style.display = "flex";

      // Trigger Monaco editor relayout if initialized
      if (window.monacoEditor) {
        setTimeout(() => window.monacoEditor.layout(), 50);
      }
    } else {
      dom.quizNavBtn.classList.add("active");
      dom.compilerNavBtn.classList.remove("active");
      dom.compilerMain.style.display = "none";
      dom.quizMain.style.display = "flex";
      if (dom.headerLangGroup) dom.headerLangGroup.style.display = "none";
      if (dom.headerEnvGroup) dom.headerEnvGroup.style.display = "none";
      render();
    }
  }

  function applyFilter(topicId) {
    state.filterTopic = topicId;
    if (topicId === "all") {
      state.filteredIndices = QUIZ_QUESTIONS.map((_, i) => i);
    } else {
      state.filteredIndices = [];
      QUIZ_QUESTIONS.forEach((q, i) => {
        if (q.topicId === topicId) state.filteredIndices.push(i);
      });
    }
    state.currentIndex = 0;
    render();
  }

  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      if (state.isSubmitted) return;
      if (state.timerRemaining > 0) {
        state.timerRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.timerInterval);
        alert("Time is up! Submitting your assessment automatically.");
        submitAssessment();
      }
    }, 1000);
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    if (!dom.timerDisplay) return;
    const mins = Math.floor(state.timerRemaining / 60);
    const secs = state.timerRemaining % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    dom.timerDisplay.textContent = `⏱️ ${formatted}`;
    if (state.timerRemaining <= 300) {
      dom.timerDisplay.style.color = "#ef4444";
      dom.timerDisplay.style.fontWeight = "700";
    } else {
      dom.timerDisplay.style.color = "#f59e0b";
      dom.timerDisplay.style.fontWeight = "600";
    }
  }

  function getCurrentQuestion() {
    if (!state.filteredIndices.length) return null;
    const realIndex = state.filteredIndices[state.currentIndex];
    return QUIZ_QUESTIONS[realIndex];
  }

  function navigateQuestion(offset) {
    const newIdx = state.currentIndex + offset;
    if (newIdx >= 0 && newIdx < state.filteredIndices.length) {
      state.currentIndex = newIdx;
      render();
    }
  }

  function toggleFlagCurrent() {
    const q = getCurrentQuestion();
    if (!q) return;
    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    render();
  }

  function checkAnswerCurrent() {
    const q = getCurrentQuestion();
    if (!q) return;
    state.checkedQuestions[q.id] = true;
    render();
  }

  function clearAnswerCurrent() {
    if (state.isSubmitted) return;
    const q = getCurrentQuestion();
    if (!q) return;
    delete state.userAnswers[q.id];
    delete state.checkedQuestions[q.id];
    render();
  }

  function selectOption(optionId) {
    if (state.isSubmitted) return;
    const q = getCurrentQuestion();
    if (!q) return;
    state.userAnswers[q.id] = optionId;

    // In interactive mode, automatically reveal explanation when answered
    if (state.mode === "interactive") {
      state.checkedQuestions[q.id] = true;
    }
    render();
  }

  function submitAssessment() {
    state.isSubmitted = true;
    if (state.timerInterval) clearInterval(state.timerInterval);

    // Compute score & analytics
    const results = computeScore();
    displayScorecard(results);
    render();
  }

  function resetAssessment() {
    if (confirm("Are you sure you want to restart the assessment? All answers and progress will be reset.")) {
      state.userAnswers = {};
      state.checkedQuestions = {};
      state.flagged.clear();
      state.isSubmitted = false;
      state.timerRemaining = 40 * 60;
      state.currentIndex = 0;
      startTimer();
      render();
    }
  }

  function computeScore() {
    let totalScore = 0;
    const topicStats = {};

    QUIZ_TOPICS.forEach((t) => {
      if (t.id !== "all") {
        topicStats[t.id] = { name: t.name, total: 0, correct: 0, incorrect: 0, unattempted: 0 };
      }
    });

    QUIZ_QUESTIONS.forEach((q) => {
      const userAns = state.userAnswers[q.id];
      const isCorrect = userAns === q.correctAnswer;
      const isAttempted = userAns !== undefined;

      if (topicStats[q.topicId]) {
        topicStats[q.topicId].total++;
        if (isCorrect) {
          topicStats[q.topicId].correct++;
          totalScore++;
        } else if (isAttempted) {
          topicStats[q.topicId].incorrect++;
        } else {
          topicStats[q.topicId].unattempted++;
        }
      }
    });

    const percentage = ((totalScore / QUIZ_QUESTIONS.length) * 100).toFixed(1);

    // Find weak topics (< 60% accuracy)
    const weakTopics = [];
    Object.keys(topicStats).forEach((tid) => {
      const stat = topicStats[tid];
      const pct = stat.total > 0 ? (stat.correct / stat.total) * 100 : 0;
      if (pct < 60) {
        weakTopics.push({ topicId: tid, name: stat.name, pct: pct.toFixed(0), correct: stat.correct, total: stat.total });
      }
    });

    return {
      totalScore,
      totalQuestions: QUIZ_QUESTIONS.length,
      percentage,
      topicStats,
      weakTopics
    };
  }

  function displayScorecard(results) {
    if (!dom.scorecardDialog) return;

    dom.scorecardTotalMarks.textContent = `${results.totalScore} / ${results.totalQuestions}`;
    dom.scorecardPercentage.textContent = `${results.percentage}% Score`;

    // Placement readiness badge
    if (results.percentage >= 80) {
      dom.scorecardBadge.textContent = "🔥 Placement Ready (Excellent)";
      dom.scorecardBadge.className = "scorecard-badge badge-success";
    } else if (results.percentage >= 60) {
      dom.scorecardBadge.textContent = "📈 Solid Foundation (Good)";
      dom.scorecardBadge.className = "scorecard-badge badge-warning";
    } else {
      dom.scorecardBadge.textContent = "⚠️ Needs Targeted Revision";
      dom.scorecardBadge.className = "scorecard-badge badge-danger";
    }

    // Topic Bars
    let barsHtml = "";
    Object.keys(results.topicStats).forEach((tid) => {
      const stat = results.topicStats[tid];
      const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
      const barColor = pct >= 80 ? "#10b981" : pct >= 60 ? "#f59e0b" : "#ef4444";

      barsHtml += `
        <div class="scorecard-topic-row">
          <div class="scorecard-topic-header">
            <span class="topic-title">${stat.name}</span>
            <span class="topic-score">${stat.correct} / ${stat.total} (${pct}%)</span>
          </div>
          <div class="scorecard-progress-track">
            <div class="scorecard-progress-bar" style="width: ${pct}%; background: ${barColor};"></div>
          </div>
        </div>
      `;
    });
    dom.scorecardTopicBars.innerHTML = barsHtml;

    // Weak topics feedback
    if (results.weakTopics.length > 0) {
      let weakHtml = `<p style="margin: 0 0 10px 0; color: #f87171; font-weight: 600;">Recommended Topics to Revise Before Real Placement Tests:</p><ul style="margin: 0; padding-left: 20px; color: #cbd5e1; line-height: 1.7;">`;
      results.weakTopics.forEach((wt) => {
        weakHtml += `<li><strong>${wt.name}</strong> (${wt.correct}/${wt.total} correct, ${wt.pct}%): Review key concepts and interview problem sets.</li>`;
      });
      weakHtml += `</ul>`;
      dom.scorecardWeakTopics.innerHTML = weakHtml;
    } else {
      dom.scorecardWeakTopics.innerHTML = `<p style="margin: 0; color: #34d399; font-weight: 600;">🌟 Outstanding! You scored above 60% in every single topic across the assessment.</p>`;
    }

    dom.scorecardDialog.showModal();
  }

  function render() {
    renderTopicPills();
    renderQuestionPalette();
    renderCurrentQuestion();
    renderSummaryStats();
  }

  function renderTopicPills() {
    if (!dom.topicPillsContainer) return;
    let html = "";
    QUIZ_TOPICS.forEach((t) => {
      const isActive = state.filterTopic === t.id;
      html += `
        <button class="topic-pill-btn ${isActive ? "active" : ""}" data-topic="${t.id}">
          <span class="pill-icon">${t.icon}</span>
          <span class="pill-name">${t.name}</span>
          <span class="pill-count">${t.count}</span>
        </button>
      `;
    });
    dom.topicPillsContainer.innerHTML = html;

    dom.topicPillsContainer.querySelectorAll(".topic-pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyFilter(btn.getAttribute("data-topic"));
      });
    });
  }

  function renderQuestionPalette() {
    if (!dom.questionPalette) return;
    let html = "";
    state.filteredIndices.forEach((realIdx, pos) => {
      const q = QUIZ_QUESTIONS[realIdx];
      const isCurrent = pos === state.currentIndex;
      const isAnswered = state.userAnswers[q.id] !== undefined;
      const isFlagged = state.flagged.has(q.id);
      const isCorrect = state.userAnswers[q.id] === q.correctAnswer;
      const isRevealed = state.isSubmitted || state.checkedQuestions[q.id];

      let statusClass = "status-unattempted";
      if (isRevealed && isAnswered) {
        statusClass = isCorrect ? "status-correct" : "status-incorrect";
      } else if (isAnswered) {
        statusClass = "status-answered";
      }

      if (isFlagged) {
        statusClass += " is-flagged";
      }
      if (isCurrent) {
        statusClass += " is-current";
      }

      html += `
        <button class="palette-item-btn ${statusClass}" data-pos="${pos}" title="Q${q.id}: ${q.topicName}">
          ${q.id}
          ${isFlagged ? '<span class="palette-flag-dot">🚩</span>' : ""}
        </button>
      `;
    });
    dom.questionPalette.innerHTML = html;

    dom.questionPalette.querySelectorAll(".palette-item-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.currentIndex = parseInt(btn.getAttribute("data-pos"), 10);
        render();
      });
    });
  }

  function renderCurrentQuestion() {
    const q = getCurrentQuestion();
    if (!q) {
      if (dom.qQuestionText) dom.qQuestionText.textContent = "No questions match the selected filter.";
      return;
    }

    // Top badges
    if (dom.qTopicBadge) dom.qTopicBadge.textContent = q.topicName;
    if (dom.qDifficultyBadge) {
      dom.qDifficultyBadge.textContent = q.difficulty.toUpperCase();
      dom.qDifficultyBadge.className = `badge-difficulty badge-${q.difficulty}`;
    }
    if (dom.qTypeBadge) {
      dom.qTypeBadge.textContent = q.type === "theory" ? "Conceptual" : "Scenario / Code";
    }
    if (dom.qNumberText) {
      dom.qNumberText.textContent = `Question ${q.id} of ${QUIZ_QUESTIONS.length} (${state.currentIndex + 1} of ${state.filteredIndices.length} in view)`;
    }

    // Question body
    if (dom.qQuestionText) {
      dom.qQuestionText.textContent = q.question;
    }

    // Code Snippet & Schema
    if (dom.qCodeWrapper) {
      if (q.codeSnippet) {
        dom.qCodeWrapper.style.display = "block";
        dom.qCodeBlock.textContent = q.codeSnippet;
      } else {
        dom.qCodeWrapper.style.display = "none";
      }
    }
    if (dom.qSchemaBlock) {
      if (q.schemaInfo) {
        dom.qSchemaBlock.style.display = "block";
        dom.qSchemaBlock.innerHTML = `<strong>Schema:</strong> <code>${escapeHtml(q.schemaInfo)}</code>`;
      } else {
        dom.qSchemaBlock.style.display = "none";
      }
    }

    // Render 4 Options
    const userSelected = state.userAnswers[q.id];
    const isRevealed = state.isSubmitted || state.checkedQuestions[q.id];

    let optionsHtml = "";
    q.options.forEach((opt) => {
      const isChosen = userSelected === opt.id;
      const isRight = opt.id === q.correctAnswer;

      let cardClass = "quiz-option-card";
      let statusIndicator = `<span class="option-key">${opt.id}</span>`;

      if (isChosen) {
        cardClass += " selected";
      }

      if (isRevealed) {
        if (isRight) {
          cardClass += " option-correct";
          statusIndicator = `<span class="option-key correct-key">✓ ${opt.id}</span>`;
        } else if (isChosen && !isRight) {
          cardClass += " option-wrong";
          statusIndicator = `<span class="option-key wrong-key">✕ ${opt.id}</span>`;
        }
      }

      optionsHtml += `
        <div class="${cardClass}" data-option="${opt.id}" tabindex="0" role="button" aria-pressed="${isChosen}">
          ${statusIndicator}
          <div class="option-content-text">${escapeHtml(opt.text)}</div>
          ${isRevealed && isRight ? '<span class="correct-badge-pill">Correct Answer</span>' : ""}
        </div>
      `;
    });
    dom.optionsContainer.innerHTML = optionsHtml;

    dom.optionsContainer.querySelectorAll(".quiz-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectOption(card.getAttribute("data-option"));
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectOption(card.getAttribute("data-option"));
        }
      });
    });

    // Feedback & Explanation card
    if (dom.feedbackCard) {
      if (isRevealed) {
        dom.feedbackCard.style.display = "block";
        const isCorrect = userSelected === q.correctAnswer;
        const statusHeader = isCorrect
          ? `<div class="feedback-header feedback-success">
               <span>✅ Correct! (+1 Mark)</span>
             </div>`
          : `<div class="feedback-header feedback-danger">
               <span>${userSelected ? "❌ Incorrect (0 Marks)" : "⚠️ Unattempted (0 Marks)"} — Correct Answer: Option ${q.correctAnswer}</span>
             </div>`;

        let distractorsHtml = "";
        if (q.whyWrong) {
          distractorsHtml = `<div class="feedback-distractors">
            <h5 style="margin: 8px 0 4px 0; color: #94a3b8; font-size: 13px;">Why Other Options Are Incorrect:</h5>
            <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; line-height: 1.6;">`;
          Object.keys(q.whyWrong).forEach((optKey) => {
            distractorsHtml += `<li><strong>Option ${optKey}:</strong> ${escapeHtml(q.whyWrong[optKey])}</li>`;
          });
          distractorsHtml += `</ul></div>`;
        }

        dom.feedbackCard.innerHTML = `
          ${statusHeader}
          <div class="feedback-body">
            <div class="feedback-explanation">
              <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
            </div>
            ${distractorsHtml}
            <div class="feedback-key-concept">
              <span class="concept-icon">💡</span>
              <div><strong>Key Concept Tested:</strong> ${escapeHtml(q.keyConcept)}</div>
            </div>
          </div>
        `;
      } else {
        dom.feedbackCard.style.display = "none";
      }
    }

    // Action button states
    if (dom.btnPrev) dom.btnPrev.disabled = state.currentIndex === 0;
    if (dom.btnNext) dom.btnNext.disabled = state.currentIndex === state.filteredIndices.length - 1;

    if (dom.btnFlag) {
      const isFlagged = state.flagged.has(q.id);
      dom.btnFlag.innerHTML = isFlagged ? "🚩 Flagged" : "🏳️ Flag for Review";
      dom.btnFlag.classList.toggle("btn-flagged", isFlagged);
    }

    if (dom.btnCheck) {
      dom.btnCheck.style.display = (state.mode === "interactive" && !isRevealed && userSelected) ? "inline-flex" : "none";
    }
  }

  function renderSummaryStats() {
    if (!dom.quickScore) return;
    let answeredCount = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (state.userAnswers[q.id] !== undefined) answeredCount++;
    });

    const flaggedCount = state.flagged.size;
    let statusText = `Answered: ${answeredCount} / ${QUIZ_QUESTIONS.length}`;
    if (flaggedCount > 0) statusText += ` • Flagged: ${flaggedCount}`;

    if (state.isSubmitted) {
      let correct = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        if (state.userAnswers[q.id] === q.correctAnswer) correct++;
      });
      statusText += ` • Score: ${correct}/${QUIZ_QUESTIONS.length} (${Math.round((correct / QUIZ_QUESTIONS.length) * 100)}%)`;
    }

    dom.quickScore.textContent = statusText;
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Auto-initialize when document is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz);
  } else {
    initQuiz();
  }
})();
