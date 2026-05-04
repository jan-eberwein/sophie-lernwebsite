import { useState, useEffect } from 'react';
import { ArrowLeft, Check, X, HelpCircle, Trophy, RefreshCcw, ArrowRight, Clock, StopCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const QuizPlayer = ({ module, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (!quizFinished) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizFinished]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const shuffleQuestions = (mod) => {
    const questionsWithIndex = mod.data.map((q, idx) => ({ ...q, originalIndex: idx }));
    try {
      const stats = JSON.parse(localStorage.getItem(`sophie_quiz_stats_${mod.id}`)) || {};
      questionsWithIndex.sort((a, b) => {
        const statsA = stats[a.originalIndex] || { correct: 0, wrong: 0 };
        const statsB = stats[b.originalIndex] || { correct: 0, wrong: 0 };
        
        let weightA = 1 + (statsA.wrong * 2) - (statsA.correct * 0.5);
        let weightB = 1 + (statsB.wrong * 2) - (statsB.correct * 0.5);
        
        weightA = Math.max(0.1, weightA);
        weightB = Math.max(0.1, weightB);
        
        return (Math.random() * weightB) - (Math.random() * weightA);
      });
    } catch (error) {
      console.error("Error accessing localStorage for stats", error);
      questionsWithIndex.sort(() => Math.random() - 0.5);
    }
    return questionsWithIndex;
  };

  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleQuestions(module));

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

  const updateStats = (isCorrect) => {
    try {
      const stats = JSON.parse(localStorage.getItem(`sophie_quiz_stats_${module.id}`)) || {};
      const qStats = stats[currentQuestion.originalIndex] || { correct: 0, wrong: 0 };
      if (isCorrect) qStats.correct += 1;
      else qStats.wrong += 1;
      stats[currentQuestion.originalIndex] = qStats;
      localStorage.setItem(`sophie_quiz_stats_${module.id}`, JSON.stringify(stats));
      
      const globalStats = JSON.parse(localStorage.getItem('sophie_global_stats')) || {};
      const modStats = globalStats[module.id] || { correct: 0, total: 0 };
      modStats.total += 1;
      if (isCorrect) modStats.correct += 1;
      globalStats[module.id] = modStats;
      localStorage.setItem('sophie_global_stats', JSON.stringify(globalStats));
    } catch (error) {
      console.error("Error saving stats to localStorage", error);
    }
  };

  const handleOptionToggle = (optionIndex) => {
    if (showResult) return;
    
    if (selectedOptions.includes(optionIndex)) {
      setSelectedOptions(selectedOptions.filter(i => i !== optionIndex));
    } else {
      setSelectedOptions([...selectedOptions, optionIndex]);
    }
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
    const correctOptions = currentQuestion.options
      .map((opt, i) => opt.isCorrect ? i : null)
      .filter(i => i !== null);
    
    const isCorrect = 
      selectedOptions.length === correctOptions.length &&
      selectedOptions.every(i => correctOptions.includes(i));
    
    if (isCorrect) setScore(score + 1);
    else setIncorrectCount(incorrectCount + 1);
    
    updateStats(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setShowResult(false);
      setShowFlashcardAnswer(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleAbort = () => {
    setQuizFinished(true);
  };

  const handleFlashcardEvaluate = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    updateStats(isCorrect);
    handleNextQuestion();
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIncorrectCount(0);
    setElapsedSeconds(0);
    setQuizFinished(false);
    setSelectedOptions([]);
    setShowResult(false);
    setShowFlashcardAnswer(false);
    setShuffledQuestions(shuffleQuestions(module));
  };

  if (quizFinished) {
    const answeredCount = score + incorrectCount;
    const accuracy = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;

    return (
      <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in w-full">
        <div className="glass-card p-8 md:p-12 rounded-[2rem] text-center border-t-4 border-t-primary">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="text-primary w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Ergebnis</h2>
          <p className="text-text-muted mb-10 text-xl">
            Du hast das Modul <span className="font-semibold text-text">{module.title}</span> beendet.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-text-muted font-semibold mb-2">Zeit</span>
              <div className="flex items-center gap-2 text-2xl font-black text-blue-500">
                <Clock className="w-6 h-6" />
                <span>{formatTime(elapsedSeconds)}</span>
              </div>
            </div>
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-text-muted font-semibold mb-2">Genauigkeit</span>
              <div className="text-2xl font-black text-primary">
                {accuracy}%
              </div>
            </div>
            <div className="bg-green-500/10 p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-semibold mb-2">Richtig</span>
              <div className="flex items-center gap-2 text-2xl font-black text-green-500">
                <Check className="w-6 h-6" />
                <span>{score}</span>
              </div>
            </div>
            <div className="bg-red-500/10 p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-red-600 dark:text-red-400 font-semibold mb-2">Falsch</span>
              <div className="flex items-center gap-2 text-2xl font-black text-red-500">
                <X className="w-6 h-6" />
                <span>{incorrectCount}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-black/5 dark:bg-white/5 h-4 rounded-full overflow-hidden mb-12 flex">
            {answeredCount > 0 ? (
              <>
                <div className="bg-green-500 h-full transition-all" style={{ width: `${(score / answeredCount) * 100}%` }} />
                <div className="bg-red-500 h-full transition-all" style={{ width: `${(incorrectCount / answeredCount) * 100}%` }} />
              </>
            ) : (
              <div className="bg-transparent h-full w-full" />
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button 
              onClick={handleRetry}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-3 text-lg shadow-lg shadow-primary/20"
            >
              <RefreshCcw className="w-6 h-6" />
              <span>Nochmal versuchen</span>
            </button>
            <button 
              onClick={onBack}
              className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text px-8 py-4 rounded-2xl font-bold transition-all text-lg"
            >
              Zum Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-4 px-2 md:px-6 animate-fade-in w-full">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-text-muted hover:text-primary transition-colors p-2 -ml-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold text-lg">Zurück</span>
        </button>
        <button 
          onClick={handleAbort}
          className="flex items-center space-x-2 text-red-500 hover:text-red-600 bg-red-500/10 hover:bg-red-500/20 transition-colors px-4 py-2 rounded-xl font-bold"
        >
          <StopCircle className="w-5 h-5" />
          <span>Abbrechen</span>
        </button>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">{module.title}</span>
            <h2 className="text-2xl md:text-3xl font-black mt-2">Frage {currentQuestionIndex + 1} <span className="text-text-muted font-medium">von {totalQuestions}</span></h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-2 mb-2">
              <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>{formatTime(elapsedSeconds)}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>{score}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-red-500/10 text-red-500 px-3 py-1 rounded-full font-bold text-sm">
                <X className="w-4 h-4" />
                <span>{incorrectCount}</span>
              </div>
            </div>
            <span className="text-primary font-bold text-lg">{Math.round(((currentQuestionIndex) / totalQuestions) * 100)}%</span>
          </div>
        </div>
        <div className="w-full bg-black/5 dark:bg-white/5 h-3 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full progress-bar rounded-full" 
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass-card p-6 md:p-10 rounded-[2rem] mb-10 border-t-4 border-t-primary/50">
        {currentQuestion.title && (
          <h3 className="text-2xl md:text-3xl font-black leading-tight mb-6 text-text">
            {currentQuestion.title}
          </h3>
        )}
        {currentQuestion.context && (
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-text-muted whitespace-pre-wrap">
            {currentQuestion.context}
          </p>
        )}
        <div className={cn(
          "font-bold leading-relaxed mb-10 text-text whitespace-pre-wrap",
          currentQuestion.title || currentQuestion.context ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        )}>
          {currentQuestion.question}
        </div>

        {currentQuestion.type === 'flashcard' ? (
          <div className="space-y-6">
            {!showFlashcardAnswer ? (
              <button
                onClick={() => setShowFlashcardAnswer(true)}
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/30 p-8 rounded-2xl font-bold text-xl transition-all shadow-sm"
              >
                Antwort anzeigen
              </button>
            ) : (
              <div className="animate-fade-in space-y-8">
                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
                  <h4 className="font-bold text-lg uppercase tracking-wider mb-4 text-text-muted">Antwort</h4>
                  <p className="text-xl md:text-2xl leading-relaxed text-text whitespace-pre-wrap">
                    {currentQuestion.answer}
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <h4 className="text-center font-semibold text-lg text-text-muted">Wie gut wusstest du die Antwort?</h4>
                  <div className="flex sm:flex-row flex-col gap-4">
                    <button
                      onClick={() => handleFlashcardEvaluate(false)}
                      className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border-2 border-red-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                    >
                      <X className="w-6 h-6" />
                      Falsch / Nicht gewusst
                    </button>
                    <button
                      onClick={() => handleFlashcardEvaluate(true)}
                      className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 border-2 border-green-500/30 p-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                    >
                      <Check className="w-6 h-6" />
                      Richtig gewusst
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="space-y-4 md:space-y-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOptions.includes(index);
                const isCorrect = option.isCorrect;
                
                let stateClasses = "border-black/5 dark:border-white/5 hover:border-primary/30 bg-black/5 dark:bg-white/5";
                if (showResult) {
                  if (isCorrect) stateClasses = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                  else if (isSelected) stateClasses = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400 opacity-70";
                  else stateClasses = "border-transparent opacity-50";
                } else if (isSelected) {
                  stateClasses = "border-primary bg-primary/10 text-primary shadow-sm";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionToggle(index)}
                    disabled={showResult}
                    className={cn(
                      "w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer",
                      stateClasses,
                      !showResult && "hover:shadow-md"
                    )}
                  >
                    <span className="text-lg md:text-xl font-medium leading-relaxed">{option.text}</span>
                    {showResult && isCorrect && <Check className="w-7 h-7 text-green-500 shrink-0 ml-4" />}
                    {showResult && isSelected && !isCorrect && <X className="w-7 h-7 text-red-500 shrink-0 ml-4" />}
                  </button>
                );
              })}
            </div>

            {showResult && currentQuestion.explanation && currentQuestion.explanation.trim() !== '' && (
              <div className="mt-10 p-8 bg-primary/5 rounded-2xl border border-primary/20 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-full shrink-0 mt-1">
                    <HelpCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider mb-3 text-primary">Erklärung</h4>
                    <p className="text-text leading-relaxed text-lg italic opacity-90">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

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
              onClick={handleNextQuestion}
              className="bg-text text-background hover:opacity-90 px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center space-x-3 w-full md:w-auto"
            >
              <span>{currentQuestionIndex < totalQuestions - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;
