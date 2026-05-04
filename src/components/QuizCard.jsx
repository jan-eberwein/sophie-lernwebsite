import { ArrowRight, BookOpen, Target } from 'lucide-react';

const QuizCard = ({ title, questionCount, stats, onStart }) => {
  return (
    <div 
      className="glass-card p-8 md:p-10 rounded-[2rem] group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
      onClick={onStart}
    >
      <div className="bg-black/5 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
        <BookOpen className="text-text group-hover:text-primary w-8 h-8 transition-colors" />
      </div>
      <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors break-words hyphens-auto" lang="de">{title}</h3>
      <p className="text-text-muted text-base md:text-lg mb-6 leading-relaxed flex-grow">
        {questionCount} Fragen
      </p>
      
      {stats && stats.total > 0 && (
        <div className="mb-6 flex items-center space-x-2 bg-black/5 dark:bg-white/5 w-fit px-4 py-2 rounded-xl">
          <Target className="w-5 h-5 text-primary" />
          <span className="font-semibold text-text">
            Bisherige Genauigkeit: {Math.round((stats.correct / stats.total) * 100)}%
          </span>
        </div>
      )}
      <div className="flex items-center space-x-3 text-text font-bold group-hover:text-primary transition-colors mt-auto">
        <span className="text-lg">Starten</span>
        <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default QuizCard;

