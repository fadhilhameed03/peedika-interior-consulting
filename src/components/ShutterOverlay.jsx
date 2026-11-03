import React, { useEffect, useRef } from 'react';

/**
 * ShutterOverlay — a scroll-driven shop shutter.
 * As the user scrolls through the "shutter zone" (first 100vh of document),
 * the shutter panel translates upward, revealing the site behind it.
 */
const ShutterOverlay = ({ scrollProgress }) => {
  // scrollProgress: 0 = fully closed, 1 = fully open
  const translateY = `-${scrollProgress * 100}vh`;
  const opacity = scrollProgress >= 1 ? 0 : 1;
  const pointerEvents = scrollProgress >= 1 ? 'none' : 'all';

  const SLAT_COUNT = 20;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9000,
        transform: `translateY(${translateY})`,
        opacity,
        pointerEvents,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
    >
      {/* Shutter body */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #0a1614 0%, #0e201c 40%, #112925 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Horizontal slat lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 36px,
                rgba(255,255,255,0.04) 36px,
                rgba(255,255,255,0.04) 37px,
                rgba(0,0,0,0.25) 37px,
                rgba(0,0,0,0.25) 40px,
                rgba(255,255,255,0.02) 40px,
                rgba(255,255,255,0.02) 41px,
                transparent 41px,
                transparent 44px
              )
            `,
          }}
        />

        {/* Vertical guide tracks */}
        <div
          style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: '12px',
            width: '8px',
            background: 'linear-gradient(90deg, #0a1614, #1a3530, #0a1614)',
            borderRight: '1px solid rgba(197,168,128,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0, bottom: 0,
            right: '12px',
            width: '8px',
            background: 'linear-gradient(90deg, #0a1614, #1a3530, #0a1614)',
            borderLeft: '1px solid rgba(197,168,128,0.15)',
          }}
        />

        {/* Subtle side shadows */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Center content */}
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 24px' }}>
          {/* Logo */}
          <div style={{ marginBottom: '32px' }}>
            <div
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 600,
                color: '#F4F1EA',
                letterSpacing: '0.12em',
                lineHeight: 1,
                textShadow: '0 2px 40px rgba(197,168,128,0.2)',
              }}
            >
              PEEDIKA
            </div>
            <div
              style={{
                fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#C5A880',
                marginTop: '6px',
                fontWeight: 500,
              }}
            >
              Interior Consultants
            </div>
          </div>

          {/* Tagline */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: 'rgba(244,241,234,0.55)',
              fontStyle: 'italic',
              marginBottom: '56px',
              fontWeight: 400,
            }}
          >
            We build shops that can sell.
          </div>

          {/* Scroll cue */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(197,168,128,0.7)',
                fontWeight: 500,
              }}
            >
              Scroll to open
            </span>
            {/* Animated arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '18px',
                    height: '2px',
                    background: `rgba(197,168,128,${0.3 + i * 0.25})`,
                    transform: 'rotate(0deg)',
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    animation: `pulse-arrow 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — the shutter stopper rail */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '18px',
            background: 'linear-gradient(180deg, #0a1614 0%, #1f3d38 50%, #0d1e1b 100%)',
            borderTop: '2px solid rgba(197,168,128,0.3)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
          }}
        />

        {/* Progress indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '18px',
            left: 0,
            height: '3px',
            width: `${scrollProgress * 100}%`,
            background: 'linear-gradient(90deg, #C5A880, #D9C3A3)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-arrow {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
};

export default ShutterOverlay;
