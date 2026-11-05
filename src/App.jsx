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
