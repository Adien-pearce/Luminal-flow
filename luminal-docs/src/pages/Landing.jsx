import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, FlaskConical, MessageSquare, UploadCloud, FileSearch, AlertTriangle, Network, Sun, Moon, X, MessageCircle } from 'lucide-react';

export default function Landing({ onNavigate, theme, toggleTheme }) {
  const [showIdlePopup, setShowIdlePopup] = useState(false);

  // 40 Second Idle Timer
  useEffect(() => {
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setShowIdlePopup(true), 40000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    resetTimer(); // Start timer on mount

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
    };
  }, []);

  const features = [
    { icon: <UploadCloud size={20} />, title: "PDF Upload", desc: "Upload multiple files securely." },
    { icon: <BookOpen size={20} />, title: "Document Library", desc: "Manage your engineering specs." },
    { icon: <MessageSquare size={20} />, title: "AI Q&A Chatbot", desc: "Chat with documents using Gemini." },
    { icon: <FileSearch size={20} />, title: "Answer Retrieval", desc: "Context-aware exact specifications." },
    { icon: <Network size={20} />, title: "Clickable Citations", desc: "Links directly to the page reference." },
    { icon: <AlertTriangle size={20} />, title: "Missing Info Detection", desc: "AI flags when answers aren't present." },
    { icon: <ShieldCheck size={20} />, title: "Verification Dashboard", desc: "Monitor accuracy and flags." },
    { icon: <FlaskConical size={20} />, title: "Hallucination Testing", desc: "Automated off-topic test suites." },
  ];

  return (
    <div className="landing-hero">
      
      {/* Navigation */}
      <nav className="hero-nav">
        <div className="nav-logo">
          <Sparkles size={20} /> Luminal
        </div>
        <div className="nav-links">
          <a onClick={() => onNavigate('workspace')}>01. Workspace</a>
          <a onClick={() => onNavigate('library')}>02. Library</a>
          <a onClick={() => onNavigate('verification')}>03. Verification</a>
          <a onClick={() => onNavigate('testing')}>04. Testing</a>
        </div>
        <div className="nav-actions">
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="btn-white" onClick={() => onNavigate('workspace')}>
            Let's Get Started <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }}/>
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hero-badge">
          <span className="tag">New</span> Luminal 2.0 is live <ArrowRight size={14} />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hero-title">
          Technical Docs.<br /><em>Powered by AI.</em>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="hero-subtitle">
          An intelligent, hallucination-free AI workspace for your engineering specifications.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <button className="btn-white" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => onNavigate('workspace')}>
            Let's Get Started
          </button>
        </motion.div>
      </div>

      {/* Feature Grid */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="features-section">
        <div className="grid-4">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Idle Popup */}
      {showIdlePopup && (
        <div className="idle-popup">
          <div style={{ background: '#ebf1ff', padding: '10px', borderRadius: '50%', color: 'var(--blue-bright)' }}>
            <MessageCircle size={20} />
          </div>
          <div style={{ paddingTop: '4px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Need any assistance?</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '12px' }}>Take your time to explore. Let me know if you need help.</p>
            <button className="btn-blue" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => onNavigate('workspace')}>Go to Workspace</button>
          </div>
          <button className="close-btn" onClick={() => setShowIdlePopup(false)}><X size={18} /></button>
        </div>
      )}

    </div>
  );
}