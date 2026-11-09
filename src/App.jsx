import React, { useState, useEffect, useRef } from 'react';
import ShutterOverlay from './components/ShutterOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const entranceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!entranceRef.current) return;
      const rect = entranceRef.current.getBoundingClientRect();
      const scrollDistance = rect.height - window.innerHeight;
      if (scrollDistance <= 0) return;

      const current = -rect.top;
      const progress = Math.min(Math.max(current / scrollDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper to lift shutter and project store forward
  const handleOpenClick = () => {
    window.scrollTo({
      top: window.innerHeight * 1.3,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", position: 'relative', background: '#F4F1EA' }}>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/919562920796"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 99999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.12)';
          e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.7)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.5)';
        }}
      >
        {/* Official WhatsApp icon — pure crisp inline SVG vector */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="32"
          height="32"
          style={{ display: 'block' }}
        >
          <path
            fill="#ffffff"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      </a>
      {/* ── STICKY ENTRANCE: SHUTTER + STORE PICTURE FORWARD PROJECTION ── */}
      <section
        ref={entranceRef}
        style={{
          position: 'relative',
          height: '240vh', // Generous runway for shutter opening + store picture projecting to front
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* THE STORE INTERIOR (Hero + Navbar with store picture projecting from back to front) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              willChange: 'transform',
            }}
          >
            <Navbar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Hero scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* THE SHOP SHUTTER (Rolls up to the top as user scrolls) */}
          <ShutterOverlay
            progress={scrollProgress}
            onOpenClick={handleOpenClick}
          />
        </div>
      </section>

      {/* ── REST OF THE STORE WEBSITE (Seamlessly scrolls up after shutter opens) ── */}
      <main style={{ position: 'relative', zIndex: 30, backgroundColor: '#F4F1EA' }}>
        <Stats />
        <About />
        <Process />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
