import { useState } from 'react';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';

export default function Library() {
  const [docs, setDocs] = useState([
    { id: 1, name: 'Architecture_Spec_v2.pdf', pages: 24, size: '1.2 MB', status: 'Processed' },
    { id: 2, name: 'Database_Schema.pdf', pages: 8, size: '400 KB', status: 'Processed' }
  ]);

  const handleUpload = () => {
    const newDoc = { id: Date.now(), name: `Technical_Doc_${docs.length + 1}.pdf`, pages: 12, size: '850 KB', status: 'Processing...' };
    setDocs([...docs, newDoc]);
    setTimeout(() => {
      setDocs(current => current.map(d => d.id === newDoc.id ? { ...d, status: 'Processed' } : d));
    }, 2000);
  };

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Document Library</h2>
          <p>Manage your engineering specifications and PDFs.</p>
        </div>
        <button className="btn-blue" onClick={handleUpload}>
          <UploadCloud size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }}/> Upload PDF
        </button>
      </div>

      <div className="grid-3">
        <div className="card" onClick={handleUpload} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderColor: 'var(--blue-bright)', cursor: 'pointer', minHeight: '220px', background: 'rgba(0, 85, 255, 0.02)' }}>
          <UploadCloud size={40} className="text-blue" style={{ marginBottom: '16px' }} />
          <span style={{ fontWeight: 600, color: 'var(--blue-bright)' }}>Drag & Drop Files</span>
        </div>
        
        {docs.map(doc => (
          <div key={doc.id} className="card" style={{ position: 'relative' }}>
            <button onClick={() => setDocs(docs.filter(d => d.id !== doc.id))} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <Trash2 size={18}/>
            </button>
            <div style={{ background: 'rgba(0, 85, 255, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <FileText size={24} className="text-blue" />
            </div>
            <h4 style={{ marginBottom: '8px', paddingRight: '32px', fontSize: '1.1rem' }}>{doc.name}</h4>
            <span className="text-muted" style={{ fontSize: '0.9rem' }}>{doc.pages} Pages · {doc.size}</span>
            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '0.75rem', background: doc.status === 'Processed' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: doc.status === 'Processed' ? '#22c55e' : '#f59e0b', padding: '6px 14px', borderRadius: '999px', fontWeight: 700 }}>{doc.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}