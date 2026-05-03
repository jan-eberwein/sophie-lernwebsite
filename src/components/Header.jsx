import { GraduationCap, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = ({ onHome }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b px-4 py-4 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 md:px-6">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={onHome}
        >
          <div className="bg-primary p-2 rounded-xl group-hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-text group-hover:text-primary transition-colors">
            Sophie's Lernplattform 🤍
          </span>
        </div>

        <nav className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 text-text hover:text-primary transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

