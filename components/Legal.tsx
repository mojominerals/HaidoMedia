import React from 'react';
import Card from './ui/Card';

const Legal: React.FC = () => {
  return (
    <>
      <section id="privacy" className="py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6 max-w-4xl text-off-white/80">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-8 text-off-white">Privacy Policy</h2>
          <div className="space-y-4">
            <p><strong>Last updated: {new Date().toLocaleDateString()}</strong></p>
            <p>QuantumHaido AI ("us", "we", or "our") operates the QuantumHaido AI Marketing website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3 className="text-2xl font-heading font-bold pt-6 text-off-white">Information Collection and Use</h3>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      <section id="terms" className="py-20 md:py-32 bg-graphite">
        <div className="container mx-auto px-6 max-w-4xl text-off-white/80">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-8 text-off-white">Terms of Service</h2>
          <div className="space-y-4">
            <p><strong>Last updated: {new Date().toLocaleDateString()}</strong></p>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the QuantumHaido AI Marketing website (the "Service") operated by QuantumHaido AI ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>

      <section id="cookies" className="py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6 max-w-4xl text-off-white/80">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-8 text-off-white">Cookie Settings</h2>
          <div className="space-y-6">
            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
            <Card className="p-6">
                <h3 className="text-xl font-bold font-heading mb-4 text-off-white">Manage Consent Preferences</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-off-white">Strictly Necessary Cookies</h4>
                            <p className="text-sm text-off-white/70">These cookies are essential for you to browse the website and use its features.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked disabled />
                            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                        </label>
                    </div>
                     <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-off-white">Performance Cookies</h4>
                            <p className="text-sm text-off-white/70">These cookies collect information about how you use our website.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                        </label>
                    </div>
                     <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-off-white">Functional Cookies</h4>
                            <p className="text-sm text-off-white/70">These cookies allow the website to remember choices you make.</p>
                        </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                        </label>
                    </div>
                </div>
                <div className="mt-6 flex gap-4">
                    <button className="flex-1 bg-accent text-charcoal font-bold px-4 py-2 rounded-md hover:opacity-90 transition-opacity">Accept All</button>
                    <button className="flex-1 border border-accent text-accent font-bold px-4 py-2 rounded-md hover:bg-accent hover:text-charcoal transition-colors">Save Preferences</button>
                </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;