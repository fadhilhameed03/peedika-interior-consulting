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
        {/* Clean WhatsApp icon — white phone bubble on transparent, button bg is green */}
        <img
          src="/whatsapp.svg"
          alt="WhatsApp"
          width="30"
          height="30"
          style={{ display: 'block' }}
        />
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
