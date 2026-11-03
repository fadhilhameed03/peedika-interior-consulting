import React from 'react';

const services = [
  {
    num: '01',
    title: 'Retail Strategy & Zoning',
    desc: 'Strategic floor planning, customer traffic flow analysis, and merchandise positioning designed to eliminate dead zones and boost sales conversion.',
    icon: '🗺️',
  },
  {
    num: '02',
    title: 'Experiential Interior Design',
    desc: '3D conceptualization, custom millwork, mood boards, and lighting setups engineered to elevate your brand\'s retail identity.',
    icon: '✏️',
  },
  {
    num: '03',
    title: 'Pan-India Turnkey Execution',
    desc: 'End-to-end execution management from material sourcing in Kerala to compliance and site delivery anywhere in India.',
    icon: '🏗️',
  },
];

const Services = () => (
  <section id="services" style={{ padding: 'clamp(80px, 10vw, 120px) 24px', backgroundColor: '#ffffff' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div className="reveal" style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#1B3B36', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
            Our Expertise
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#0e1f1c', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            Comprehensive<br />Retail Solutions
          </h2>
        </div>
        <a
          href="#contact"
          style={{
            fontSize: '0.85rem',
            color: '#1B3B36',
            fontWeight: 500,
            textDecoration: 'none',
            borderBottom: '1px solid #1B3B36',
            paddingBottom: '2px',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Discuss your project →
        </a>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="services-grid">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`reveal reveal-delay-${i + 1}`}
            style={{
              backgroundColor: '#F4F1EA',
              padding: '36px 32px',
              borderRadius: '20px',
              border: '1px solid rgba(14,31,28,0.07)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 48px rgba(14,31,28,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Number watermark */}
            <div
              className="font-serif"
              style={{
                position: 'absolute',
                top: '-10px',
                right: '20px',
                fontSize: '6rem',
                fontWeight: 600,
                color: 'rgba(27,59,54,0.05)',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              {s.num}
            </div>

            <div style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{s.icon}</div>
            <h3
              className="font-serif"
              style={{ fontSize: '1.25rem', fontWeight: 500, color: '#0e1f1c', marginBottom: '14px', lineHeight: 1.3 }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(14,31,28,0.65)' }}>
              {s.desc}
            </p>

            {/* Bottom accent line */}
            <div style={{ marginTop: '28px', height: '2px', width: '40px', backgroundColor: '#C5A880', borderRadius: '2px' }} />
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

export default Services;
