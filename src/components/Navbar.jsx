import React, { useState, useEffect } from 'react';

const Navbar = ({ visible }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top info strip */}
      <div
        style={{
          backgroundColor: '#0e1f1c',
          color: 'rgba(244,241,234,0.65)',
          fontSize: '0.72rem',
          padding: '8px 24px',
          letterSpacing: '0.02em',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>📍 Rooted in Kerala &nbsp;·&nbsp; Executing Pan-India</span>
          <a
            href="#contact"
            style={{ color: '#C5A880', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#F4F1EA'}
            onMouseLeave={e => e.target.style.color = '#C5A880'}
          >
            hello@peedika.com
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 500,
          backgroundColor: scrolled ? 'rgba(244,241,234,0.97)' : 'rgba(244,241,234,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(17,41,37,0.12)' : 'rgba(17,41,37,0.06)'}`,
          boxShadow: scrolled ? '0 2px 24px rgba(14,31,28,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '76px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', lineHeight: 1 }}>
            <div
              className="font-serif"
              style={{ fontSize: '1.6rem', fontWeight: 600, color: '#0e1f1c', letterSpacing: '0.06em' }}
            >
              PEEDIKA
            </div>
            <div
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#1B3B36',
                fontWeight: 500,
                marginTop: '1px',
              }}
            >
              Interior Consultants
            </div>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {['#about', '#process', '#services', '#portfolio'].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  color: '#0e1f1c',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  textTransform: 'capitalize',
                }}
                onMouseEnter={e => e.target.style.color = '#2D5A52'}
                onMouseLeave={e => e.target.style.color = '#0e1f1c'}
              >
                {href === '#process' ? 'Our Process' : href.replace('#', '')}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                backgroundColor: '#1B3B36',
                color: '#F4F1EA',
                padding: '10px 22px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.83rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'background-color 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 12px rgba(27,59,54,0.2)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D5A52'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,59,54,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1B3B36'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(27,59,54,0.2)'; }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-hamburger"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <div key={i} style={{ width: '22px', height: '2px', backgroundColor: '#0e1f1c', borderRadius: '2px' }} />
            ))}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div style={{
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '1px solid rgba(17,41,37,0.08)',
          }}>
            {['#about', '#process', '#services', '#portfolio', '#contact'].map(href => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{ color: '#0e1f1c', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
              >
                {href === '#process' ? 'Our Process' : href.replace('#', '').replace(/^\w/, c => c.toUpperCase())}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
