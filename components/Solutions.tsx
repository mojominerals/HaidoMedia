
import React from 'react';
import { SOLUTIONS_DATA } from '../constants';
import Card from './ui/Card';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Actionable AI, Measurable ROI</h2>
          <p className="mt-4 text-lg text-off-white/70">
            Our solutions are engineered to solve your biggest marketing challenges, turning complex data into your most powerful asset.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((solution, index) => (
            <Card key={index} className="flex flex-col p-8 group">
              <div className="mb-4">
                <solution.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2 text-off-white">{solution.title}</h3>
              <p className="text-off-white/70 flex-grow mb-4">{solution.description}</p>
              <a href="#solutions" className="flex items-center text-sm font-bold text-accent group-hover:underline">
                Learn more <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;