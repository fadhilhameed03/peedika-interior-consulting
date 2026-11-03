import React from 'react';

const stats = [
  { value: 'Pan-India', label: 'Execution Capability' },
  { value: 'ROI Focused', label: 'Layout Strategy' },
  { value: 'End-to-End', label: 'Turnkey Solutions' },
  { value: 'Heritage Rooted', label: 'Authentic Materials' },
];

const Stats = () => {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: '#1B3B36', color: '#F4F1EA' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-3xl md:text-4xl mb-1" style={{ color: '#C5A880' }}>
              {stat.value}
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(244,241,234,0.7)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

