import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '28px 0 120px', color: 'var(--muted)', fontSize: '14px', fontFamily: 'var(--font-sans)' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <span>© I-denty 2026. Redesign concept for review.</span>
        <span>Privacy · Terms · Refunds · FAQ</span>
      </div>
    </footer>
  );
};