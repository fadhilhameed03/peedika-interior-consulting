import React from 'react';

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#0e1f1c',
      borderTop: '1px solid rgba(197,168,128,0.12)',
      padding: '32px 24px',
    }}
  >
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <div>
        <span
          className="font-serif"
          style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F4F1EA', letterSpacing: '0.08em' }}
        >
          PEEVIKA
        </span>
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C5A880',
            marginLeft: '10px',
          }}
        >
          Interior Consultants
        </span>
      </div>
      <p style={{ fontSize: '0.75rem', color: 'rgba(244,241,234,0.35)', letterSpacing: '0.02em' }}>
        © 2026 Peevika Interior Consultants. We build shops that can sell.
      </p>
    </div>
  </footer>
);

export default Footer;
