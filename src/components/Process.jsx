import React from 'react';

const steps = [
  { n: '01', title: 'Understanding Client Requirement', desc: 'Deep dive into your brand vision, target audience, merchandising strategy, and commercial targets.' },
  { n: '02', title: 'Recce & Space Planning', desc: 'Site measurement audits, technical evaluations, zoning layouts, and customer traffic flow mapping.' },
  { n: '03', title: '2D & 3D Walkthrough', desc: 'Immersive 3D renderings and spatial visualizations so you can experience your store before execution.' },
  { n: '04', title: 'GFC Preparation', desc: 'Good For Construction drawing packages complete with detailed electrical, HVAC, and civil specs.' },
  { n: '05', title: 'Material / Product Selection', desc: 'Curating commercial-grade durable finishes, artisanal woodwork samples, lighting, and display fixtures.' },
  { n: '06', title: 'Interior Execution', desc: 'Pan-India on-site management, quality supervision, vendor coordination, and strict timeline adherence.' },
  { n: '07', title: 'Facility & Maintenance Support', desc: 'Post-handover support, warranty management, and scheduled commercial maintenance guidance to keep your store pristine.', wide: true },
];

const Process = () => (
  <section id="process" style={{ padding: 'clamp(80px, 10vw, 120px) 24px', backgroundColor: '#F4F1EA' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div className="reveal" style={{ marginBottom: '64px' }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#1B3B36', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
          How We Work
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#0e1f1c', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            The Peevika Execution<br />Flowchart
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(14,31,28,0.6)', maxWidth: '320px', lineHeight: 1.6 }}>
            A structured 7-step roadmap from initial concept to your store's grand opening.
          </p>
        </div>
      </div>

      {/* Steps grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
        className="process-grid"
      >
        {steps.map((step, i) => (
          <div
            key={step.n}
            className={`reveal reveal-delay-${Math.min(i + 1, 4)} process-card${step.wide ? ' process-wide' : ''}`}
            style={{
              backgroundColor: '#ffffff',
              padding: '28px 24px',
              borderRadius: '16px',
              border: '1px solid rgba(14,31,28,0.08)',
              boxShadow: '0 2px 12px rgba(14,31,28,0.04)',
              transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
              cursor: 'default',
              gridColumn: step.wide ? 'span 2' : 'span 1',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(27,59,54,0.35)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(14,31,28,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(14,31,28,0.08)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(14,31,28,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, color: '#C5A880', textTransform: 'uppercase' }}>
              Step {step.n}
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 500, color: '#0e1f1c', margin: '10px 0 8px', lineHeight: 1.35 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(14,31,28,0.62)' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 1024px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 640px) { .process-grid { grid-template-columns: 1fr !important; } .process-wide { grid-column: span 1 !important; } }
    `}</style>
  </section>
);

export default Process;
