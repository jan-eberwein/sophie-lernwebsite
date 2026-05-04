import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import QuizPlayer from './components/QuizPlayer';
import Auth from './components/Auth';
import { QUIZ_MODULES, FLASHCARD_MODULES } from './data/quizData';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const [activeModule, setActiveModule] = useState(null);
  const [globalStats, setGlobalStats] = useState({});
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchUserStats(session.user.id);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserStats(session.user.id);
        setShowAuth(false);
      } else {
        // Fallback to local storage if logged out
        loadLocalStats();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  function loadLocalStats() {
    try {
      const stats = JSON.parse(localStorage.getItem('sophie_global_stats')) || {};
      setGlobalStats(stats);
    } catch (error) {
      console.error("Error loading global stats", error);
    }
  }

  async function fetchUserStats(userId) {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('global_stats, module_stats')
        .eq('user_id', userId)
        .single();
        
      if (error && error.code !== 'PGRST116') throw error; // Ignore not found
      
      if (data) {
        if (data.global_stats) {
          setGlobalStats(data.global_stats);
          localStorage.setItem('sophie_global_stats', JSON.stringify(data.global_stats));
        }
        if (data.module_stats) {
          // Restore module specific stats for Spaced Repetition
          Object.keys(data.module_stats).forEach(moduleId => {
            localStorage.setItem(`sophie_quiz_stats_${moduleId}`, JSON.stringify(data.module_stats[moduleId]));
          });
        }
      } else {
        loadLocalStats(); // If no cloud data, try local
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
      loadLocalStats();
    }
  }

  useEffect(() => {
    if (!user) loadLocalStats();
  }, [activeModule, user]);

  const handleAuthClick = async (action) => {
    if (action === 'logout') {
      await supabase.auth.signOut();
    } else if (action === 'login') {
      setShowAuth(true);
      setActiveModule(null);
    }
  };

  const handleStartQuiz = (moduleId, isFlashcard = false) => {
    const moduleData = isFlashcard ? FLASHCARD_MODULES[moduleId] : QUIZ_MODULES[moduleId];
    setActiveModule({ id: moduleId, ...moduleData });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveModule(null);
    setShowAuth(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-bg text-text font-sans transition-colors duration-300">
      <Header 
        onHome={handleGoHome} 
        user={user}
        onAuthClick={handleAuthClick}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {showAuth ? (
          <Auth onBack={() => setShowAuth(false)} />
        ) : activeModule ? (
          <QuizPlayer
            module={activeModule.data}
            onBack={() => {
              handleGoHome();
              if (user) fetchUserStats(user.id);
            }}
            user={user}
          />) : (
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

