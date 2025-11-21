import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-64 -left-64 w-[40rem] h-[40rem] bg-red-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-96 -right-96 w-[50rem] h-[50rem] bg-red-50 rounded-full opacity-50 hidden lg:block blur-3xl"></div>
        {/* Subtle geometric overlay */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto text-gray-100 opacity-40 z-[-1]"
          fill="none"
          viewBox="0 0 1021 999"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-225 431.5L206.5 0V194L-43 431.5H-225Z" fill="currentColor"></path>
          <path d="M-43 567.5L206.5 805V999L-225 567.5H-43Z" fill="currentColor"></path>
          <path d="M1021 431.5L589.5 0V194L871 431.5H1021Z" fill="currentColor"></path>
          <path d="M871 567.5L589.5 805V999L1021 567.5H871Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="flex flex-col gap-16 sm:gap-24 pb-16">
          <Hero />
          <PricingSection />
          <FeaturesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;