import React from 'react';
import { Diamond } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-200 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="text-primary">
             <Diamond size={20} fill="currentColor" />
          </div>
          <p className="text-sm text-gray-500 font-medium">
            © 2024 vHost. All rights reserved.
          </p>
        </div>
        
        <nav className="flex gap-8 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;