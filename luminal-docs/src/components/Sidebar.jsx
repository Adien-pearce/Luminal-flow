import { Sparkles, MessageSquare, Library, ShieldCheck, FlaskConical, LogOut, Sun, Moon } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, setView, theme, toggleTheme }) {
  return (
    <div className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>
          <Sparkles size={20} style={{ color: 'var(--blue-bright)' }} /> LUMEN
        </div>
        <button onClick={toggleTheme} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
      
      <button className={`sidebar-btn ${activeTab === 'workspace' ? 'active' : ''}`} onClick={() => setActiveTab('workspace')}>
        <MessageSquare size={18} /> 01. Workspace
      </button>
      <button className={`sidebar-btn ${activeTab === 'library' ? 'active' : ''}`} onClick={() => setActiveTab('library')}>
        <Library size={18} /> 02. Library
      </button>
      <button className={`sidebar-btn ${activeTab === 'verification' ? 'active' : ''}`} onClick={() => setActiveTab('verification')}>
        <ShieldCheck size={18} /> 03. Verification
      </button>
      <button className={`sidebar-btn ${activeTab === 'testing' ? 'active' : ''}`} onClick={() => setActiveTab('testing')}>
        <FlaskConical size={18} /> 04. Testing
      </button>

      <div style={{ marginTop: 'auto' }}>
        <button className="sidebar-btn" onClick={() => setView('landing')}>
          <LogOut size={18} /> Exit Workspace
        </button>
      </div>
    </div>
  );
}