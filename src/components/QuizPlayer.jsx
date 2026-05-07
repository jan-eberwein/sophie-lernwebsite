import { useState, useEffect, useRef } from 'react';
import { saveProgress, calcAccuracy } from '../utils/progressService';
import { ArrowLeft, Check, X, HelpCircle, Trophy, RefreshCcw, ArrowRight, Clock, StopCircle, Shuffle, RotateCcw, Layers } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) { return twMerge(clsx(inputs)); }

// ── Helpers ──────────────────────────────────────────────────────────────────

function safeParseJSON(str) {
  try { return str ? JSON.parse(str) : null; } catch { return null; }
}

function loadModuleStats(moduleId) {
  return safeParseJSON(localStorage.getItem(`sophie_quiz_stats_${moduleId}`)) || {};
}

function saveModuleStats(moduleId, stats) {
  localStorage.setItem(`sophie_quiz_stats_${moduleId}`, JSON.stringify(stats));
}

/**
 * Build a shuffled question list based on quiz mode.
 *
 * mode = 'normal'  – unanswered first, then wrong, then already answered (weighted)
 * mode = 'review'  – only previously wrong questions
 * mode = 'mixed'   – 70% unanswered/random + 30% wrong
 */
function buildQuestionList(mod, mode) {
  const stats        = loadModuleStats(mod.id);
  const questionStats = stats.questionStats || {};
  const wrongIds      = new Set(stats.wrongQuestionIds || []);

  const withIndex = mod.data.map((q, idx) => ({ ...q, originalIndex: idx }));

  if (mode === 'review') {
    const wrong = withIndex.filter(q => wrongIds.has(q.originalIndex));
    if (wrong.length === 0) return withIndex.sort(() => Math.random() - 0.5); // fallback
    return wrong.sort(() => Math.random() - 0.5);
  }

  if (mode === 'mixed') {
    const wrong    = withIndex.filter(q => wrongIds.has(q.originalIndex));
    const others   = withIndex.filter(q => !wrongIds.has(q.originalIndex));
    const wrongCount = Math.max(1, Math.round(withIndex.length * 0.3));
    const wrongSample = wrong.sort(() => Math.random() - 0.5).slice(0, wrongCount);
    const otherSample = others.sort(() => Math.random() - 0.5);
    return [...otherSample, ...wrongSample].sort(() => Math.random() - 0.5);
  }

  // normal: weight by wrong/correct history
  return withIndex.sort((a, b) => {
    const sa = questionStats[a.originalIndex] || { correct: 0, wrong: 0 };
    const sb = questionStats[b.originalIndex] || { correct: 0, wrong: 0 };
    const wa = Math.max(0.1, 1 + sa.wrong * 2 - sa.correct * 0.5);
    const wb = Math.max(0.1, 1 + sb.wrong * 2 - sb.correct * 0.5);
    return Math.random() * wb - Math.random() * wa;
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

const MODES = [
  {
    key:   'normal',
    label: 'Zufällig',
    icon:  Shuffle,
    color: 'primary',
    tagline: 'Optimales Lernen – empfohlen für den Alltag',
    desc: 'Alle Fragen werden intelligent gemischt. Fragen, die du in der Vergangenheit falsch beantwortet hast, erscheinen öfter – richtig beantwortete Fragen seltener.',
    bullets: [
      'Falsch beantwortete Fragen bekommen mehr Gewicht',
      'Bereits gut gelernte Fragen tauchen seltener auf',
      'Alle Fragen aus dem Modul werden berücksichtigt',
    ],
  },
  {
    key:   'review',
    label: 'Wiederholen',
    icon:  RotateCcw,
    color: 'red',
    tagline: 'Gezielte Wiederholung deiner Schwächen',
    desc: 'Du siehst ausschließlich Fragen, die du in früheren Runden falsch beantwortet hast. Perfekt, um gezielt Lücken zu schließen.',
    bullets: [
      'Nur Fragen aus deiner Fehlerliste',
      'Fragen werden zufällig gemischt',
      'Richtig beantwortete Fragen werden nach 2× aus der Liste entfernt',
    ],
  },
  {
    key:   'mixed',
    label: 'Gemischt',
    icon:  Layers,
    color: 'amber',
    tagline: 'Das Beste aus beiden Welten',
    desc: 'Du lernst hauptsächlich neue Fragen, aber ca. 30 % der Fragen kommen aus deiner Fehlerliste. So bleibt das Wiederholen im Fluss.',
    bullets: [
      '~70 % neue oder zufällige Fragen',
      '~30 % aus deinen falsch beantworteten Fragen',
      'Reihenfolge wird nochmals zufällig gemischt',
    ],
  },
];

const QuizPlayer = ({ module, onBack, user, onProgressUpdate }) => {
  const [mode, setMode]                     = useState(null); // null = mode picker screen
  const [shuffledQuestions, setShuffled]    = useState([]);
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [selectedOptions, setSelectedOpts]  = useState([]);
  const [showResult, setShowResult]         = useState(false);
  const [score, setScore]                   = useState(0);
  const [incorrectCount, setIncorrect]      = useState(0);
  const [quizFinished, setQuizFinished]     = useState(false);
  const [showFlashcardAnswer, setFCAnswer]  = useState(false);
  const [elapsedSeconds, setElapsed]        = useState(0);

  // Track which originalIndexes were answered THIS session (prevent double-count)
  const answeredThisSession = useRef(new Set());

  // Timer
  useEffect(() => {
    if (!mode || quizFinished) return;
    const id = setInterval(() => setElapsed(p => p + 1), 1000);
    return () => clearInterval(id);
  }, [mode, quizFinished]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    return `${m}:${(s % 60).toString().padStart(2, '0')}`;
  };

  const startMode = (m) => {
    setMode(m);
    setShuffled(buildQuestionList(module, m));
  };

  // ── Stats update (localStorage + Supabase) ────────────────────────────────
  const updateStats = async (originalIndex, isCorrect) => {
    // Guard: don't count the same question twice in one session
    const alreadyCounted = answeredThisSession.current.has(originalIndex);
    answeredThisSession.current.add(originalIndex);

    const stats = loadModuleStats(module.id);

    // Per-question stats
    const qStats = (stats.questionStats || {})[originalIndex] || { correct: 0, wrong: 0 };
    if (isCorrect) qStats.correct += 1; else qStats.wrong += 1;
    stats.questionStats = { ...(stats.questionStats || {}), [originalIndex]: qStats };

    // Wrong-question tracking
    const wrongIds = new Set(stats.wrongQuestionIds || []);
    if (isCorrect) {
      // Remove from wrong list only after 2 consecutive correct answers
      if (qStats.correct >= 2) wrongIds.delete(originalIndex);
    } else {
      wrongIds.add(originalIndex);
    }
    stats.wrongQuestionIds = [...wrongIds];

    // Module-level totals (only count first attempt per session per question)
    if (!alreadyCounted) {
      stats.total   = (stats.total   || 0) + 1;
      stats.correct = (stats.correct || 0) + (isCorrect ? 1 : 0);
      stats.wrong   = (stats.wrong   || 0) + (isCorrect ? 0 : 1);
    }

    saveModuleStats(module.id, stats);

    // Notify App.jsx so dashboard cards update live
    onProgressUpdate?.(module.id, stats);

    // Build global stats snapshot for Supabase
    if (user) {
      const allModuleStats = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('sophie_quiz_stats_')) {
          const id = key.replace('sophie_quiz_stats_', '');
          allModuleStats[id] = safeParseJSON(localStorage.getItem(key)) || {};
        }
      }
      const totals = Object.values(allModuleStats).reduce(
        (acc, s) => ({ correct: acc.correct + (s.correct || 0), total: acc.total + (s.total || 0), wrong: acc.wrong + (s.wrong || 0) }),
        { correct: 0, total: 0, wrong: 0 }
      );
      const globalStats = {};
      for (const [id, s] of Object.entries(allModuleStats)) {
        globalStats[id] = { correct: s.correct || 0, total: s.total || 0, wrong: s.wrong || 0 };
      }
      await saveProgress(user.id, {
        totalAnswered: totals.total,
        totalCorrect:  totals.correct,
        totalWrong:    totals.wrong,
        accuracyPct:   calcAccuracy(totals.correct, totals.total),
        moduleStats:   allModuleStats,
        globalStats,
      });
    }
  };

  // ── Interaction handlers ──────────────────────────────────────────────────
  const handleOptionToggle = (i) => {
    if (showResult) return;
    setSelectedOpts(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
    const correctOpts = shuffledQuestions[currentIndex].options
      .map((o, i) => o.isCorrect ? i : null).filter(i => i !== null);
    const isCorrect =
      selectedOptions.length === correctOpts.length &&
      selectedOptions.every(i => correctOpts.includes(i));
    if (isCorrect) setScore(s => s + 1); else setIncorrect(s => s + 1);
    updateStats(shuffledQuestions[currentIndex].originalIndex, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOpts([]);
      setShowResult(false);
      setFCAnswer(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleFlashcardEval = (isCorrect) => {
    if (isCorrect) setScore(s => s + 1); else setIncorrect(s => s + 1);
    updateStats(shuffledQuestions[currentIndex].originalIndex, isCorrect);
    handleNext();
  };

  const handleRetry = () => {
    answeredThisSession.current = new Set();
    setCurrentIndex(0); setScore(0); setIncorrect(0); setElapsed(0);
    setQuizFinished(false); setSelectedOpts([]); setShowResult(false); setFCAnswer(false);
    setShuffled(buildQuestionList(module, mode));
  };

  // ── Mode picker screen ────────────────────────────────────────────────────
  if (!mode) {
    const stats      = loadModuleStats(module.id);
    const wrongCount = (stats.wrongQuestionIds || []).length;
    const totalQ     = module.data?.length || 0;
    const answered   = stats.total || 0;

    // colour helpers
    const colorMap = {
      primary: {
        icon:   'bg-primary/10 text-primary',
        border: 'hover:border-primary',
        hover:  'hover:bg-primary/5',
        tag:    'bg-primary/10 text-primary',
        bullet: 'bg-primary',
        btn:    'bg-primary hover:bg-primary-dark text-white shadow-primary/30',
        arrow:  'group-hover:text-primary',
      },
      red: {
        icon:   'bg-red-500/10 text-red-500',
        border: 'hover:border-red-500',
        hover:  'hover:bg-red-500/5',
        tag:    'bg-red-500/10 text-red-500',
        bullet: 'bg-red-500',
        btn:    'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30',
        arrow:  'group-hover:text-red-500',
      },
      amber: {
        icon:   'bg-amber-500/10 text-amber-500',
        border: 'hover:border-amber-500',
        hover:  'hover:bg-amber-500/5',
        tag:    'bg-amber-500/10 text-amber-500',
        bullet: 'bg-amber-500',
        btn:    'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30',
        arrow:  'group-hover:text-amber-500',
      },
    };

    return (
      <div className="max-w-3xl mx-auto py-10 px-4 animate-fade-in">
        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary mb-10 transition-colors font-semibold">
          <ArrowLeft className="w-5 h-5" /> Zurück
        </button>

        {/* Header */}
        <div className="mb-3">
          <h2 className="text-3xl md:text-4xl font-black">{module.title}</h2>
          <p className="text-text-muted mt-2">
            {totalQ} Fragen {answered > 0 && `· ${answered} bereits beantwortet`}
          </p>
        </div>

        {/* Section title */}
        <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6 mt-8">
          Lernmodus wählen
        </p>

        {/* Mode cards */}
        <div className="space-y-5">
          {MODES.map(({ key, label, icon: Icon, color, tagline, desc, bullets }) => {
            const disabled = key === 'review' && wrongCount === 0;
            const c = colorMap[color];

            return (
              <div
                key={key}
                onClick={() => !disabled && startMode(key)}
                className={cn(
                  'glass-card rounded-2xl border-2 transition-all duration-200 overflow-hidden',
                  disabled
                    ? 'border-black/5 dark:border-white/5 opacity-40 cursor-not-allowed'
                    : cn('border-black/10 dark:border-white/10 cursor-pointer group', c.border, c.hover, 'hover:shadow-lg')
                )}
              >
                {/* Card top row */}
                <div className="flex items-start gap-5 p-6 pb-4">
                  <div className={cn('p-3 rounded-xl shrink-0 transition-colors', c.icon)}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-black text-xl text-text">{label}</span>
                      <span className={cn('text-xs font-bold px-2.5 py-0.5 rounded-full', c.tag)}>
                        {tagline}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>

                  {!disabled && (
                    <ArrowRight className={cn('w-5 h-5 text-text-muted transition-colors shrink-0 mt-1', c.arrow)} />
                  )}
                </div>

                {/* Bullet features */}
                <div className="px-6 pb-5">
                  <ul className="space-y-2">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <span className={cn('mt-1.5 w-1.5 h-1.5 rounded-full shrink-0', c.bullet)} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Review-mode wrong-question badge */}
                  {key === 'review' && (
                    <div className={cn(
                      'mt-4 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg',
                      wrongCount > 0 ? 'bg-red-500/10 text-red-500' : 'bg-black/5 dark:bg-white/5 text-text-muted'
                    )}>
                      <RotateCcw className="w-3.5 h-3.5" />
                      {wrongCount > 0
                        ? `${wrongCount} falsche Fragen in deiner Liste`
                        : 'Noch keine falschen Fragen – spiele erst eine Runde!'}
                    </div>
                  )}

                  {/* Start button inside card */}
                  {!disabled && (
                    <button
                      onClick={(e) => { e.stopPropagation(); startMode(key); }}
                      className={cn(
                        'mt-5 w-full py-3 rounded-xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2',
                        c.btn
                      )}
                    >
                      {label} starten
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info footer */}
        <div className="mt-8 p-4 rounded-2xl bg-black/5 dark:bg-white/5 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="font-bold text-text">Wie funktioniert das Lernsystem?</span>{' '}
            Dein Fortschritt wird nach jeder Antwort automatisch gespeichert. Falsch beantwortete
            Fragen landen in deiner persönlichen Fehlerliste und werden im Modus
            &ldquo;Wiederholen&rdquo; und &ldquo;Gemischt&rdquo; bevorzugt wiederholt – so
            schließt du Wissenslücken gezielt.
          </p>
        </div>
      </div>
    );
  }

  // ── Results screen ────────────────────────────────────────────────────────
  if (quizFinished) {
    const answered  = score + incorrectCount;
    const accuracy  = answered > 0 ? Math.round((score / answered) * 100) : 0;

    return (
      <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
        <div className="glass-card p-8 md:p-12 rounded-[2rem] text-center border-t-4 border-t-primary">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="text-primary w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Ergebnis</h2>
          <p className="text-text-muted mb-10 text-xl">
            Du hast das Modul <span className="font-semibold text-text">{module.title}</span> beendet.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-text-muted font-semibold mb-2">Zeit</span>
              <div className="flex items-center gap-2 text-2xl font-black text-blue-500">
                <Clock className="w-6 h-6" /><span>{formatTime(elapsedSeconds)}</span>
              </div>
            </div>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-text-muted font-semibold mb-2">Genauigkeit</span>
              <div className="text-2xl font-black text-primary">{accuracy}%</div>
            </div>
            <div className="bg-green-500/10 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-green-600 dark:text-green-400 font-semibold mb-2">Richtig</span>
              <div className="flex items-center gap-2 text-2xl font-black text-green-500">
                <Check className="w-6 h-6" /><span>{score}</span>
              </div>
            </div>
            <div className="bg-red-500/10 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-red-600 dark:text-red-400 font-semibold mb-2">Falsch</span>
              <div className="flex items-center gap-2 text-2xl font-black text-red-500">
                <X className="w-6 h-6" /><span>{incorrectCount}</span>
              </div>
            </div>
          </div>

          <div className="w-full bg-black/5 dark:bg-white/5 h-4 rounded-full overflow-hidden mb-12 flex">
            {answered > 0 && (
              <>
                <div className="bg-green-500 h-full transition-all" style={{ width: `${(score / answered) * 100}%` }} />
                <div className="bg-red-500 h-full transition-all" style={{ width: `${(incorrectCount / answered) * 100}%` }} />
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleRetry} className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-primary/20">
              <RefreshCcw className="w-6 h-6" /><span>Nochmal versuchen</span>
            </button>
            <button onClick={onBack} className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text px-8 py-4 rounded-2xl font-bold transition-all text-lg">
              Zum Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz screen ───────────────────────────────────────────────────────────
  if (shuffledQuestions.length === 0) return null;
  const currentQuestion = shuffledQuestions[currentIndex];
  const totalQuestions  = shuffledQuestions.length;

  return (
    <div className="max-w-6xl mx-auto py-4 px-2 md:px-6 animate-fade-in">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors p-2 -ml-2 rounded-lg font-semibold text-lg">
          <ArrowLeft className="w-5 h-5" /> Zurück
        </button>
        <button onClick={() => setQuizFinished(true)} className="flex items-center gap-2 text-red-500 hover:text-red-600 bg-red-500/10 hover:bg-red-500/20 transition-colors px-4 py-2 rounded-xl font-bold">
          <StopCircle className="w-5 h-5" /><span>Abbrechen</span>
        </button>
      </div>

      {/* Progress header */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">{module.title}</span>
            <h2 className="text-2xl md:text-3xl font-black mt-2">
              Frage {currentIndex + 1} <span className="text-text-muted font-medium">von {totalQuestions}</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-bold text-sm">
                <Clock className="w-4 h-4" /><span>{formatTime(elapsedSeconds)}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-bold text-sm">
                <Check className="w-4 h-4" /><span>{score}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-red-500/10 text-red-500 px-3 py-1 rounded-full font-bold text-sm">
                <X className="w-4 h-4" /><span>{incorrectCount}</span>
              </div>
            </div>
            <span className="text-primary font-bold text-lg">
              {Math.round((currentIndex / totalQuestions) * 100)}%
            </span>
          </div>
        </div>
        <div className="w-full bg-black/5 dark:bg-white/5 h-3 rounded-full overflow-hidden">
          <div className="bg-primary h-full rounded-full progress-bar" style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="glass-card p-6 md:p-10 rounded-[2rem] mb-10 border-t-4 border-t-primary/50">

        {/* Title pill */}
        {currentQuestion.title && (
          <div className="mb-5">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {currentQuestion.title}
            </span>
          </div>
        )}

        {/* Context / scenario box */}
        {currentQuestion.context && (
          <div className="mb-6 p-4 bg-black/5 dark:bg-white/5 border-l-4 border-primary/40 rounded-r-xl">
            <span className="block text-xs font-bold uppercase tracking-wider text-primary/70 mb-1">Szenario</span>
            <p className="text-base md:text-lg leading-relaxed text-text whitespace-pre-wrap">
              {currentQuestion.context}
            </p>
          </div>
        )}

        {/* Question text */}
        {currentQuestion.question && (
          <div className={cn(
            'font-bold leading-relaxed mb-10 text-text whitespace-pre-wrap',
            currentQuestion.title || currentQuestion.context ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
          )}>
            {currentQuestion.question}
          </div>
        )}

        {/* Fallback: if only title and no question/context */}
        {!currentQuestion.question && !currentQuestion.context && currentQuestion.title && (
          <div className="font-bold text-2xl md:text-3xl leading-relaxed mb-10 text-text">
            {currentQuestion.title}
          </div>
        )}

        {/* Flashcard type */}
        {currentQuestion.type === 'flashcard' ? (
          <div className="space-y-6">
            {!showFlashcardAnswer ? (
              <button onClick={() => setFCAnswer(true)} className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30 p-8 rounded-2xl font-bold text-xl transition-all">
                Antwort anzeigen
              </button>
            ) : (
              <div className="animate-fade-in space-y-8">
                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
                  <h4 className="font-bold text-lg uppercase tracking-wider mb-4 text-text-muted">Antwort</h4>
                  <p className="text-xl md:text-2xl leading-relaxed text-text whitespace-pre-wrap">{currentQuestion.answer}</p>
                </div>
                <div className="flex flex-col space-y-4">
                  <h4 className="text-center font-semibold text-lg text-text-muted">Wie gut wusstest du die Antwort?</h4>
                  <div className="flex sm:flex-row flex-col gap-4">
                    <button onClick={() => handleFlashcardEval(false)} className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border-2 border-red-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                      <X className="w-6 h-6" /> Falsch / Nicht gewusst
                    </button>
                    <button onClick={() => handleFlashcardEval(true)} className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                      <Check className="w-6 h-6" /> Richtig gewusst
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Multiple choice options */}
            <div className="space-y-4 md:space-y-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOptions.includes(index);
                const isCorrect  = option.isCorrect;
                let stateClasses = 'border-black/5 dark:border-white/5 hover:border-primary/30 bg-black/5 dark:bg-white/5';
                if (showResult) {
                  if (isCorrect)       stateClasses = 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400';
                  else if (isSelected) stateClasses = 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400 opacity-70';
                  else                 stateClasses = 'border-transparent opacity-50';
                } else if (isSelected) {
                  stateClasses = 'border-primary bg-primary/10 text-primary shadow-sm';
                }
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionToggle(index)}
                    disabled={showResult}
                    className={cn('w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer', stateClasses, !showResult && 'hover:shadow-md')}
                  >
                    <span className="text-lg md:text-xl font-medium leading-relaxed">{option.text}</span>
                    {showResult && isCorrect  && <Check className="w-7 h-7 text-green-500 shrink-0 ml-4" />}
                    {showResult && isSelected && !isCorrect && <X className="w-7 h-7 text-red-500 shrink-0 ml-4" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showResult && currentQuestion.explanation && currentQuestion.explanation.trim() !== '' && (
              <div className="mt-10 p-8 bg-primary/5 rounded-2xl border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-full shrink-0 mt-1">
                    <HelpCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider mb-3 text-primary">Erklärung</h4>
                    <p className="text-text leading-relaxed text-lg italic opacity-90">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Action button */}
      <div className="flex justify-end mb-12">
        {currentQuestion.type !== 'flashcard' && (
          !showResult ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedOptions.length === 0}
              className="bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/30 w-full md:w-auto"
            >
              Antwort prüfen
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-text text-background hover:opacity-90 px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <span>{currentIndex < totalQuestions - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;
