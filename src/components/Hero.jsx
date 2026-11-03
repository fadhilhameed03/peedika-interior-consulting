import React, { useEffect, useRef } from 'react';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Hero = () => {
  useReveal();

  return (
    <header
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px clamp(60px, 8vw, 100px)',
        background: 'linear-gradient(160deg, #F4F1EA 55%, #EAE5D8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background circle */}
      <div style={{
        position: 'absolute',
        top: '-80px', right: '-80px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,59,54,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-120px', left: '-60px',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,168,128,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">
        {/* Left */}
        <div className="reveal">
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
              marginBottom: '28px',
              fontWeight: 600,
            }}
          >
            Commercial &amp; Retail Design Specialists
          </span>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#0e1f1c',
              marginBottom: '24px',
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
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(14,31,28,0.72)',
              maxWidth: '480px',
              marginBottom: '40px',
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
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                boxShadow: '0 8px 32px rgba(27,59,54,0.22)',
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D5A52'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,59,54,0.32)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1B3B36'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(27,59,54,0.22)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Start Your Project
            </a>
            <a
              href="#process"
              style={{
                border: '1.5px solid rgba(14,31,28,0.25)',
                color: '#0e1f1c',
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0e1f1c'; e.currentTarget.style.backgroundColor = 'rgba(14,31,28,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,31,28,0.25)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Explore Our Process
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div
            style={{
              aspectRatio: '4/3',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(14,31,28,0.2), 0 8px 24px rgba(14,31,28,0.1)',
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Retail Interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(27,59,54,0.08) 0%, transparent 60%)',
            }} />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '-18px',
              left: '-18px',
              backgroundColor: '#0e1f1c',
              color: '#F4F1EA',
              padding: '14px 20px',
              borderRadius: '14px',
              boxShadow: '0 8px 32px rgba(14,31,28,0.3)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: '#C5A880', display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Execution</span>
            Pan-India 🏆
          </div>

          {/* Decorative element */}
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C5A880, #D9C3A3)',
              opacity: 0.6,
              zIndex: -1,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </header>
  );
};

export default Hero;
