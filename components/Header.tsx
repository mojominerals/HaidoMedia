import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-heading font-bold tracking-tighter">
          Quantum<span className="text-accent">Haido</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-off-white/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-graphite absolute top-full left-0 right-0">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-off-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;