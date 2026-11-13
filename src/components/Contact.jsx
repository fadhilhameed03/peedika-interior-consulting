import React, { useState } from 'react';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Google Apps Script Web App URL — logs every lead to Google Sheets
const SHEET_LOGGER_URL =
  'https://script.google.com/macros/s/AKfycbx4HIiSjlawL8wQd_o_nWBVIeej-kUhlzFzfPSxM23NOZ6gweIWZ5GwT1rzWoaLMiSW0w/exec';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate mandatory fields (Project Details / message is optional)
    const errors = {};
    if (!form.name.trim()) errors.name = 'Please enter your name';
    if (!form.brand.trim()) errors.brand = 'Please enter your brand or store name';
    if (!form.email.trim()) {
      errors.email = 'Please enter your email ID';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    }
    if (!form.city.trim()) errors.city = 'Please enter your target city';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please fill in all required fields marked with * before submitting.');
      return;
    }

    setFieldErrors({});
    setLoading(true);

    const { SERVICE_ID, TEMPLATE_ID_ADMIN, TEMPLATE_ID_CLIENT, PUBLIC_KEY } = EMAILJS_CONFIG;
    const isConfigured =
      SERVICE_ID &&
      SERVICE_ID !== 'YOUR_SERVICE_ID' &&
      TEMPLATE_ID_ADMIN &&
      TEMPLATE_ID_ADMIN !== 'YOUR_TEMPLATE_ID_ADMIN' &&
      PUBLIC_KEY &&
      PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
      // In development / before keys are entered, simulate a graceful submission
      console.warn(
        '⚠️ EmailJS is not yet configured with your actual credentials. Please update src/config/emailjs.js or .env.'
      );
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      // 1. Email to YOU (the business owner / admin)
      const adminPayload = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID_ADMIN,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: form.name,
          brand_name: form.brand,
          from_email: form.email,
          phone_number: form.phone,
          target_city: form.city,
          message: form.message || 'No additional message provided',
          reply_to: form.email,
        },
      };

      const sendAdmin = fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminPayload),
      });

      const promises = [sendAdmin];

      // 2. Auto-reply email to the CUSTOMER (if a client template is configured)
      const hasClientTemplate =
        TEMPLATE_ID_CLIENT && TEMPLATE_ID_CLIENT !== 'YOUR_TEMPLATE_ID_CLIENT';

      if (hasClientTemplate) {
        const clientPayload = {
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID_CLIENT,
          user_id: PUBLIC_KEY,
          template_params: {
            to_name: form.name,
            to_email: form.email,
            brand_name: form.brand,
            target_city: form.city,
          },
        };

        const sendClient = fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(clientPayload),
        });

        promises.push(sendClient);
      }

      const results = await Promise.all(promises);
      const errors = [];

      for (let i = 0; i < results.length; i++) {
        const res = results[i];
        if (!res.ok) {
          const text = await res.text();
          const target = i === 0 ? 'Admin Alert' : 'Customer Auto-reply';
          console.error(`EmailJS [${target}] Failed (${res.status}):`, text);
          errors.push(`${target}: ${text || res.statusText}`);
        }
      }

      if (errors.length > 0) {
        throw new Error(errors.join(' | '));
      }

      // 3. Log lead to Google Sheets via GET request (works with no-cors)
      try {
        const params = new URLSearchParams({
          from_name:    form.name,
          from_email:   form.email,
          phone_number: form.phone,
          brand_name:   form.brand,
          target_city:  form.city,
          message:      form.message || '',
        });
        await fetch(`${SHEET_LOGGER_URL}?${params.toString()}`, {
          method: 'GET',
          mode: 'no-cors',
        });
        console.log('✅ Lead logged to Google Sheets');
      } catch (sheetErr) {
        console.warn('⚠️ Google Sheet logging failed (non-critical):', sheetErr);
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Email submission error:', err);
      setLoading(false);
      setErrorMessage(
        err.message || 'There was an issue sending your message. Please reach out to us directly at admin@peedikaconsultants.com.'
      );
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      brand: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    });
    setSubmitted(false);
    setErrorMessage('');
    setFieldErrors({});
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
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="contact-grid"
      >
        {/* Left Column: Business Details */}
        <div className="reveal">
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#C5A880',
              fontWeight: 600,
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Get In Touch
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#F4F1EA',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            Let's build a shop<br />that can sell.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(244,241,234,0.65)',
              marginBottom: '40px',
            }}
          >
            Ready to scale your retail footprint or launch a new brand store?
            Talk to our design consultants today.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '📍', title: 'Headquarters', text: '39/2475-B1, SUITE N130 LR Towers, SJRRA 104, South Janatha Road, Kochi 68202', href: null },
              { icon: '✉️', title: 'Direct Inquiries', text: 'admin@peedikaconsultants.com', href: 'mailto:admin@peedikaconsultants.com' },
              { icon: '💬', title: 'WhatsApp', text: '+91 95629 20796', href: 'https://wa.me/919562920796' },
              { icon: '🚀', title: 'Turnkey Delivery', text: 'Space Planning • 3D Walkthroughs • GFC Drawings', href: null },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(244,241,234,0.5)', fontWeight: 600 }}>
                    {item.title}
                  </span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontSize: '0.92rem', color: '#C5A880', fontWeight: 400, textDecoration: 'none' }}
                      onMouseEnter={e => e.target.style.color = '#F4F1EA'}
                      onMouseLeave={e => e.target.style.color = '#C5A880'}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.92rem', color: '#C5A880', fontWeight: 400 }}>{item.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="reveal reveal-delay-2">
          {submitted ? (
            <div
              style={{
                backgroundColor: 'rgba(244,241,234,0.06)',
                border: '1px solid rgba(197,168,128,0.25)',
                borderRadius: '24px',
                padding: '60px 40px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: '3.2rem', marginBottom: '18px' }}>🎉</div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#F4F1EA', marginBottom: '12px' }}>
                Inquiry Received!
              </h3>
              <p style={{ color: 'rgba(244,241,234,0.75)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 20px' }}>
                Thank you, <strong>{form.name}</strong>. We have received your project details for{' '}
                <strong>{form.brand || 'your store'}</strong> in <strong>{form.city}</strong>.
              </p>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(197,168,128,0.12)',
                  border: '1px solid rgba(197,168,128,0.3)',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  color: '#C5A880',
                  marginBottom: '28px',
                }}
              >
                ✉️ Confirmation sent to {form.email}
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    backgroundColor: '#1B3B36',
                    color: '#F4F1EA',
                    border: '1px solid rgba(197,168,128,0.3)',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2D5A52')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1B3B36')}
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: '#F4F1EA',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#1B3B36',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Start The Conversation
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#0e1f1c', fontWeight: 600 }}>
                  Tell us about your store
                </h3>
              </div>

              {errorMessage && (
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: 'rgba(194, 65, 12, 0.1)',
                    border: '1px solid rgba(194, 65, 12, 0.3)',
                    borderRadius: '10px',
                    color: '#9a3412',
                    fontSize: '0.82rem',
                    marginBottom: '16px',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Rahul Menon', type: 'text', required: true },
                  { name: 'brand', label: 'Brand / Store Name', placeholder: 'e.g. Earth & Loom', type: 'text', required: true },
                  { name: 'email', label: 'Email ID (for confirmation)', placeholder: 'rahul@example.com', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel', required: true },
                  { name: 'city', label: 'Target City', placeholder: 'Mumbai / Bengaluru / Kochi', type: 'text', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: '#0e1f1c',
                        marginBottom: '6px',
                      }}
                    >
                      {field.label} {field.required && <span style={{ color: '#dc2626' }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={(e) => {
                        setForm({ ...form, [e.target.name]: e.target.value });
                        if (fieldErrors[e.target.name]) {
                          setFieldErrors({ ...fieldErrors, [e.target.name]: '' });
                        }
                      }}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        border: fieldErrors[field.name]
                          ? '1.5px solid #dc2626'
                          : '1.5px solid rgba(14,31,28,0.15)',
                        backgroundColor: fieldErrors[field.name] ? '#fff5f5' : '#ffffff',
                        borderRadius: '10px',
                        fontSize: '0.88rem',
                        color: '#0e1f1c',
                        outline: 'none',
                        transition: 'border-color 0.2s, background-color 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = fieldErrors[field.name] ? '#dc2626' : '#1B3B36')}
                      onBlur={(e) => (e.target.style.borderColor = fieldErrors[field.name] ? '#dc2626' : 'rgba(14,31,28,0.15)')}
                    />
                    {fieldErrors[field.name] && (
                      <span
                        style={{
                          display: 'block',
                          color: '#dc2626',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          marginTop: '4px',
                        }}
                      >
                        {fieldErrors[field.name]}
                      </span>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: '#0e1f1c',
                      marginBottom: '6px',
                    }}
                  >
                    Project Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Approximate sq. ft., target opening timeline, retail category..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      border: '1.5px solid rgba(14,31,28,0.15)',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      backgroundColor: '#ffffff',
                      color: '#0e1f1c',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#1B3B36')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(14,31,28,0.15)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#1B3B36',
                    color: '#F4F1EA',
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginTop: '6px',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: loading ? 0.75 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = '#2D5A52';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(27,59,54,0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B3B36';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid rgba(244,241,234,0.3)',
                          borderTopColor: '#F4F1EA',
                          borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.8s linear infinite',
                        }}
                      />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
