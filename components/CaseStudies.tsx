
import React, { useState, useCallback, useEffect } from 'react';
import { CASE_STUDIES_DATA } from '../constants';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? CASE_STUDIES_DATA.length - 1 : prevIndex - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === CASE_STUDIES_DATA.length - 1 ? 0 : prevIndex + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);
  
  const currentStudy = CASE_STUDIES_DATA[currentIndex];

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Proven Outcomes, Not Promises</h2>
          <p className="mt-4 text-lg text-off-white/70">
            We deliver quantifiable results for the world's most ambitious brands.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {CASE_STUDIES_DATA.map((study, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-charcoal/50 p-4 md:p-8 rounded-2xl">
                       <img
                          src={study.image}
                          alt={study.brand}
                          className="w-full h-full object-cover rounded-xl aspect-square"
                          loading="lazy"
                        />
                       <div className="flex flex-col justify-center text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2 text-off-white">{study.brand}</h3>
                        <p className="text-3xl lg:text-4xl font-bold font-heading text-accent mb-4">{study.outcome}</p>
                        <a href="#case-studies" className="self-center md:self-start inline-block font-bold text-accent border border-accent rounded-full px-6 py-2 hover:bg-accent hover:text-charcoal transition-colors">
                          Open case
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-charcoal/50 p-2 rounded-full hover:bg-accent hover:text-charcoal transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-charcoal/50 p-2 rounded-full hover:bg-accent hover:text-charcoal transition-colors"
            aria-label="Next case study"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;