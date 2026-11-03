import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', brand: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
        background: 'linear-gradient(160deg, #0e1f1c 0%, #1B3B36 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="contact-grid">
        {/* Left */}
        <div className="reveal">
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C5A880', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Get In Touch
          </span>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#F4F1EA', lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.01em' }}
          >
            Let's build a shop<br />that can sell.
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(244,241,234,0.65)', marginBottom: '40px' }}>
            Ready to scale your retail footprint or launch a new brand store?
            Talk to our design consultants today.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '📍', text: 'Headquarters: Kochi, Kerala' },
              { icon: '🚀', text: 'Pan-India Execution Partnerships' },
              { icon: '✉️', text: 'hello@peedika.com' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.9rem', color: '#C5A880', fontWeight: 400 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal reveal-delay-2">
          {submitted ? (
            <div
              style={{
                backgroundColor: 'rgba(244,241,234,0.06)',
                border: '1px solid rgba(197,168,128,0.2)',
                borderRadius: '24px',
                padding: '60px 40px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#F4F1EA', marginBottom: '12px' }}>Thank you!</h3>
              <p style={{ color: 'rgba(244,241,234,0.6)', lineHeight: 1.7 }}>We've received your inquiry and will be in touch within 24 hours.</p>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#F4F1EA',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#0e1f1c', marginBottom: '28px', fontWeight: 500 }}>
                Start your project
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Rahul Menon' },
                  { name: 'brand', label: 'Brand / Store Name', placeholder: 'e.g. Earth & Loom' },
                  { name: 'city', label: 'Target City', placeholder: 'Mumbai / Bengaluru / Kochi' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, color: '#0e1f1c', marginBottom: '8px' }}>
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      required
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid rgba(14,31,28,0.15)',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        backgroundColor: '#ffffff',
                        color: '#0e1f1c',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={e => e.target.style.borderColor = '#1B3B36'}
                      onBlur={e => e.target.style.borderColor = 'rgba(14,31,28,0.15)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, color: '#0e1f1c', marginBottom: '8px' }}>
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1.5px solid rgba(14,31,28,0.15)',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      color: '#0e1f1c',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={e => e.target.style.borderColor = '#1B3B36'}
                    onBlur={e => e.target.style.borderColor = 'rgba(14,31,28,0.15)'}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#1B3B36',
                    color: '#F4F1EA',
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    marginTop: '4px',
                    transition: 'background-color 0.2s, box-shadow 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D5A52'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,59,54,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1B3B36'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
};

export default Contact;
