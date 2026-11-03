import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        padding: 'clamp(24px, 4vw, 48px) 24px',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Decorative subtle background accents */}
      <div style={{
        position: 'absolute',
        top: '-40px', right: '-40px',
        width: '420px', height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,59,54,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-60px', left: '-40px',
        width: '320px', height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,168,128,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left Column: Headline & Philosophy */}
        <div>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(27,59,54,0.09)',
              color: '#1B3B36',
              padding: '6px 14px',
              borderRadius: '100px',
              marginBottom: '20px',
              fontWeight: 600,
            }}
          >
            Commercial &amp; Retail Design Specialists
          </span>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#0e1f1c',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            We build shops{' '}
            <em style={{ color: '#1B3B36', fontStyle: 'italic', fontWeight: 400 }}>
              that can sell.
            </em>
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(14,31,28,0.75)',
              maxWidth: '490px',
              marginBottom: '32px',
            }}
          >
            Merging traditional Kerala craftsmanship with modern retail science. We design
            commercial spaces optimized for customer flow, brand impact, and maximum sales conversion.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                backgroundColor: '#1B3B36',
                color: '#F4F1EA',
                padding: '13px 30px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                boxShadow: '0 8px 24px rgba(27,59,54,0.22)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2D5A52';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1B3B36';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Start Your Project</span>
              <span>→</span>
            </a>
            <a
              href="#process"
              style={{
                border: '1.5px solid rgba(14,31,28,0.25)',
                color: '#0e1f1c',
                padding: '13px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#0e1f1c';
                e.currentTarget.style.backgroundColor = 'rgba(14,31,28,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(14,31,28,0.25)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Explore Our Process
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              aspectRatio: '4/3',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(14,31,28,0.18), 0 6px 20px rgba(14,31,28,0.08)',
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Commercial Retail Interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(27,59,54,0.08) 0%, transparent 60%)',
            }} />
          </div>

          {/* Floating Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '-14px',
              left: '-14px',
              backgroundColor: '#0e1f1c',
              color: '#F4F1EA',
              padding: '12px 18px',
              borderRadius: '12px',
              boxShadow: '0 8px 25px rgba(14,31,28,0.3)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: '#C5A880', display: 'block', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>
              Execution
            </span>
            Pan-India Capability 🏆
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </header>
  );
};

export default Hero;
