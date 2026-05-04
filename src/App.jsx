import { useState, useEffect } from 'react';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import QuizPlayer from './components/QuizPlayer';
import { QUIZ_MODULES, FLASHCARD_MODULES } from './data/quizData';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const [activeModule, setActiveModule] = useState(null);
  const [globalStats, setGlobalStats] = useState({});

  useEffect(() => {
    try {
      const stats = JSON.parse(localStorage.getItem('sophie_global_stats')) || {};
      setGlobalStats(stats);
    } catch (error) {
      console.error("Error loading global stats", error);
    }
  }, [activeModule]); // Re-fetch when module changes (e.g. going back to home)

  const handleStartQuiz = (moduleId, isFlashcard = false) => {
    const moduleData = isFlashcard ? FLASHCARD_MODULES[moduleId] : QUIZ_MODULES[moduleId];
    setActiveModule({ id: moduleId, ...moduleData });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary transition-colors duration-300">
        <Header onHome={handleGoHome} />

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-20">
          {activeModule ? (
            <QuizPlayer module={activeModule} onBack={handleGoHome} />
          ) : (
            <div className="animate-fade-in w-full h-full flex flex-col justify-center">

              <div className="text-center mb-16 md:mb-24 mt-10 md:mt-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                  Wähle dein <span className="text-primary">Lernmodul</span>
                </h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Optimale Prüfungsvorbereitung. Interaktiv, fokussiert und effektiv.
                </p>
              </div>

              {/* Modules Grid - New data will be added here */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {Object.keys(FLASHCARD_MODULES).length === 0 && Object.keys(QUIZ_MODULES).length === 0 ? (
                  <div className="col-span-full text-center py-20 bg-secondary/30 rounded-3xl border-2 border-dashed border-primary/20">
                    <p className="text-text-muted text-lg">Keine Module verfügbar. Neue Inhalte werden in Kürze hinzugefügt.</p>
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

export default App;

