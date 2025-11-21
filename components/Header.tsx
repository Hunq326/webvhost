import React from 'react';
import { Diamond } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-primary">
            <Diamond size={28} strokeWidth={2.5} fill="currentColor" className="text-primary" />
        </div>
        <h1 className="font-display text-xl font-bold text-gray-900 tracking-tight">
          vHost
        </h1>
      </div>
      <button className="bg-primary hover:bg-primary-hover text-white font-bold text-sm py-2.5 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        Register Now
      </button>
    </header>
  );
};

export default Header;