import React, { useState } from 'react';
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

function App() {
  const [shutterDone, setShutterDone] = useState(false);

  return (
    <>
      {/* Animated shutter opening overlay */}
      <ShutterOverlay onComplete={() => setShutterDone(true)} />

      {/* Main page content */}
      <div
        style={{
          opacity: shutterDone ? 1 : 0,
          transition: 'opacity 0.5s ease',
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
    </>
  );
}

export default App;
