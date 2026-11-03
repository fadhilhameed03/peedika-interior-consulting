import React from 'react';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Apparel Boutique',
    category: 'Apparel & Lifestyle',
    title: 'Minimalist Fashion Flagship, Bengaluru',
    size: 'large',
  },
  {
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    alt: 'Specialty Café',
    category: 'Hospitality & Café',
    title: 'Artisanal Coffee House, Kochi',
    size: 'small',
  },
  {
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    alt: 'Jewellery Store',
    category: 'Luxury Retail',
    title: 'Heritage Jewellery Studio, Thrissur',
    size: 'small',
  },
];

const Portfolio = () => (
  <section id="portfolio" style={{ padding: 'clamp(80px, 10vw, 120px) 24px', backgroundColor: '#F4F1EA' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#1B3B36', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
            Our Work
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#0e1f1c', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            Spaces Designed<br />to Perform
          </h2>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'rgba(14,31,28,0.55)', maxWidth: '280px', lineHeight: 1.65 }}>
          Every project is a careful balance of aesthetics, function, and commercial intelligence.
        </p>
      </div>

      {/* Bento-style grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gridTemplateRows: '360px 280px',
          gap: '16px',
        }}
        className="portfolio-grid"
      >
        {/* Large item */}
        <div
          className="reveal group-card"
          style={{
            gridRow: '1 / 3',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <img
            src={projects[0].img}
            alt={projects[0].alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,31,28,0.85) 0%, rgba(14,31,28,0.15) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C5A880', fontWeight: 600 }}>{projects[0].category}</span>
            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#F4F1EA', marginTop: '6px', fontWeight: 500, lineHeight: 1.25 }}>{projects[0].title}</h3>
          </div>
        </div>

        {/* Small items */}
        {projects.slice(1).map((p, i) => (
          <div
            key={p.title}
            className={`reveal reveal-delay-${i + 2}`}
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <img
              src={p.img}
              alt={p.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,31,28,0.8) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C5A880', fontWeight: 600 }}>{p.category}</span>
              <h3 className="font-serif" style={{ fontSize: '1.1rem', color: '#F4F1EA', marginTop: '4px', fontWeight: 500 }}>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) {
        .portfolio-grid {
          grid-template-columns: 1fr !important;
          grid-template-rows: 300px 220px 220px !important;
        }
        .portfolio-grid > div:first-child { grid-row: auto !important; }
      }
    `}</style>
  </section>
);

export default Portfolio;
