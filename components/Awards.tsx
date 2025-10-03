
import React from 'react';
import { AWARDS_DATA } from '../constants';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 md:py-24 bg-graphite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold tracking-tighter">Industry Recognition</h2>
          <p className="mt-2 text-off-white/70">Acknowledged for driving transformative results.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {AWARDS_DATA.map((award) => (
            <div key={award.name} className="text-center p-6 border border-off-white/10 rounded-xl bg-charcoal/30">
              <p className="font-bold text-accent text-lg">{award.name}</p>
              <p className="text-sm text-off-white/60 mt-1">{award.source} - {award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
