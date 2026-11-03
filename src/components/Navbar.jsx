import React, { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="text-xs py-2 px-6" style={{ backgroundColor: '#112925', color: 'rgba(244,241,234,0.7)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>📍 Rooted in Kerala • Executing Pan-India</span>
          <a href="#contact" className="hover:text-white transition-colors">
            Inquiries: hello@peevika.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: 'rgba(244,241,234,0.95)', borderColor: 'rgba(17,41,37,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-semibold tracking-wide" style={{ color: '#112925' }}>
              PEEVIKA
            </span>
            <span className="text-xs font-sans tracking-widest uppercase" style={{ color: '#1B3B36' }}>
              Interior Consultants
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium" style={{ color: '#112925' }}>
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#process" className="hover:opacity-70 transition-opacity">Our Process</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ backgroundColor: '#1B3B36', color: '#F4F1EA' }}
              onMouseEnter={e => e.target.style.backgroundColor = '#2D5A52'}
              onMouseLeave={e => e.target.style.backgroundColor = '#1B3B36'}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" style={{ color: '#112925' }} />
            <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: '#112925' }} />
            <div className="w-6 h-0.5" style={{ backgroundColor: '#112925' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-4 flex flex-col space-y-4 text-sm font-medium"
            style={{ color: '#112925' }}
          >
            {['#about', '#process', '#services', '#portfolio'].map((href) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-70 transition-opacity capitalize"
              >
                {href.replace('#', '')}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2.5 rounded-full text-center"
              style={{ backgroundColor: '#1B3B36', color: '#F4F1EA' }}
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
