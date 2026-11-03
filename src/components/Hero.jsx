import React from 'react';

const Hero = () => {
  return (
    <header className="py-20 md:py-32 px-6" style={{ backgroundColor: '#F4F1EA' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span
            className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6 font-semibold"
            style={{ backgroundColor: 'rgba(27,59,54,0.1)', color: '#112925' }}
          >
            Commercial &amp; Retail Design Specialists
          </span>

          <h1
            className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6"
            style={{ color: '#112925' }}
          >
            We build shops{' '}
            <span className="italic" style={{ color: '#1B3B36' }}>
              that can sell.
            </span>
          </h1>

          <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'rgba(17,41,37,0.8)' }}>
            Merging traditional Kerala craftsmanship with modern retail science. We design commercial
            spaces optimized for customer flow, brand impact, and maximum sales conversion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-center font-medium transition-colors shadow-lg"
              style={{ backgroundColor: '#1B3B36', color: '#F4F1EA', boxShadow: '0 10px 30px rgba(27,59,54,0.15)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2D5A52')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1B3B36')}
            >
              Start Your Project
            </a>
            <a
              href="#process"
              className="px-8 py-4 rounded-full text-center font-medium transition-colors border"
              style={{ borderColor: 'rgba(17,41,37,0.3)', color: '#112925' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#112925')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(17,41,37,0.3)')}
            >
              Explore Our Process
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Retail Interior Design"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative badge */}
          <div
            className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-xl text-sm font-medium"
            style={{ backgroundColor: '#112925', color: '#F4F1EA' }}
          >
            🏆 Pan-India Execution
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

