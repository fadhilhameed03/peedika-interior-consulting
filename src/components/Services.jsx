import React from 'react';

const services = [
  {
    num: '01',
    title: 'Retail Strategy & Zoning',
    desc: 'Strategic floor planning, customer traffic flow analysis, and merchandise positioning designed to eliminate dead zones and boost sales conversion.',
  },
  {
    num: '02',
    title: 'Experiential Interior Design',
    desc: '3D conceptualization, custom millwork, mood boards, and lighting setups engineered to elevate your brand\'s retail identity.',
  },
  {
    num: '03',
    title: 'Pan-India Turnkey Execution',
    desc: 'End-to-end execution management from material sourcing in Kerala to compliance and site delivery anywhere in India.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: '#1B3B36' }}>
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#112925' }}>
            Comprehensive Retail Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.num}
              className="p-8 rounded-2xl border shadow-sm"
              style={{ backgroundColor: '#F4F1EA', borderColor: 'rgba(17,41,37,0.1)' }}
            >
              <span className="font-serif text-3xl block mb-4" style={{ color: '#1B3B36' }}>
                {s.num}
              </span>
              <h3 className="font-serif text-xl font-medium mb-3" style={{ color: '#112925' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(17,41,37,0.7)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

