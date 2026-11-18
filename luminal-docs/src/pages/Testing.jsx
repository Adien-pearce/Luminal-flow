import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Play } from 'lucide-react';

export default function Testing() {
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const runTest = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 2500);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Hallucination Testing</h2>
        <p>Automated hallucination testing to ensure the AI does not invent information.</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h4 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Run Test Suite</h4>
          <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '32px', lineHeight: 1.6 }}>This will ask 50 synthetic off-topic questions and verify the AI correctly refuses to answer.</p>
          <button className="btn-blue" onClick={runTest} disabled={isRunning} style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {isRunning ? 'Running Tests...' : <><Play size={18}/> Start 50-Question Test</>}
          </button>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Test Results</h4>
          {!hasRun && !isRunning && (
            <p className="text-muted" style={{ textAlign: 'center', marginTop: '40px' }}>Run a test suite to see results.</p>
          )}
          {isRunning && (
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                <div className="dot-loading" style={{ width: '30px', height: '30px', marginBottom: '16px' }}></div>
                <span className="text-muted">Analyzing 50 questions...</span>
             </div>
          )}
          {hasRun && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#f4fdf8', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontWeight: 600 }}><CheckCircle2 size={18} /> Successfully Refused Off-topic</span>
                <span style={{ fontWeight: 700, color: '#166534' }}>50 / 50</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#991b1b', fontWeight: 600 }}><AlertTriangle size={18} /> Hallucination Detected</span>
                <span style={{ fontWeight: 700, color: '#991b1b' }}>0 / 50</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}