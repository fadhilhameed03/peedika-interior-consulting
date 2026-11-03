import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', brand: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#112925', color: '#F4F1EA' }}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: '#C5A880' }}>
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Let's build a shop that can sell.
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: 'rgba(244,241,234,0.8)' }}>
            Ready to scale your retail footprint or launch a new brand store? Talk to our design
            consultants today.
          </p>
          <div className="space-y-2 text-sm" style={{ color: '#C5A880' }}>
            <p>📍 Headquarters: Kochi, Kerala</p>
            <p>🚀 Pan-India Execution Partnerships</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8 rounded-2xl shadow-xl" style={{ backgroundColor: '#F4F1EA', color: '#112925' }}>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-serif text-xl mb-2" style={{ color: '#112925' }}>Thank you!</h3>
              <p className="text-sm" style={{ color: 'rgba(17,41,37,0.7)' }}>
                We've received your inquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  style={{ backgroundColor: 'white', borderColor: 'rgba(17,41,37,0.2)' }}
                  onFocus={e => (e.target.style.borderColor = '#1B3B36')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(17,41,37,0.2)')}
                  placeholder="Rahul Menon"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-1">
                  Brand / Store Name
                </label>
                <input
                  type="text"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  style={{ backgroundColor: 'white', borderColor: 'rgba(17,41,37,0.2)' }}
                  onFocus={e => (e.target.style.borderColor = '#1B3B36')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(17,41,37,0.2)')}
                  placeholder="e.g. Earth & Loom"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-1">
                  Target City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  style={{ backgroundColor: 'white', borderColor: 'rgba(17,41,37,0.2)' }}
                  onFocus={e => (e.target.style.borderColor = '#1B3B36')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(17,41,37,0.2)')}
                  placeholder="Mumbai / Bengaluru / Kochi"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: '#1B3B36', color: '#F4F1EA' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2D5A52')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1B3B36')}
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

