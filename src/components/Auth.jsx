import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { LogIn, UserPlus, Mail, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

const Auth = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const authEmail = `${username.trim().toLowerCase().replace(/\s+/g, '')}@sophie.local`;

      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password,
        });
        if (error) throw error;
        // Successful login will be handled by onAuthStateChange in App.jsx
      } else {
        const { error } = await supabase.auth.signUp({
          email: authEmail,
          password,
        });
        if (error) throw error;
        setMessage('Registrierung erfolgreich! Bitte überprüfe deine E-Mails, um deinen Account zu bestätigen (falls erforderlich). Alternativ kannst du dich jetzt einloggen.');
        setIsLogin(true);
      }
    } catch (error) {
      setError(error.message || 'Ein Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto relative mt-10 md:mt-20 px-4">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute -top-16 left-4 flex items-center text-text-muted hover:text-primary transition-colors font-medium group"
        >
          <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-primary/10 mr-2 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Zurück
        </button>
      )}

      <div className="glass-card p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 mb-6 text-primary">
            {isLogin ? <LogIn className="w-8 h-8" /> : <UserPlus className="w-8 h-8" />}
          </div>
          <h2 className="text-3xl font-black text-text tracking-tight mb-2">
            {isLogin ? 'Login' : 'Registrieren'}
          </h2>
          <p className="text-text-muted">
            {isLogin
              ? 'Speichere deinen Lernfortschritt und synchronisiere ihn auf allen Geräten.'
              : 'Speichere deinen Lernfortschritt und synchronisiere ihn auf allen Geräten.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start text-red-500 text-sm">
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start text-green-500 text-sm">
            <div className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-center font-bold">✓</div>
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-semibold text-text mb-2">Benutzername</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                <UserPlus className="w-5 h-5" />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Benutzername"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text mb-2">Passwort</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <span>{isLogin ? 'Einloggen' : 'Registrieren'}</span>
            )}
          </button>
        </form>

        <div className="mt-8 text-center relative z-10">
          <p className="text-text-muted text-sm">
            {isLogin ? 'Noch keinen Account?' : 'Bereits registriert?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary font-bold hover:underline focus:outline-none"
            >
              {isLogin ? 'Jetzt registrieren' : 'Hier einloggen'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
