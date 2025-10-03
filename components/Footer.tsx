import React from 'react';

const Footer: React.FC = () => {
  const footerLinkSections = [
    {
      title: 'Services',
      links: [
        { name: 'Audience Intelligence', href: '#solutions' },
        { name: 'Media ROI', href: '#solutions' },
        { name: 'Content Automation', href: '#solutions' },
        { name: 'Personalization', href: '#solutions' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'FMCG', href: '#case-studies' },
        { name: 'Healthcare', href: '#case-studies' },
        { name: 'QSR', href: '#case-studies' },
        { name: 'CPG & Retail', href: '#case-studies' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Settings', href: '#cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-graphite border-t border-off-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-1">
             <h3 className="text-xl font-heading font-bold tracking-tighter mb-4">
               Quantum<span className="text-accent">Haido</span>
            </h3>
            <p className="text-off-white/60 text-sm">Connect Marketing with Data & AI.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 lg:col-span-3">
            {footerLinkSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-off-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-off-white/60 hover:text-accent transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-off-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex-1 w-full">
                     <h4 className="font-bold text-off-white mb-2">Subscribe to our newsletter</h4>
                     <form className="flex gap-2">
                        <input type="email" placeholder="Enter your email" className="flex-grow bg-charcoal border border-off-white/20 rounded-md px-3 py-2 text-sm text-off-white focus:ring-2 focus:ring-accent focus:outline-none" />
                        <button type="submit" className="bg-accent text-charcoal font-bold px-4 py-2 rounded-md hover:opacity-90 transition-opacity">Subscribe</button>
                    </form>
                 </div>
                <div className="text-center md:text-right">
                    <p className="text-sm text-off-white/60">&copy; {new Date().getFullYear()} QuantumHaido AI. All Rights Reserved.</p>
                    <p className="text-xs text-off-white/40 mt-1">Data-driven decisions, ethically delivered.</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;