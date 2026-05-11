import { useState, useEffect, useCallback } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import QuizPlayer from './components/QuizPlayer';
import Auth from './components/Auth';
import { X, User, RotateCcw, CloudOff, Cloud } from 'lucide-react';
import { QUIZ_MODULES, FLASHCARD_MODULES } from './data/quizData';
import { ThemeProvider } from './components/ThemeProvider';
import {
  loadProgress,
  resetProgress,
} from './utils/progressService';

function App() {
  const [activeModule, setActiveModule] = useState(null);
  const [globalStats, setGlobalStats] = useState({});
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [guestPromptModule, setGuestPromptModule] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  // ── Local stats fallback (guests / offline) ──────────────────────────────
  const loadLocalStats = useCallback(() => {
    const stats = safeParseJSON(localStorage.getItem('sophie_global_stats')) || {};
    setGlobalStats(stats);
  }, []);

  // ── Load progress from Supabase ──────────────────────────────────────────
  const fetchAndApplyProgress = useCallback(async (userId) => {
    const data = await loadProgress(userId);
    if (data) {
      // module_stats is the source of truth
      const ms = data.module_stats || {};
      const legacyGs = data.global_stats || {};
      const merged = {};

      const allModuleIds = new Set([...Object.keys(ms), ...Object.keys(legacyGs)]);
      for (const id of allModuleIds) {
        // Prefer module_stats (the new format), fallback to legacy global_stats
        const mStats = ms[id] || {};
        const lStats = legacyGs[id] || {};
        merged[id] = {
          correct: mStats.correct ?? lStats.correct ?? 0,
          total: mStats.total ?? lStats.total ?? 0,
          wrong: mStats.wrong ?? lStats.wrong ?? 0,
        };
      }

      setGlobalStats(merged);
      localStorage.setItem('sophie_global_stats', JSON.stringify(merged));

      // Clear all existing local module stats to prevent old data from resurrecting
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('sophie_quiz_stats_')) {
          localStorage.removeItem(key);
        }
      }

      // Restore per-module stats from Supabase directly
      for (const [moduleId, mStats] of Object.entries(ms)) {
        const key = `sophie_quiz_stats_${moduleId}`;
        localStorage.setItem(key, JSON.stringify(mStats));
      }
    } else {
      // No Supabase record yet → fall back to localStorage
      loadLocalStats();
    }
  }, [loadLocalStats]);

  // ── Auth listener ────────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchAndApplyProgress(session.user.id);
      } else {
        loadLocalStats();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchAndApplyProgress(session.user.id);
        setShowAuth(false);
      } else {
        loadLocalStats();
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchAndApplyProgress, loadLocalStats]);



  // ── Called by QuizPlayer after each answer so dashboard stays live ───────
  const handleProgressUpdate = useCallback((moduleId, moduleStats) => {
    setGlobalStats(prev => {
      const next = {
        ...prev,
        [moduleId]: {
          correct: moduleStats.correct ?? 0,
          total: moduleStats.total ?? 0,
          wrong: moduleStats.wrong ?? 0,
        },
      };
      localStorage.setItem('sophie_global_stats', JSON.stringify(next));
      return next;
    });
  }, []);

  // ── Reset progress ────────────────────────────────────────────────────────
  const handleResetProgress = async () => {
    setResetLoading(true);
    if (user) await resetProgress(user.id);
    // Clear localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('sophie_quiz_stats_') || key === 'sophie_global_stats')) {
        localStorage.removeItem(key);
      }
    }
    setGlobalStats({});
    setShowResetConfirm(false);
    setResetLoading(false);
  };

  // ── Auth action ───────────────────────────────────────────────────────────
  const handleAuthClick = async (action) => {
    if (action === 'logout') {
      await supabase.auth.signOut();
    } else if (action === 'login') {
      setShowAuth(true);
      setActiveModule(null);
    }
  };

  // ── Start quiz ────────────────────────────────────────────────────────────
  const handleStartQuiz = (moduleId, isFlashcard = false) => {
    const moduleData = isFlashcard ? FLASHCARD_MODULES[moduleId] : QUIZ_MODULES[moduleId];
    if (!user) {
      setGuestPromptModule({ id: moduleId, ...moduleData });
    } else {
      setActiveModule({ id: moduleId, ...moduleData });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    setActiveModule(null);
    setShowAuth(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Overall stats for header bar ─────────────────────────────────────────
  const overallTotals = Object.values(globalStats).reduce(
    (acc, s) => ({ correct: acc.correct + (s.correct ?? 0), total: acc.total + (s.total ?? 0) }),
    { correct: 0, total: 0 }
  );
  const overallAccuracy = overallTotals.total > 0
    ? Math.round((overallTotals.correct / overallTotals.total) * 100)
    : null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text font-sans transition-colors duration-300">
        <Header
          onHome={handleGoHome}
          user={user}
          onAuthClick={handleAuthClick}
        />

        {/* Guest prompt modal ─────────────────────────────────────────── */}
        {guestPromptModule && (
          <div className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] shadow-xl max-w-md w-full relative animate-fade-in">
              <button
                onClick={() => setGuestPromptModule(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
              <div className="text-center mb-8 mt-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 mb-6 text-primary">
                  <User className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-text mb-3">Kurzer Tipp!</h2>
                <p className="text-text-muted leading-relaxed">
                  Wenn du dich einloggst, werden deine Spielstände gespeichert und das smarte
                  Lernsystem merkt sich, welche Fragen du noch üben musst.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => { setShowAuth(true); setGuestPromptModule(null); }}
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30"
                >
                  Jetzt Einloggen
                </button>
                <button
                  onClick={() => {
                    setActiveModule(guestPromptModule);
                    setGuestPromptModule(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text rounded-xl font-bold transition-all"
                >
                  Als Gast fortfahren
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reset confirmation modal ───────────────────────────────────── */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card p-8 md:p-10 rounded-[2rem] shadow-xl max-w-sm w-full relative animate-fade-in text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 mb-6 text-red-500">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-text mb-3">Fortschritt zurücksetzen?</h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Alle deine Statistiken – richtige Antworten, falsche Antworten und Genauigkeit –
                werden unwiderruflich auf 0 zurückgesetzt.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleResetProgress}
                  disabled={resetLoading}
                  className="w-full py-4 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white rounded-xl font-bold transition-all"
                >
                  {resetLoading ? 'Wird zurückgesetzt…' : 'Ja, zurücksetzen'}
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="w-full py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text rounded-xl font-bold transition-all"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="container mx-auto px-4 py-8 md:py-12">
          {showAuth ? (
            <Auth onBack={() => setShowAuth(false)} />
          ) : activeModule ? (
            <QuizPlayer
              module={activeModule}
              onBack={() => {
                handleGoHome();
                if (user) fetchAndApplyProgress(user.id);
              }}
              user={user}
              onProgressUpdate={handleProgressUpdate}
            />
          ) : (
            <div className="animate-fade-in w-full h-full flex flex-col justify-center">

              {/* Hero ───────────────────────────────────────────────── */}
              <div className="text-center mb-12 md:mb-20 mt-10 md:mt-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                  Wähle dein <span className="text-primary">Lernmodul</span>
                </h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Optimale Prüfungsvorbereitung. Interaktiv, fokussiert und effektiv.
                </p>
              </div>

              {/* Overall progress bar (only when there's data) ──────── */}
              {overallTotals.total > 0 && (
                <div className="mb-10 glass-card p-6 rounded-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      {user ? (
                        <Cloud className="w-4 h-4 text-primary" />
                      ) : (
                        <CloudOff className="w-4 h-4 text-text-muted" />
                      )}
                      <span className="font-bold text-text">
                        Gesamtfortschritt
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold flex-wrap">
                      {overallAccuracy !== null && (
                        <span className="text-primary">{overallAccuracy}% Genauigkeit</span>
                      )}
                      <span className="text-text-muted">{overallTotals.total} Antworten gesamt</span>
                      {user && (
                        <button
                          onClick={() => setShowResetConfirm(true)}
                          className="flex items-center gap-1.5 text-red-500 hover:text-red-600 transition-colors text-xs font-bold px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Fortschritt zurücksetzen
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Accuracy bar */}
                  {overallTotals.total > 0 && (
                    <div className="w-full h-3 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden flex">
                      <div
                        className="bg-green-500 h-full rounded-l-full transition-all duration-700"
                        style={{ width: `${(overallTotals.correct / overallTotals.total) * 100}%` }}
                      />
                      <div
                        className="bg-red-400 h-full transition-all duration-700"
                        style={{ width: `${((overallTotals.total - overallTotals.correct) / overallTotals.total) * 100}%` }}
                      />
                    </div>
                  )}

                  {/* Save notice */}
                  {user && (
                    <p className="text-xs text-text-muted mt-3 flex items-center gap-1">
                      <Cloud className="w-3 h-3" />
                      Dein Fortschritt wird automatisch gespeichert und ist auf allen Geräten verfügbar.
                    </p>
                  )}
                </div>
              )}

              {/* Modules Grid ───────────────────────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {Object.keys(FLASHCARD_MODULES).length === 0 && Object.keys(QUIZ_MODULES).length === 0 ? (
                  <div className="col-span-full text-center py-20 bg-secondary/30 rounded-3xl border-2 border-dashed border-primary/20">
                    <p className="text-text-muted text-lg">
                      Keine Module verfügbar. Neue Inhalte werden in Kürze hinzugefügt.
                    </p>
                  </div>
                ) : (
                  <>
                    {Object.entries(QUIZ_MODULES).map(([id, module]) => (
                      <QuizCard
                        key={id}
                        title={module.title}
                        questionCount={module.data?.length || 0}
                        stats={globalStats[id]}
                        onStart={() => handleStartQuiz(id, false)}
                      />
                    ))}
                    {Object.entries(FLASHCARD_MODULES).map(([id, module]) => (
                      <QuizCard
                        key={id}
                        title={module.title}
                        questionCount={module.data?.length || 0}
                        stats={globalStats[id]}
                        onStart={() => handleStartQuiz(id, true)}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function safeParseJSON(str) {
  try { return str ? JSON.parse(str) : null; } catch { return null; }
}

// Removed mergeModuleStats and mergeQuestionStats as Supabase is now the absolute source of truth

export default App;
