import { useState, useEffect, useRef, useCallback } from 'react';
import { saveProgress, calcAccuracy } from '../utils/progressService';
import { ArrowLeft, Check, X, HelpCircle, Trophy, RefreshCcw, ArrowRight, Clock, StopCircle, Shuffle, RotateCcw, Layers, GripVertical, ChevronUp, ChevronDown, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { computeCorrect, matchAccept, shuffleArray, INTERACTIVE_TYPES, SELF_GRADED_TYPES } from '../utils/answerCheck';

function cn(...inputs) { return twMerge(clsx(inputs)); }

// ── i18n ───────────────────────────────────────────────────────────────────────
// The whole quiz player renders in the module's language (module.lang). Modules
// without a lang default to German; the Hypermedia Frameworks module is 'en'.
const UI = {
  de: {
    back: 'Zurück',
    cancel: 'Abbrechen',
    questions: 'Fragen',
    alreadyAnswered: 'bereits beantwortet',
    chooseMode: 'Lernmodus wählen',
    startBtn: (l) => `${l} starten`,
    reviewBadge: (n) => n > 0 ? `${n} falsche Fragen in deiner Liste` : 'Noch keine falschen Fragen – spiele erst eine Runde!',
    howItWorksTitle: 'Wie funktioniert das Lernsystem?',
    howItWorksBody: 'Dein Fortschritt wird nach jeder Antwort automatisch gespeichert. Falsch beantwortete Fragen landen in deiner persönlichen Fehlerliste und werden im Modus „Wiederholen" und „Gemischt" bevorzugt wiederholt – so schließt du Wissenslücken gezielt.',
    resultTitle: 'Ergebnis',
    finishedPre: 'Du hast das Modul ',
    finishedPost: ' beendet.',
    time: 'Zeit',
    accuracy: 'Genauigkeit',
    correct: 'Richtig',
    wrong: 'Falsch',
    retry: 'Nochmal versuchen',
    toDashboard: 'Zum Dashboard',
    question: 'Frage',
    of: 'von',
    scenario: 'Szenario',
    showAnswer: 'Antwort anzeigen',
    answer: 'Antwort',
    howWell: 'Wie gut wusstest du die Antwort?',
    wrongKnew: 'Falsch / Nicht gewusst',
    rightKnew: 'Richtig gewusst',
    explanation: 'Erklärung',
    check: 'Antwort prüfen',
    next: 'Nächste Frage',
    showResult: 'Ergebnis anzeigen',
    orderInstruction: 'Ziehe die Einträge in die richtige Reihenfolge – oder nutze die Pfeile.',
    correctOrder: 'Richtige Reihenfolge',
    categorizeInstruction: 'Tippe einen Eintrag an und dann eine Kategorie – oder ziehe ihn per Drag & Drop in die passende Box.',
    correctPrefix: 'richtig:',
    solution: 'Lösung',
    blank: 'Lücke',
    codeInstruction: 'Klicke die Zeile(n) mit dem Fehler an.',
    correction: 'Korrektur',
    yourAnswer: 'Deine Antwort …',
    sampleAnswer: 'Musterlösung',
    modes: {
      normal: { label: 'Zufällig', tagline: 'Optimales Lernen – empfohlen für den Alltag', desc: 'Alle Fragen werden intelligent gemischt. Fragen, die du in der Vergangenheit falsch beantwortet hast, erscheinen öfter – richtig beantwortete Fragen seltener.', bullets: ['Falsch beantwortete Fragen bekommen mehr Gewicht', 'Bereits gut gelernte Fragen tauchen seltener auf', 'Alle Fragen aus dem Modul werden berücksichtigt'] },
      review: { label: 'Wiederholen', tagline: 'Gezielte Wiederholung deiner Schwächen', desc: 'Du siehst ausschließlich Fragen, die du in früheren Runden falsch beantwortet hast. Perfekt, um gezielt Lücken zu schließen.', bullets: ['Nur Fragen aus deiner Fehlerliste', 'Fragen werden zufällig gemischt', 'Richtig beantwortete Fragen werden nach 2× aus der Liste entfernt'] },
      mixed: { label: 'Gemischt', tagline: 'Das Beste aus beiden Welten', desc: 'Du lernst hauptsächlich neue Fragen, aber ca. 30 % der Fragen kommen aus deiner Fehlerliste. So bleibt das Wiederholen im Fluss.', bullets: ['~70 % neue oder zufällige Fragen', '~30 % aus deinen falsch beantworteten Fragen', 'Reihenfolge wird nochmals zufällig gemischt'] },
    },
  },
  en: {
    back: 'Back',
    cancel: 'Cancel',
    questions: 'questions',
    alreadyAnswered: 'already answered',
    chooseMode: 'Choose learning mode',
    startBtn: (l) => `Start ${l}`,
    reviewBadge: (n) => n > 0 ? `${n} wrong questions in your list` : 'No wrong questions yet – play a round first!',
    howItWorksTitle: 'How does the learning system work?',
    howItWorksBody: 'Your progress is saved automatically after every answer. Incorrectly answered questions go into your personal error list and are shown more often in "Review" and "Mixed" mode – so you close knowledge gaps in a targeted way.',
    resultTitle: 'Result',
    finishedPre: 'You finished the module ',
    finishedPost: '.',
    time: 'Time',
    accuracy: 'Accuracy',
    correct: 'Correct',
    wrong: 'Wrong',
    retry: 'Try again',
    toDashboard: 'Back to dashboard',
    question: 'Question',
    of: 'of',
    scenario: 'Scenario',
    showAnswer: 'Show answer',
    answer: 'Answer',
    howWell: 'How well did you know the answer?',
    wrongKnew: "Wrong / Didn't know",
    rightKnew: 'Knew it',
    explanation: 'Explanation',
    check: 'Check answer',
    next: 'Next question',
    showResult: 'Show result',
    orderInstruction: 'Drag the entries into the correct order – or use the arrows.',
    correctOrder: 'Correct order',
    categorizeInstruction: 'Tap an entry and then a category – or drag it into the matching box.',
    correctPrefix: 'correct:',
    solution: 'Solution',
    blank: 'Blank',
    codeInstruction: 'Click the line(s) containing the error.',
    correction: 'Correction',
    yourAnswer: 'Your answer …',
    sampleAnswer: 'Sample answer',
    modes: {
      normal: { label: 'Shuffle', tagline: 'Optimal learning – recommended for everyday use', desc: 'All questions are mixed intelligently. Questions you answered incorrectly in the past appear more often – correctly answered ones less often.', bullets: ['Incorrectly answered questions get more weight', 'Already well-learned questions appear less often', 'All questions from the module are included'] },
      review: { label: 'Review', tagline: 'Targeted review of your weak spots', desc: 'You only see questions you answered incorrectly in earlier rounds. Perfect for closing gaps in a targeted way.', bullets: ['Only questions from your error list', 'Questions are shuffled randomly', 'Correctly answered questions are removed from the list after 2×'] },
      mixed: { label: 'Mixed', tagline: 'The best of both worlds', desc: 'You mainly learn new questions, but about 30% come from your error list. That keeps reviewing in the flow.', bullets: ['~70% new or random questions', '~30% from your incorrectly answered questions', 'Order is shuffled again randomly'] },
    },
  },
};
const resolveLang = (l) => (l === 'en' ? 'en' : 'de');

// ── Interactive answer components ──────────────────────────────────────────────
// Each manages its own answer state and reports { answer, canSubmit } upward via
// onChange. They are remounted (via key) whenever the question changes.

function OrderQuestion({ q, showResult, onChange, lang = 'de' }) {
  const t = UI[lang];
  const [order, setOrder] = useState(() => {
    let s = shuffleArray(q.items.map((t, i) => ({ id: i, text: t })));
    if (q.items.length > 1 && s.every((o, i) => o.text === q.items[i])) s = [...s.slice(1), s[0]];
    return s;
  });
  const [dragIndex, setDragIndex] = useState(null);

  useEffect(() => { onChange({ answer: order.map(o => o.text), canSubmit: true }); }, [order, onChange]);

  const move = (from, to) => {
    if (showResult || to < 0 || to >= order.length) return;
    setOrder(prev => {
      const a = [...prev];
      const [it] = a.splice(from, 1);
      a.splice(to, 0, it);
      return a;
    });
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-muted mb-2 flex items-center gap-2">
        <GripVertical className="w-4 h-4" /> {t.orderInstruction}
      </p>
      {order.map((it, i) => {
        const correct = showResult && it.text === q.items[i];
        const wrong = showResult && it.text !== q.items[i];
        return (
          <div
            key={it.id}
            draggable={!showResult}
            onDragStart={() => setDragIndex(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); if (dragIndex !== null) move(dragIndex, i); setDragIndex(null); }}
            className={cn(
              'flex items-center gap-3 p-4 rounded-xl border-2 bg-black/5 dark:bg-white/5 transition-all',
              !showResult && 'border-black/5 dark:border-white/5 cursor-grab active:cursor-grabbing hover:border-primary/40',
              correct && 'border-green-500 bg-green-500/10',
              wrong && 'border-red-500 bg-red-500/10',
            )}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">{i + 1}</span>
            {!showResult && <GripVertical className="w-5 h-5 text-text-muted shrink-0" />}
            <span className="flex-1 font-medium text-text font-mono text-sm md:text-base break-words min-w-0">{it.text}</span>
            {showResult
              ? (correct ? <Check className="w-5 h-5 text-green-500 shrink-0" /> : <X className="w-5 h-5 text-red-500 shrink-0" />)
              : (
                <span className="flex flex-col shrink-0">
                  <button onClick={() => move(i, i - 1)} disabled={i === 0} className="p-0.5 text-text-muted hover:text-primary disabled:opacity-30"><ChevronUp className="w-5 h-5" /></button>
                  <button onClick={() => move(i, i + 1)} disabled={i === order.length - 1} className="p-0.5 text-text-muted hover:text-primary disabled:opacity-30"><ChevronDown className="w-5 h-5" /></button>
                </span>
              )}
          </div>
        );
      })}
      {showResult && (
        <div className="mt-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
          <p className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2">{t.correctOrder}</p>
          <ol className="list-decimal list-inside space-y-1 font-mono text-sm text-text">
            {q.items.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </div>
      )}
    </div>
  );
}

function CategorizeQuestion({ q, showResult, onChange, lang = 'de' }) {
  const t = UI[lang];
  const [assign, setAssign] = useState({});
  const [selected, setSelected] = useState(null);
  const [dragItem, setDragItem] = useState(null);

  useEffect(() => {
    const allAssigned = q.items.every((_, i) => assign[i] != null);
    onChange({ answer: assign, canSubmit: allAssigned });
  }, [assign, onChange, q.items]);

  const assignTo = (itemIdx, cat) => { if (showResult) return; setAssign(prev => ({ ...prev, [itemIdx]: cat })); setSelected(null); };
  const unassign = (itemIdx) => { if (showResult) return; setAssign(prev => { const n = { ...prev }; delete n[itemIdx]; return n; }); setSelected(null); };

  const pool = q.items.map((it, i) => ({ it, i })).filter(({ i }) => assign[i] == null);

  const Chip = ({ entry, inBox }) => {
    const { it, i } = entry;
    const correct = showResult && assign[i] === it.category;
    const wrong = showResult && assign[i] != null && assign[i] !== it.category;
    return (
      <button
        draggable={!showResult}
        onDragStart={() => setDragItem(i)}
        onClick={(e) => { e.stopPropagation(); if (showResult) return; if (inBox) unassign(i); else setSelected(selected === i ? null : i); }}
        className={cn(
          'px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all text-left',
          selected === i && !showResult && 'ring-2 ring-primary ring-offset-1 ring-offset-bg',
          correct && 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400',
          wrong && 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400',
          !showResult && 'cursor-pointer border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-primary/40',
          showResult && assign[i] == null && 'border-black/10 dark:border-white/10',
        )}
      >
        {it.text}
        {showResult && wrong && <span className="block text-[10px] mt-0.5 opacity-80">{t.correctPrefix} {it.category}</span>}
      </button>
    );
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-text-muted">
        {t.categorizeInstruction}
      </p>
      {pool.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-black/5 dark:bg-white/5 border-2 border-dashed border-black/10 dark:border-white/10 min-h-[3.5rem]">
          {pool.map(entry => <Chip key={entry.i} entry={entry} inBox={false} />)}
        </div>
      )}
      <div className={cn('grid gap-4', q.categories.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2')}>
        {q.categories.map(cat => {
          const inBox = q.items.map((it, i) => ({ it, i })).filter(({ i }) => assign[i] === cat);
          return (
            <div
              key={cat}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); if (dragItem != null) assignTo(dragItem, cat); setDragItem(null); }}
              onClick={() => { if (selected != null) assignTo(selected, cat); }}
              className={cn(
                'p-4 rounded-2xl border-2 min-h-[7rem] transition-all',
                selected != null && !showResult
                  ? 'border-primary/60 bg-primary/5 cursor-pointer'
                  : 'border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]',
              )}
            >
              <p className="font-bold text-sm uppercase tracking-wider text-primary/80 mb-3">{cat}</p>
              <div className="flex flex-wrap gap-2">{inBox.map(entry => <Chip key={entry.i} entry={entry} inBox />)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FillBlankQuestion({ q, showResult, onChange, lang = 'de' }) {
  const t = UI[lang];
  const [vals, setVals] = useState(() => new Array(q.blanks.length).fill(''));

  useEffect(() => {
    onChange({ answer: vals, canSubmit: vals.every(v => v.trim() !== '') });
  }, [vals, onChange]);

  const parts = [];
  const re = /\{\{(\d+)\}\}/g;
  let last = 0, m;
  while ((m = re.exec(q.template)) !== null) {
    if (m.index > last) parts.push({ t: q.template.slice(last, m.index) });
    parts.push({ b: parseInt(m[1], 10) });
    last = m.index + m[0].length;
  }
  if (last < q.template.length) parts.push({ t: q.template.slice(last) });

  const setVal = (i, v) => setVals(prev => { const a = [...prev]; a[i] = v; return a; });

  return (
    <div className="space-y-4">
      <div className="p-5 rounded-2xl bg-[#0d1117] text-gray-100 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap overflow-x-auto">
        {parts.map((p, idx) => {
          if (p.t != null) return <span key={idx}>{p.t}</span>;
          const i = p.b;
          const ok = showResult && matchAccept(vals[i], q.blanks[i]?.accept);
          const bad = showResult && !ok;
          return (
            <input
              key={idx}
              type="text"
              value={vals[i] ?? ''}
              disabled={showResult}
              onChange={(e) => setVal(i, e.target.value)}
              size={Math.max(6, (vals[i]?.length || 6))}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              className={cn(
                'inline-block mx-1 px-2 py-0.5 rounded border-2 bg-black/40 text-center font-mono outline-none',
                !showResult && 'border-primary/50 focus:border-primary text-white',
                ok && 'border-green-500 text-green-300',
                bad && 'border-red-500 text-red-300',
              )}
            />
          );
        })}
      </div>
      {showResult && (
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-sm">
          <p className="font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2 text-xs">{t.solution}</p>
          <ul className="space-y-1">
            {q.blanks.map((b, i) => (
              <li key={i} className="font-mono text-text">{t.blank} {i + 1}: <span className="text-green-600 dark:text-green-400">{b.accept?.[0]}</span></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CodeFindBugQuestion({ q, showResult, onChange, lang = 'de' }) {
  const t = UI[lang];
  const [sel, setSel] = useState([]);
  useEffect(() => { onChange({ answer: sel, canSubmit: sel.length > 0 }); }, [sel, onChange]);
  const toggle = (i) => { if (showResult) return; setSel(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]); };
  const buggy = new Set(q.buggyLines || []);
  return (
    <div className="space-y-4">
      <p className="text-sm text-text-muted flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-500" /> {t.codeInstruction}{q.language ? ` (${q.language})` : ''}
      </p>
      <div className="rounded-2xl bg-[#0d1117] overflow-hidden font-mono text-sm md:text-base">
        {q.codeLines.map((line, i) => {
          const isSel = sel.includes(i);
          const isBuggy = showResult && buggy.has(i);
          const isWrongPick = showResult && isSel && !buggy.has(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={cn(
                'flex items-stretch transition-colors',
                !showResult && (isSel ? 'bg-primary/25 cursor-pointer' : 'cursor-pointer hover:bg-white/5'),
                isBuggy && 'bg-green-500/25',
                isWrongPick && 'bg-red-500/25',
                showResult && 'cursor-default',
              )}
            >
              <span className="select-none w-10 shrink-0 text-right pr-3 py-1 text-gray-500 bg-black/30">{i + 1}</span>
              <code className="flex-1 px-3 py-1 whitespace-pre text-gray-100 overflow-x-auto">{line === '' ? ' ' : line}</code>
              {isBuggy && <Check className="w-4 h-4 text-green-400 self-center mr-2 shrink-0" />}
              {isWrongPick && <X className="w-4 h-4 text-red-400 self-center mr-2 shrink-0" />}
            </div>
          );
        })}
      </div>
      {showResult && (
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-sm">
          <p className="font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-1 text-xs">{t.correction}</p>
          <p className="text-text whitespace-pre-wrap">{q.fix}</p>
        </div>
      )}
    </div>
  );
}

function OpenQuestion({ q, showResult, onChange, lang = 'de' }) {
  const t = UI[lang];
  const [val, setVal] = useState('');
  useEffect(() => { onChange({ answer: val, canSubmit: val.trim() !== '' }); }, [val, onChange]);
  const ok = showResult && matchAccept(val, q.accept);
  return (
    <div className="space-y-4">
      <input
        type="text"
        value={val}
        disabled={showResult}
        onChange={(e) => setVal(e.target.value)}
        placeholder={t.yourAnswer}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        className={cn(
          'w-full p-4 rounded-2xl border-2 bg-black/5 dark:bg-white/5 text-lg text-text outline-none transition-all',
          !showResult && 'border-black/10 dark:border-white/10 focus:border-primary',
          showResult && ok && 'border-green-500 bg-green-500/10',
          showResult && !ok && 'border-red-500 bg-red-500/10',
        )}
      />
      {showResult && (
        <div className={cn('p-4 rounded-xl border text-sm', ok ? 'bg-green-500/5 border-green-500/20' : 'bg-amber-500/5 border-amber-500/20')}>
          <p className={cn('font-bold uppercase tracking-wider mb-1 text-xs', ok ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400')}>
            {ok ? t.correct : t.sampleAnswer}
          </p>
          <p className="text-text">{q.sampleAnswer}</p>
        </div>
      )}
    </div>
  );
}

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
  { key: 'normal', icon: Shuffle,  color: 'primary' },
  { key: 'review', icon: RotateCcw, color: 'red' },
  { key: 'mixed',  icon: Layers,   color: 'amber' },
];

const QuizPlayer = ({ module, onBack, user, onProgressUpdate }) => {
  const lang = resolveLang(module.lang);
  const t = UI[lang];
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

  // Generic answer state for the interactive question types (order, categorize,
  // fill-blank, code-find-bug, open). Reported upward by each sub-component.
  const [currentAnswer, setCurrentAnswer]   = useState(null);
  const [canSubmit, setCanSubmit]           = useState(false);
  const handleAnswerChange = useCallback(({ answer, canSubmit: cs }) => {
    setCurrentAnswer(answer);
    setCanSubmit(cs);
  }, []);

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
    const q = shuffledQuestions[currentIndex];
    setShowResult(true);
    const isCorrect = computeCorrect(q, { selectedOptions, currentAnswer });
    if (isCorrect) setScore(s => s + 1); else setIncorrect(s => s + 1);
    updateStats(q.originalIndex, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOpts([]);
      setShowResult(false);
      setFCAnswer(false);
      setCurrentAnswer(null);
      setCanSubmit(false);
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
    setCurrentAnswer(null); setCanSubmit(false);
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
          <ArrowLeft className="w-5 h-5" /> {t.back}
        </button>

        {/* Header */}
        <div className="mb-3">
          <h2 className="text-3xl md:text-4xl font-black">{module.title}</h2>
          <p className="text-text-muted mt-2">
            {totalQ} {t.questions} {answered > 0 && `· ${answered} ${t.alreadyAnswered}`}
          </p>
        </div>

        {/* Section title */}
        <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6 mt-8">
          {t.chooseMode}
        </p>

        {/* Mode cards */}
        <div className="space-y-5">
          {MODES.map(({ key, icon: Icon, color }) => {
            const { label, tagline, desc, bullets } = t.modes[key];
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
                      {t.reviewBadge(wrongCount)}
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
                      {t.startBtn(label)}
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
            <span className="font-bold text-text">{t.howItWorksTitle}</span>{' '}
            {t.howItWorksBody}
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
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{t.resultTitle}</h2>
          <p className="text-text-muted mb-10 text-xl">
            {t.finishedPre}<span className="font-semibold text-text">{module.title}</span>{t.finishedPost}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-text-muted font-semibold mb-2">{t.time}</span>
              <div className="flex items-center gap-2 text-2xl font-black text-blue-500">
                <Clock className="w-6 h-6" /><span>{formatTime(elapsedSeconds)}</span>
              </div>
            </div>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-text-muted font-semibold mb-2">{t.accuracy}</span>
              <div className="text-2xl font-black text-primary">{accuracy}%</div>
            </div>
            <div className="bg-green-500/10 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-green-600 dark:text-green-400 font-semibold mb-2">{t.correct}</span>
              <div className="flex items-center gap-2 text-2xl font-black text-green-500">
                <Check className="w-6 h-6" /><span>{score}</span>
              </div>
            </div>
            <div className="bg-red-500/10 p-6 rounded-2xl flex flex-col items-center">
              <span className="text-red-600 dark:text-red-400 font-semibold mb-2">{t.wrong}</span>
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
              <RefreshCcw className="w-6 h-6" /><span>{t.retry}</span>
            </button>
            <button onClick={onBack} className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text px-8 py-4 rounded-2xl font-bold transition-all text-lg">
              {t.toDashboard}
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
          <ArrowLeft className="w-5 h-5" /> {t.back}
        </button>
        <button onClick={() => setQuizFinished(true)} className="flex items-center gap-2 text-red-500 hover:text-red-600 bg-red-500/10 hover:bg-red-500/20 transition-colors px-4 py-2 rounded-xl font-bold">
          <StopCircle className="w-5 h-5" /><span>{t.cancel}</span>
        </button>
      </div>

      {/* Progress header */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">{module.title}</span>
            <h2 className="text-2xl md:text-3xl font-black mt-2">
              {t.question} {currentIndex + 1} <span className="text-text-muted font-medium">{t.of} {totalQuestions}</span>
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
            <span className="block text-xs font-bold uppercase tracking-wider text-primary/70 mb-1">{t.scenario}</span>
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

        {/* Self-graded types (flashcard / self-assess) */}
        {SELF_GRADED_TYPES.includes(currentQuestion.type) ? (
          <div className="space-y-6">
            {!showFlashcardAnswer ? (
              <button onClick={() => setFCAnswer(true)} className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30 p-8 rounded-2xl font-bold text-xl transition-all">
                {t.showAnswer}
              </button>
            ) : (
              <div className="animate-fade-in space-y-8">
                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
                  <h4 className="font-bold text-lg uppercase tracking-wider mb-4 text-text-muted">{t.answer}</h4>
                  <p className="text-xl md:text-2xl leading-relaxed text-text whitespace-pre-wrap">{currentQuestion.answer}</p>
                </div>
                <div className="flex flex-col space-y-4">
                  <h4 className="text-center font-semibold text-lg text-text-muted">{t.howWell}</h4>
                  <div className="flex sm:flex-row flex-col gap-4">
                    <button onClick={() => handleFlashcardEval(false)} className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border-2 border-red-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                      <X className="w-6 h-6" /> {t.wrongKnew}
                    </button>
                    <button onClick={() => handleFlashcardEval(true)} className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                      <Check className="w-6 h-6" /> {t.rightKnew}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {currentQuestion.type === 'order' ? (
              <OrderQuestion key={`q-${currentIndex}`} q={currentQuestion} showResult={showResult} onChange={handleAnswerChange} lang={lang} />
            ) : currentQuestion.type === 'categorize' ? (
              <CategorizeQuestion key={`q-${currentIndex}`} q={currentQuestion} showResult={showResult} onChange={handleAnswerChange} lang={lang} />
            ) : currentQuestion.type === 'fill-blank' ? (
              <FillBlankQuestion key={`q-${currentIndex}`} q={currentQuestion} showResult={showResult} onChange={handleAnswerChange} lang={lang} />
            ) : currentQuestion.type === 'code-find-bug' ? (
              <CodeFindBugQuestion key={`q-${currentIndex}`} q={currentQuestion} showResult={showResult} onChange={handleAnswerChange} lang={lang} />
            ) : currentQuestion.type === 'open' ? (
              <OpenQuestion key={`q-${currentIndex}`} q={currentQuestion} showResult={showResult} onChange={handleAnswerChange} lang={lang} />
            ) : (
            /* Multiple choice options (default) */
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
            )}

            {/* Explanation (shared across all auto-graded types) */}
            {showResult && currentQuestion.explanation && currentQuestion.explanation.trim() !== '' && (
              <div className="mt-10 p-8 bg-primary/5 rounded-2xl border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-full shrink-0 mt-1">
                    <HelpCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider mb-3 text-primary">{t.explanation}</h4>
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
        {!SELF_GRADED_TYPES.includes(currentQuestion.type) && (
          !showResult ? (
            <button
              onClick={handleCheckAnswer}
              disabled={INTERACTIVE_TYPES.includes(currentQuestion.type) ? !canSubmit : selectedOptions.length === 0}
              className="bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/30 w-full md:w-auto"
            >
              {t.check}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-text text-background hover:opacity-90 px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <span>{currentIndex < totalQuestions - 1 ? t.next : t.showResult}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;
