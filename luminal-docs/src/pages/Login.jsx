import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Login({ onLogin, onBack }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa', position: 'relative' }}>
      <button onClick={onBack} className="sidebar-btn" style={{ position: 'absolute', top: '40px', left: '40px', width: 'max-content' }}>
        <ArrowLeft size={18} /> Back to Landing
      </button>

      <motion.div className="card" style={{ width: '400px', padding: '40px' }} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <Sparkles size={32} className="text-blue" />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>System Login</h2>
        <p className="text-muted" style={{ textAlign: 'center', marginBottom: '32px' }}>Authenticate to access the workspace</p>
        
        <input type="email" placeholder="Email address" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '16px', outline: 'none' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '24px', outline: 'none' }} />
        
        <button className="btn-blue" style={{ width: '100%', padding: '12px' }} onClick={onLogin}>Initialize Session</button>
      </motion.div>
    </div>
  );
}