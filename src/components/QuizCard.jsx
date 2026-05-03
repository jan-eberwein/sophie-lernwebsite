import { ArrowRight, BookOpen } from 'lucide-react';

const QuizCard = ({ title, desc, onStart }) => {
  return (
    <div 
      className="glass-card p-8 md:p-10 rounded-[2rem] group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
      onClick={onStart}
    >
      <div className="bg-black/5 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
        <BookOpen className="text-text group-hover:text-primary w-8 h-8 transition-colors" />
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors break-words hyphens-auto" lang="de">{title}</h3>
      <p className="text-text-muted text-base md:text-lg mb-8 leading-relaxed flex-grow">
        {desc}
      </p>
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

