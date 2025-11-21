import React from 'react';
import { ServerCog } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-background-dark rounded-3xl overflow-hidden p-8 sm:p-16 flex flex-col items-center text-center gap-6 shadow-2xl">
      {/* Decorative Background Icon */}
      <div className="absolute -bottom-12 -right-12 text-gray-800 opacity-50 transform rotate-12 pointer-events-none">
        <ServerCog size={240} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-2xl space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
          Don't Miss This Investment Opportunity
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Limited slots available. Secure your high-performance Cloud Server today 
          at an unbeatable price and elevate your projects for years to come.
        </p>
        <div className="pt-4">
          <button className="bg-primary hover:bg-primary-hover text-white font-bold text-base py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:scale-105">
            Register for 80% Off
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;