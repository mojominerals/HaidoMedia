
import React from 'react';
import { INSIGHTS_DATA } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Insights from the Forefront</h2>
          <p className="mt-4 text-lg text-off-white/70">
            Our latest thinking on AI, data, and the future of customer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((insight, index) => (
            <Card key={index} className="flex flex-col p-8">
              <p className="text-sm font-bold text-accent tracking-widest uppercase mb-2">{insight.category}</p>
              <h3 className="text-xl font-bold font-heading mb-3 flex-grow text-off-white">{insight.title}</h3>
              <p className="text-off-white/70 mb-6">{insight.abstract}</p>
              <a href="#insights" className="font-bold text-accent hover:underline">Read more</a>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button href="#insights" variant="secondary">Explore All Insights</Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;