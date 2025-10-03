
import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-graphite/50 via-charcoal to-charcoal"></div>
         <div 
           className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,209,255,0.05)_25%,transparent_25%,transparent_50%,rgba(79,209,255,0.05)_50%,rgba(79,209,255,0.05)_75%,transparent_75%,transparent)] bg-[length:60px_60px] opacity-30 animate-background-pan"
           style={{ backgroundSize: '80px 80px' }}
          ></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter mb-4 text-off-white animate-fade-in-up">
          Connect Marketing with <span className="text-accent">Data & AI</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-off-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          We turn messy data into precise growth. Operationalize AI to scale personalization, media ROI, and customer experience greatness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Button href="#solutions" variant="primary">Explore Solutions</Button>
          <Button href="#case-studies" variant="secondary">See Case Studies</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
