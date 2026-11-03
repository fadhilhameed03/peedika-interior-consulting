import React from 'react';

const stats = [
  { value: 'Pan-India', label: 'Execution Capability' },
  { value: 'ROI Focused', label: 'Layout Strategy' },
  { value: 'End-to-End', label: 'Turnkey Solutions' },
  { value: 'Heritage', label: 'Authentic Roots' },
];

const Stats = () => (
  <section
    style={{
      background: 'linear-gradient(135deg, #0e1f1c 0%, #1B3B36 60%, #234d46 100%)',
      padding: '56px 24px',
    }}
  >
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        textAlign: 'center',
      }}
      className="stats-grid"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            padding: '8px',
            borderRight: i < stats.length - 1 ? '1px solid rgba(244,241,234,0.08)' : 'none',
          }}
          className="stat-item"
        >
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: '#C5A880',
              marginBottom: '6px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {s.value}
          </p>
          <p
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.55)',
              fontWeight: 500,
            }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
    <style>{`
      @media (max-width: 640px) {
        .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .stat-item { border-right: none !important; border-bottom: 1px solid rgba(244,241,234,0.08); padding-bottom: 24px; }
      }
    `}</style>
  </section>
);

export default Stats;
