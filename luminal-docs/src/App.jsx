import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Workspace from './pages/Workspace';
import Library from './pages/Library';
import Verification from './pages/Verification';
import Testing from './pages/Testing';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.4 };

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'app'
  const [activeTab, setActiveTab] = useState('workspace');
  const [theme, setTheme] = useState('light'); // 'light' | 'dark'

  // Apply theme to the body tag
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setView('app');
  };

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' && (
        <motion.div key="landing" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
          <Landing onNavigate={navigateTo} theme={theme} toggleTheme={toggleTheme} />
        </motion.div>
      )}

      {view === 'app' && (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="dashboard-layout">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setView={setView} theme={theme} toggleTheme={toggleTheme} />
          <div className="main-area">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                {activeTab === 'workspace' && <Workspace />}
                {activeTab === 'library' && <Library />}
                {activeTab === 'verification' && <Verification />}
                {activeTab === 'testing' && <Testing />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}