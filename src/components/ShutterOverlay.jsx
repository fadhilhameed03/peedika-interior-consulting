import React from 'react';

/**
 * ShutterOverlay — Realistic Kerala Commercial Store Roller Shutter.
 *
 * As the user scrolls:
 * - The shutter curtain rolls UP toward the top casing.
 * - The painted lettering, slats, and bottom rail all move up together.
 * - A warm golden light spills from beneath the bottom rail as it cracks open.
 * - Clicking the shutter or handle smoothly lifts it open.
 */
const ShutterOverlay = ({ progress, onOpenClick }) => {
  // progress: 0 (closed) -> 1 (fully open)
  // Translate shutter curtain up by 100%
  const translateY = -(progress * 100);

  // Bottom light spill intensity increases as the shutter begins to lift
  const lightSpillOpacity = progress > 0 && progress < 0.95
    ? Math.min(progress * 2.5, 0.8)
    : 0;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        pointerEvents: progress >= 1 ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* ── TOP SHUTTER HOOD / DRUM CASING ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '24px',
          zIndex: 60,
          background: 'linear-gradient(180deg, #091311 0%, #162a26 60%, #0c1815 100%)',
          borderBottom: '2px solid rgba(197, 168, 128, 0.35)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Rivets along the casing */}
        <div style={{ display: 'flex', gap: '32px', opacity: 0.4 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#C5A880',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.8)',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── LEFT & RIGHT GUIDE TRACKS ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '18px',
          zIndex: 58,
          background: 'linear-gradient(90deg, #070e0d 0%, #182e29 60%, #0a1412 100%)',
          borderRight: '1px solid rgba(197, 168, 128, 0.25)',
          boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.6)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '18px',
          zIndex: 58,
          background: 'linear-gradient(270deg, #070e0d 0%, #182e29 60%, #0a1412 100%)',
          borderLeft: '1px solid rgba(197, 168, 128, 0.25)',
          boxShadow: 'inset 2px 0 6px rgba(0,0,0,0.6)',
        }}
      />

      {/* ── THE ROLLING SHUTTER CURTAIN ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          transform: `translate3d(0, ${translateY}%, 0)`,
          willChange: 'transform',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e1f1c',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          cursor: progress < 0.2 ? 'pointer' : 'default',
        }}
        onClick={progress < 0.2 ? onOpenClick : undefined}
      >
        {/* Corrugated horizontal metal slats texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                180deg,
                #162a26 0px,
                #1e3833 4px,
                #294c45 8px,
                #19302b 16px,
                #0f1e1b 22px,
                #081210 28px,
                #162a26 32px
              )
            `,
            backgroundSize: '100% 32px',
            opacity: 0.95,
          }}
        />

        {/* Vertical slat lines for metal paneling */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 240px, rgba(0,0,0,0.2) 240px, rgba(0,0,0,0.2) 242px)',
            opacity: 0.6,
          }}
        />

        {/* Ambient metal sheen / lighting across the shutter */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 45%, rgba(197,168,128,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── SHUTTER BRANDING & CONTENT (painted onto the slats) ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            margin: 'auto',
            padding: '40px 24px',
            textAlign: 'center',
            maxWidth: '780px',
            userSelect: 'none',
          }}
        >
          {/* Top Kerala Heritage Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(10, 22, 19, 0.75)',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              marginBottom: '24px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span style={{ fontSize: '0.7rem' }}>🏛️</span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#C5A880',
                fontWeight: 600,
              }}
            >
              Rooted in Kerala • Executing Pan-India
            </span>
          </div>

          {/* Main Stenciled Brand Name */}
          <div style={{ position: 'relative', marginBottom: '8px' }}>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(3rem, 10vw, 6.5rem)',
                fontWeight: 700,
                color: '#F4F1EA',
                letterSpacing: '0.14em',
                lineHeight: 1,
                margin: 0,
                textShadow: '0 3px 20px rgba(0,0,0,0.8), 0 0 40px rgba(197,168,128,0.25)',
              }}
            >
              PEEDIKA
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.68rem, 2vw, 0.85rem)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#C5A880',
              fontWeight: 600,
              marginBottom: '20px',
            }}
          >
            Interior Consultants
          </p>

          {/* Decorative Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              margin: '0 auto 24px',
              maxWidth: '320px',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(197,168,128,0.5))' }} />
            <span style={{ color: '#C5A880', fontSize: '0.8rem' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(270deg, transparent, rgba(197,168,128,0.5))' }} />
          </div>

          {/* Core Philosophy Tagline */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.1rem, 3.2vw, 1.8rem)',
              color: 'rgba(244, 241, 234, 0.85)',
              fontStyle: 'italic',
              fontWeight: 400,
              marginBottom: '40px',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)',
            }}
          >
            "We build shops that can sell."
          </p>

          {/* Scroll cue / Click to open */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(7, 16, 14, 0.65)',
              border: '1px solid rgba(197, 168, 128, 0.25)',
              transition: 'all 0.3s ease',
            }}
          >
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C5A880',
                fontWeight: 600,
              }}
            >
              Scroll down to open store
            </span>
            {/* Animated Chevron Arrow */}
            <div
              style={{
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'bounceUpDown 1.8s ease-in-out infinite',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── HEAVY BOTTOM PULL RAIL (T-BAR / BOTTOM ANGLE) ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 15,
            width: '100%',
            height: '42px',
            background: 'linear-gradient(180deg, #1d3530 0%, #0e1c19 50%, #08110f 100%)',
            borderTop: '2px solid rgba(197, 168, 128, 0.55)',
            borderBottom: '3px solid #050b0a',
            boxShadow: '0 -4px 15px rgba(0,0,0,0.6), 0 8px 25px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
          }}
        >
          {/* Left Handle */}
          <div
            style={{
              width: '54px',
              height: '12px',
              borderRadius: '3px',
              background: 'linear-gradient(180deg, #C5A880 0%, #8c714c 60%, #5a472e 100%)',
              border: '1px solid #d9c3a3',
              boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}
          />

          {/* Center Lock / Hasp with "LIFT TO OPEN" */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '2px 16px',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '4px',
              border: '1px solid rgba(197,168,128,0.3)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#C5A880',
                boxShadow: '0 0 6px #C5A880',
              }}
            />
            <span
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C5A880',
                fontWeight: 700,
              }}
            >
              LIFT TO ENTER
            </span>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#C5A880',
                boxShadow: '0 0 6px #C5A880',
              }}
            />
          </div>

          {/* Right Handle */}
          <div
            style={{
              width: '54px',
              height: '12px',
              borderRadius: '3px',
              background: 'linear-gradient(180deg, #C5A880 0%, #8c714c 60%, #5a472e 100%)',
              border: '1px solid #d9c3a3',
              boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      </div>

      {/* ── GOLDEN LIGHT SPILL UNDERNEATH THE OPENING SHUTTER ── */}
      <div
        style={{
          position: 'absolute',
          left: '18px',
          right: '18px',
          top: `calc(${100 + translateY}% - 6px)`,
          height: '50px',
          background: 'linear-gradient(180deg, rgba(217, 195, 163, 0.45) 0%, rgba(27, 59, 54, 0.15) 50%, transparent 100%)',
          filter: 'blur(8px)',
          opacity: lightSpillOpacity,
          pointerEvents: 'none',
          zIndex: 48,
          transition: 'opacity 0.2s ease',
        }}
      />

      <style>{`
        @keyframes bounceUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
};

export default ShutterOverlay;
