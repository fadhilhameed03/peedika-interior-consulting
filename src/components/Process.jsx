import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understanding Client Requirement',
    desc: 'Deep dive into your brand vision, target audience, merchandising strategy, and commercial targets.',
  },
  {
    number: '02',
    title: 'Recce & Space Planning',
    desc: 'Site measurement audits, technical evaluations, zoning layouts, and customer traffic flow mapping.',
  },
  {
    number: '03',
    title: '2D & 3D Walkthrough',
    desc: 'Immersive 3D renderings and spatial visualizations so you can experience your store before execution.',
  },
  {
    number: '04',
    title: 'GFC Preparation',
    desc: 'Good For Construction (GFC) drawing packages complete with detailed electrical, HVAC, and civil specs.',
  },
  {
    number: '05',
    title: 'Material / Product Selection',
    desc: 'Curating commercial-grade durable finishes, artisanal woodwork samples, lighting, and display fixtures.',
  },
  {
    number: '06',
    title: 'Interior Execution',
    desc: 'Pan-India on-site management, quality supervision, vendor coordination, and strict timeline adherence.',
  },
  {
    number: '07',
    title: 'Facility & Maintenance Support',
    desc: 'Post-handover support, warranty management, and scheduled commercial maintenance guidance to keep your store pristine.',
    wide: true,
  },
];

const ProcessStep = ({ step }) => (
  <div
    className={`bg-white p-6 rounded-2xl border shadow-sm transition-all duration-300 group cursor-default
      ${step.wide ? 'lg:col-span-2' : ''}`}
    style={{ borderColor: 'rgba(17,41,37,0.1)' }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = '#1B3B36')}
    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(17,41,37,0.1)')}
  >
    <span className="text-xs uppercase font-bold tracking-wider" style={{ color: '#C5A880' }}>
      Step {step.number}
    </span>
    <h3 className="font-serif text-xl font-medium mt-2 mb-2" style={{ color: '#112925' }}>
      {step.title}
    </h3>
    <p className="text-xs leading-relaxed" style={{ color: 'rgba(17,41,37,0.7)' }}>
      {step.desc}
    </p>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="py-24 px-6" style={{ backgroundColor: '#F4F1EA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: '#1B3B36' }}>
            How We Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#112925' }}>
            The Peevika Execution Flowchart
          </h2>
          <p className="text-sm mt-2" style={{ color: 'rgba(17,41,37,0.7)' }}>
            A structured 7-step roadmap from initial concept to your store's grand opening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

