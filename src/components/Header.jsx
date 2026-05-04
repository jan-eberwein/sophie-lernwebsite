import { GraduationCap, Moon, Sun, User, LogOut } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = ({ onHome, user, onAuthClick }) => {
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
            Sophie's Lernplattform <span className="hidden sm:inline">🩷</span>🤍
          </span>
        </div>

        <nav className="flex items-center">
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3 bg-black/5 dark:bg-white/5 rounded-full pl-3 pr-1 py-1">
                <span className="text-sm font-medium text-text hidden sm:block">
                  {user.email.split('@')[0]}
                </span>
                <button
                  onClick={() => onAuthClick('logout')}
                  className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-text transition-colors"
                  title="Abmelden"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onAuthClick('login')}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white transition-colors font-medium shadow-sm"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-text"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

