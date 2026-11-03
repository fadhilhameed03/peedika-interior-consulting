import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest font-semibold mb-3 block"
          style={{ color: '#1B3B36' }}
        >
          Who We Are
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ color: '#112925' }}>
          Translating heritage roots into modern commercial success.
        </h2>
        <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(17,41,37,0.8)' }}>
          In traditional Kerala trade, a <em>Peevika</em> was a dynamic space built with honesty, solid
          craftsmanship, and community connection. At Peevika Interior Consultants, we channel that
          exact ethos into contemporary retail spaces across India.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: 'rgba(17,41,37,0.8)' }}>
          We believe a great store shouldn't just look attractive in photographs — it must function
          like a machine, guiding consumer behavior naturally from the storefront to the cash counter.
        </p>
      </div>
    </section>
  );
};

export default About;

