import React, { useEffect } from 'react';

const Hero = ({ scrollProgress = 0 }) => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Calculate forward projection dynamics
  // Starts projecting as shutter starts lifting (progress > 0.05) and finishes around 0.95
  const projProgress = Math.min(Math.max((scrollProgress - 0.05) / 0.88, 0), 1);

  // 3D forward projection calculations:
  // The grand store image expands from deep in the background (0.72) to full forward scale (1.02)
  const scale = 0.72 + projProgress * 0.30;

  // Z-axis movement: projects from -340px in the distance right up to 0px
  const translateZ = (1 - projProgress) * -340;

  // Visual clarity & illumination: starts soft-focused and atmospheric, sharpens into full brilliance
  const opacity = 0.4 + projProgress * 0.6;
  const blur = (1 - projProgress) * 7;
  const brightness = 0.65 + projProgress * 0.35;

  // Centered text emergence: gracefully rises into position as the store picture arrives
  const textOpacity = 0.3 + projProgress * 0.7;
  const textTranslateY = (1 - projProgress) * 35;
  const textScale = 0.94 + projProgress * 0.06;

  return (
    <header
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 110px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1400px', // 3D room perspective for deep forward projection
      }}
    >
      {/* ── 1. BIG SECTION-COVERING STORE PICTURE (PROJECTING FROM BACK TO FRONT) ── */}
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(8px, 1.5vw, 20px)',
          borderRadius: '24px',
          overflow: 'hidden',
          transform: `translate3d(0, 0, ${translateZ}px) scale(${scale})`,
          opacity: opacity,
          filter: `blur(${blur}px) brightness(${brightness})`,
          transition: 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.16s ease-out, filter 0.16s ease-out',
          willChange: 'transform, opacity, filter',
          transformOrigin: 'center center',
          boxShadow: `0 25px 80px rgba(7, 16, 14, ${0.4 + projProgress * 0.45})`,
          border: `1.5px solid rgba(197, 168, 128, ${0.25 + projProgress * 0.4})`,
          background: '#0a1614',
        }}
      >
        {/* Full-Covering High-Resolution Retail Store Visual */}
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=85"
          alt="Modern Architectural Retail Store Interior"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 42%',
            display: 'block',
            transform: `scale(${1.08 - projProgress * 0.08})`, // Subtle depth counter-scale
            transition: 'transform 0.2s ease-out',
          }}
        />

        {/* Elegant Architectural Dark Scrim Overlay for Crystal-Clear Text Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 50% 50%, rgba(14, 31, 28, 0.48) 0%, rgba(10, 22, 19, 0.82) 80%, rgba(7, 14, 12, 0.94) 100%),
              linear-gradient(180deg, rgba(14, 31, 28, 0.6) 0%, transparent 35%, transparent 65%, rgba(10, 22, 19, 0.85) 100%)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Warm Golden Store Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 30%, rgba(197, 168, 128, 0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top-Right Live Status Badge */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            padding: '6px 16px',
            borderRadius: '100px',
            background: 'rgba(10, 22, 19, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(197, 168, 128, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#C5A880',
              boxShadow: '0 0 8px #C5A880',
            }}
          />
          <span
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#F4F1EA',
              fontWeight: 600,
            }}
          >
            Flagship Retail Architecture
          </span>
        </div>
      </div>

      {/* ── 2. CENTERED LUXURY EDITORIAL TEXT & ACTIONS ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          maxWidth: '920px',
          width: '100%',
          padding: '0 24px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: textOpacity,
          transform: `translate3d(0, ${textTranslateY}px, 0) scale(${textScale})`,
          transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
          willChange: 'transform, opacity',
        }}
      >
        {/* Category Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.66rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            backgroundColor: 'rgba(10, 22, 19, 0.75)',
            backdropFilter: 'blur(12px)',
            color: '#C5A880',
            padding: '7px 18px',
            borderRadius: '100px',
            marginBottom: '22px',
            fontWeight: 600,
            border: '1px solid rgba(197, 168, 128, 0.35)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <span>✦</span>
          <span>Commercial &amp; Retail Design Specialists</span>
          <span>✦</span>
        </div>

        {/* Grand Headline */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: '#F4F1EA',
            marginBottom: '22px',
            letterSpacing: '-0.01em',
            textShadow: '0 4px 30px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)',
          }}
        >
          We build shops{' '}
          <span
            style={{
              color: '#C5A880',
              fontStyle: 'italic',
              fontWeight: 400,
              textShadow: '0 0 35px rgba(197, 168, 128, 0.45)',
            }}
          >
            that can sell.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p
          style={{
            fontSize: 'clamp(0.98rem, 1.8vw, 1.18rem)',
            lineHeight: 1.8,
            color: 'rgba(244, 241, 234, 0.88)',
            maxWidth: '680px',
            marginBottom: '38px',
            textShadow: '0 2px 14px rgba(0,0,0,0.8)',
            fontWeight: 300,
          }}
        >
          Merging traditional Kerala craftsmanship with modern retail science. We design
          commercial spaces optimized for customer flow, brand impact, and maximum sales conversion.
        </p>

        {/* Dual CTA Buttons (Centered) */}
        <div
          style={{
            display: 'flex',
            gap: '18px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#contact"
            style={{
              backgroundColor: '#1B3B36',
              color: '#F4F1EA',
              padding: '15px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.92rem',
              fontWeight: 600,
              boxShadow: '0 8px 30px rgba(27, 59, 54, 0.5), 0 0 0 1px rgba(197, 168, 128, 0.3)',
              transition: 'all 0.25s ease',
              letterSpacing: '0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#2D5A52';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(197, 168, 128, 0.35), 0 0 0 1px #C5A880';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#1B3B36';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(27, 59, 54, 0.5), 0 0 0 1px rgba(197, 168, 128, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Start Your Project</span>
            <span style={{ color: '#C5A880', fontSize: '1rem' }}>→</span>
          </a>
          <a
            href="#process"
            style={{
              backgroundColor: 'rgba(10, 22, 19, 0.65)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(197, 168, 128, 0.45)',
              color: '#F4F1EA',
              padding: '15px 32px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.92rem',
              fontWeight: 500,
              transition: 'all 0.25s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#F4F1EA';
              e.currentTarget.style.backgroundColor = 'rgba(27, 59, 54, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.45)';
              e.currentTarget.style.backgroundColor = 'rgba(10, 22, 19, 0.65)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Our Process
          </a>
        </div>

        {/* Bottom Kerala • Pan-India Execution Pill */}
        <div
          style={{
            marginTop: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.72rem',
            color: 'rgba(197, 168, 128, 0.9)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          <span>📍 Headquarters: 39/2475-B1, SUITE N130 LR Towers, SJRRA 104, South Janatha Road, Kochi 68202</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
