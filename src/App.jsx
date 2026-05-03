import { useState } from 'react';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import QuizPlayer from './components/QuizPlayer';
import { QUIZ_MODULES } from './data/quizData';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const [activeModule, setActiveModule] = useState(null);

  const handleStartQuiz = (moduleId) => {
    setActiveModule({ id: moduleId, ...QUIZ_MODULES[moduleId] });
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
                  Bereite dich optimal auf die Prüfung vor. Interaktiv, fokussiert und effektiv.
                </p>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {Object.entries(QUIZ_MODULES).map(([id, module]) => (
                  <QuizCard
                    key={id}
                    title={module.title}
                    desc={module.desc}
                    onStart={() => handleStartQuiz(id)}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

