import React, { useState, useEffect, useCallback } from 'react';
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

// How many px of scroll to fully lift the shutter (== 1 viewport height)
const SHUTTER_SCROLL_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 700;

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // scrollProgress: 0 = shutter fully closed, 1 = shutter fully open
  const scrollProgress = Math.min(scrollY / SHUTTER_SCROLL_HEIGHT, 1);
  const shutterOpen = scrollProgress >= 1;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Scroll-driven shutter ── */}
      <ShutterOverlay scrollProgress={scrollProgress} />

      {/*
        Spacer: occupies the scroll "zone" that drives the shutter.
        The shutter is fixed, so this just creates scroll distance.
        Once scrolled past, the site content is visible.
      */}
      <div
        style={{
          height: '100vh',
          // Invisible — just creates the scroll room
          pointerEvents: shutterOpen ? 'none' : 'all',
        }}
        aria-hidden="true"
      />

      {/* ── Site content (always rendered, revealed as shutter lifts) ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          // Sticky to top so it's always behind the shutter until revealed
          marginTop: '-100vh',
          // Lock body scroll hint
          minHeight: '100vh',
        }}
      >
        {/* Shutter is still covering — blur site slightly for depth effect */}
        <div
          style={{
            filter: shutterOpen ? 'none' : `blur(${(1 - scrollProgress) * 6}px)`,
            transform: `scale(${0.97 + scrollProgress * 0.03})`,
            transition: shutterOpen ? 'filter 0.3s ease, transform 0.3s ease' : 'none',
            transformOrigin: 'top center',
          }}
        >
          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Process />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
