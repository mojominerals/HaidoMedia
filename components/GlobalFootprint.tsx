
import React from 'react';
import { LOCATIONS_DATA } from '../constants';
import Card from './ui/Card';

const GlobalFootprint: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Our Global Footprint</h2>
          <p className="mt-4 text-lg text-off-white/70">
            Operating at the intersection of global scale and local expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {LOCATIONS_DATA.map((location) => (
            <Card key={location.city} className="text-center p-8">
              <h3 className="text-3xl font-bold font-heading mb-2">{location.city}</h3>
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-2 py-1 rounded-full mb-4">
                {location.timezone}
              </span>
              <a href={`mailto:${location.email}`} className="block text-off-white/80 hover:text-accent transition-colors">
                {location.email}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
