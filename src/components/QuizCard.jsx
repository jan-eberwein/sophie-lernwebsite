import { ArrowRight, BookOpen, Target, Check, X, TrendingUp } from 'lucide-react';

/**
 * QuizCard
 * Shows a module tile on the dashboard.
 *
 * stats shape: { correct: number, total: number, wrong: number }
 */
const QuizCard = ({ title, questionCount, stats, onStart }) => {
  const answered  = stats?.total   ?? 0;
  const correct   = stats?.correct ?? 0;
  const wrong     = stats?.wrong   ?? 0;
  const accuracy  = answered > 0 ? Math.round((correct / answered) * 100) : null;
  const pct       = answered > 0 ? Math.min(100, Math.round((answered / questionCount) * 100)) : 0;

  return (
    <div
      className="glass-card p-8 md:p-10 rounded-[2rem] group hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
      onClick={onStart}
    >
      <div className="bg-black/5 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
        <BookOpen className="text-text group-hover:text-primary w-8 h-8 transition-colors" />
      </div>

      <h3
        className="text-2xl font-black mb-2 tracking-tight group-hover:text-primary transition-colors break-words hyphens-auto"
        lang="de"
      >
        {title}
      </h3>

      <p className="text-text-muted text-base md:text-lg mb-6 leading-relaxed">
        {questionCount} Fragen
      </p>

      {/* Progress & Stats ─────────────────────────────────────────────── */}
      {answered > 0 ? (
        <div className="mb-6 space-y-3 flex-grow">
          {/* Accuracy badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-xl font-bold text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>{accuracy}% Genauigkeit</span>
            </div>
          </div>

          {/* Correct / Wrong counts */}
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="flex items-center gap-1 text-green-500">
              <Check className="w-4 h-4" /> {correct} richtig
            </span>
            <span className="text-text-muted">·</span>
            <span className="flex items-center gap-1 text-red-500">
              <X className="w-4 h-4" /> {wrong} falsch
            </span>
          </div>

          {/* Progress bar – answered / total questions */}
          <div>
            <div className="flex justify-between text-xs text-text-muted mb-1">
              <span>{answered} beantwortet</span>
              <span>{pct}%</span>
            </div>
            <div className="w-full h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow mb-6">
          <span className="text-xs text-text-muted italic">Noch nicht gestartet</span>
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
