import { useState } from 'react';
import { Sparkles, ArrowUp, AlertTriangle } from 'lucide-react';

export default function Workspace() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'System online. I am your AI assistant. Ask me anything about your technical documents.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (userMsg.toLowerCase().includes('rate limit')) {
        setMessages(prev => [...prev, { type: 'bot', isMissing: true, text: "I searched the documents, but I could not find information regarding this specific query." }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: "According to the system architecture documentation, the authentication flow uses OAuth 2.0. The client requests an access token from the `/auth/token` endpoint.", citation: "[Architecture_Spec.pdf, Page 4]" }]);
      }
    }, 1500);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Workspace</h2>
        <p>AI Question-and-answer chatbot with document-based answer retrieval and clickable citations.</p>
      </div>
      
      <div className="card chat-box">
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.type}`}>
              {msg.type === 'bot' && (
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--blue-bright)', padding: '10px', borderRadius: '12px', height: 'max-content' }}>
                  <Sparkles size={18} />
                </div>
              )}
              <div className="bubble">
                {msg.isMissing && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 600, marginBottom: '8px' }}>
                    <AlertTriangle size={16} /> Missing Information Detected
                  </div>
                )}
                {msg.text}
                {msg.citation && (
                  <span className="citation" onClick={() => alert('Opening PDF...')}>
                    {msg.citation}
                  </span>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message bot">
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--blue-bright)', padding: '10px', borderRadius: '12px', height: 'max-content' }}><Sparkles size={18} /></div>
              <div className="bubble" style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '20px' }}>
                <span className="dot-loading"></span><span className="dot-loading"></span><span className="dot-loading"></span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="chat-input-area">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." />
          <button type="submit" className="btn-blue" style={{ borderRadius: '12px', padding: '0 24px' }}>
            <ArrowUp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}