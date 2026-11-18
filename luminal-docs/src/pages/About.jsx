import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ShieldCheck, Database, FileText } from 'lucide-react';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function About({ onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button onClick={onBack} className="sidebar-btn" style={{ width: 'max-content', marginBottom: '40px' }}>
          <ArrowLeft size={18} /> Back to Home
        </button>
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>About Luminal Docs</h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '40px', lineHeight: 1.6 }}>
            Luminal is a state-of-the-art technical document assistant powered by Gemini 2.5 Flash and MongoDB Vector Search. We are built for engineering teams who need instant, grounded answers from complex specifications.
          </p>
        </motion.div>

        <motion.div className="grid-2" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="card">
            <FileText size={24} className="text-blue" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Document Intelligence</h3>
            <p className="text-muted">Upload multiple PDFs, text specs, and markdown files. Our system chunks and embeds them for deep semantic retrieval.</p>
          </motion.div>
          <motion.div variants={item} className="card">
            <ShieldCheck size={24} className="text-blue" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Zero Hallucinations</h3>
            <p className="text-muted">If the answer isn't in your documents, we don't invent it. Our verification dashboard tracks missing info and tests for hallucinations.</p>
          </motion.div>
          <motion.div variants={item} className="card">
            <Database size={24} className="text-blue" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>MongoDB Backend</h3>
            <p className="text-muted">Every chunk, conversation, and citation is securely stored and indexed, giving you instant recall across your entire library.</p>
          </motion.div>
          <motion.div variants={item} className="card">
            <Sparkles size={24} className="text-blue" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Gemini 2.5 Engine</h3>
            <p className="text-muted">Equipped with a 3-key rotation system to ensure maximum uptime and high-availability answer generation.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}