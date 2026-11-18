import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Verification() {
  return (
    <div>
      <div className="page-header">
        <h2>Verification Dashboard</h2>
        <p>Answer verification dashboard to monitor accuracy and missing-information detection.</p>
      </div>

      <div className="grid-3" style={{ marginBottom: '32px' }}>
        <div className="card">
          <span className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Answer Accuracy</span>
          <h3 style={{ fontSize: '3rem', margin: '12px 0', color: 'var(--blue-primary)' }}>98.4%</h3>
          <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 700, background: '#e6f7ec', padding: '6px 12px', borderRadius: '6px' }}>↑ 2.1% this week</span>
        </div>
        <div className="card">
          <span className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Missing Info Alerts</span>
          <h3 style={{ fontSize: '3rem', margin: '12px 0', color: '#b45309' }}>4</h3>
          <span style={{ fontSize: '0.85rem', color: '#b45309', fontWeight: 700, background: '#fff4e5', padding: '6px 12px', borderRadius: '6px' }}>Requires review</span>
        </div>
        <div className="card">
          <span className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Citations Clicked</span>
          <h3 style={{ fontSize: '3rem', margin: '12px 0' }}>142</h3>
          <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 700, background: '#e6f7ec', padding: '6px 12px', borderRadius: '6px' }}>Healthy engagement</span>
        </div>
      </div>

      <div className="card">
        <h4 style={{ marginBottom: '24px', fontSize: '1.2rem' }}>Recent Flags</h4>
        <div style={{ padding: '20px', background: '#fffbf5', borderLeft: '4px solid #f59e0b', borderRadius: '8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 700, color: '#b45309' }}>
            <AlertTriangle size={18} /> Missing Info Detected
          </div>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.5 }}>Question: "What is the rate limit for the /auth endpoint?" <br/><span className="text-muted" style={{ marginTop: '8px', display: 'block' }}>The uploaded documents do not contain rate limit information.</span></p>
        </div>
        <div style={{ padding: '20px', background: '#f4fdf8', borderLeft: '4px solid #22c55e', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 700, color: '#166534' }}>
            <CheckCircle2 size={18} /> Verified Answer
          </div>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.5 }}>Question: "How does the authentication flow work?" <br/><span className="text-muted" style={{ marginTop: '8px', display: 'block' }}>Answer verified against Architecture_Spec.pdf, Page 4.</span></p>
        </div>
      </div>
    </div>
  );
}