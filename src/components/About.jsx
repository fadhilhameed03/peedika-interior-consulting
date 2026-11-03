import React from 'react';

const About = () => (
  <section
    id="about"
    style={{
      padding: 'clamp(80px, 10vw, 120px) 24px',
      backgroundColor: '#ffffff',
    }}
  >
    <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="about-grid">
      {/* Left — label + heading */}
      <div className="reveal">
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#1B3B36',
            fontWeight: 600,
            display: 'block',
            marginBottom: '20px',
          }}
        >
          Who We Are
        </span>
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#0e1f1c',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            maxWidth: '500px',
          }}
        >
          Translating heritage roots into modern commercial success.
        </h2>
      </div>

      {/* Right — body text */}
      <div className="reveal reveal-delay-2">
        {/* Decorative quote mark */}
        <div
          className="font-serif"
          style={{
            fontSize: '6rem',
            lineHeight: 0.6,
            color: 'rgba(27,59,54,0.08)',
            marginBottom: '24px',
            fontWeight: 600,
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.85,
            color: 'rgba(14,31,28,0.72)',
            marginBottom: '24px',
          }}
        >
          In traditional Kerala trade, a <em style={{ color: '#1B3B36', fontStyle: 'italic' }}>Peevika</em> was
          a dynamic marketplace built with honesty, solid craftsmanship, and community connection.
          At Peevika Interior Consultants, we channel that exact ethos into contemporary retail
          spaces across India.
        </p>
        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.85,
            color: 'rgba(14,31,28,0.72)',
          }}
        >
          We believe a great store shouldn't just look attractive in photographs — it must function
          like a machine, guiding consumer behavior naturally from the storefront to the cash counter.
        </p>

        <div
          style={{
            marginTop: '36px',
            padding: '20px 24px',
            borderLeft: '3px solid #C5A880',
            backgroundColor: 'rgba(197,168,128,0.07)',
            borderRadius: '0 8px 8px 0',
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: '1rem',
              fontStyle: 'italic',
              color: '#0e1f1c',
              lineHeight: 1.6,
            }}
          >
            "A store that sells is not designed by accident — it is engineered with purpose."
          </p>
        </div>
      </div>
    </div>

    <style>{`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: start;
      }
      @media (max-width: 768px) {
        .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
    `}</style>
  </section>
);

export default About;
