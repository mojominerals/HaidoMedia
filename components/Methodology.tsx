
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Methodology: React.FC = () => {
  const steps = ['Discover', 'Design', 'Activate', 'Optimize'];

  return (
    <section id="about" className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center items-center h-80 lg:h-96">
          <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent/10 border-2 border-accent/50 flex items-center justify-center -translate-x-12 -translate-y-12">
            <span className="font-bold font-heading">Business</span>
          </div>
          <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent/10 border-2 border-accent/50 flex items-center justify-center translate-x-12 -translate-y-12">
            <span className="font-bold font-heading">Marketing</span>
          </div>
          <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent/10 border-2 border-accent/50 flex items-center justify-center translate-y-12">
            <span className="font-bold font-heading">Data & Tech</span>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Integrative AI</h2>
          <p className="mt-4 mb-8 text-lg text-off-white/70">
            Our approach unifies your business objectives, marketing strategy, and technology stack. We embed AI at the core, creating a flywheel of continuous learning and optimization that drives sustainable growth and competitive advantage.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="bg-graphite py-2 px-4 rounded-md">
                  <span className="font-bold">{step}</span>
                </div>
                {index < steps.length - 1 && <ArrowRightIcon className="w-6 h-6 text-accent/50" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
