import React from 'react';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1000&q=80',
    alt: 'Apparel Boutique',
    category: 'Apparel & Lifestyle',
    title: 'Minimalist Fashion Flagship, Bengaluru',
  },
  {
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    alt: 'Specialty Cafe',
    category: 'Hospitality & Café',
    title: 'Artisanal Coffee House, Kochi',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6" style={{ backgroundColor: '#F4F1EA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold mb-3 block" style={{ color: '#1B3B36' }}>
            Our Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#112925' }}>
            Spaces Designed to Perform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              style={{ aspectRatio: '16/10', backgroundColor: 'rgba(17,41,37,0.1)' }}
            >
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-8"
                style={{ background: 'linear-gradient(to top, rgba(17,41,37,0.8), transparent)' }}
              >
                <div style={{ color: '#F4F1EA' }}>
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1" style={{ color: '#C5A880' }}>
                    {p.category}
                  </span>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

