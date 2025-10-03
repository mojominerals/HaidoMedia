
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Logos: React.FC = () => {
  return (
    <section className="py-12 bg-graphite">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-bold text-off-white/50 tracking-widest uppercase mb-8">
          Chosen by category leaders to give customers exactly what they came for
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
          {CLIENT_LOGOS.map((logo) => (
            <span key={logo} className="text-lg font-medium text-off-white/40 grayscale transition hover:grayscale-0 hover:text-off-white/80">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
