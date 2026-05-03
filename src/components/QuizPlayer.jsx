import { useState } from 'react';
import { ArrowLeft, Check, X, HelpCircle, Trophy, RefreshCcw, ArrowRight } from 'lucide-react';
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

  const [shuffledQuestions] = useState(() => {
    return [...module.data].sort(() => Math.random() - 0.5);
  });

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

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

  const handleFlashcardEvaluate = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    handleNextQuestion();
  };

  if (quizFinished) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 animate-fade-in w-full">
        <div className="glass-card p-12 rounded-[2rem] text-center border-t-4 border-t-primary">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="text-primary w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Fantastisch!</h2>
          <p className="text-text-muted mb-10 text-xl">
            Du hast <span className="text-primary font-bold">{score}</span> von <span className="text-primary font-bold">{totalQuestions}</span> Fragen richtig beantwortet.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <button 
              onClick={() => window.location.reload()}
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
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-text-muted hover:text-primary mb-8 transition-colors p-2 -ml-2 rounded-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold text-lg">Zurück</span>
      </button>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">{module.title}</span>
            <h2 className="text-2xl md:text-3xl font-black mt-2">Frage {currentQuestionIndex + 1} <span className="text-text-muted font-medium">von {totalQuestions}</span></h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-2 mb-2">
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
        <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-10 text-text">
          {currentQuestion.question}
        </h3>

        {module.type === 'flashcard' ? (
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

            {showResult && (
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
        {module.type !== 'flashcard' && (
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
