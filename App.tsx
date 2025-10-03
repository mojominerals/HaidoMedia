
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Awards from './components/Awards';
import Insights from './components/Insights';
import GlobalFootprint from './components/GlobalFootprint';
import Footer from './components/Footer';
import Legal from './components/Legal';

const App: React.FC = () => {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          event.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          const header = document.querySelector('header');
          
          if (targetElement && header) {
            const headerHeight = header.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="bg-charcoal text-off-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <CaseStudies />
        <Methodology />
        <Awards />
        <Insights />
        <GlobalFootprint />
        <Legal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
