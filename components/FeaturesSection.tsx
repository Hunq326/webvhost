import React from 'react';
import { Zap, ShieldCheck, Headset } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center gap-4 p-4">
    <div className="w-14 h-14 rounded-2xl bg-red-50 text-primary flex items-center justify-center mb-2">
      {icon}
    </div>
    <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed max-w-sm">
      {description}
    </p>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <FeatureItem 
          icon={<Zap size={28} strokeWidth={2.5} />}
          title="Fast & Stable Access"
          description="Optimized low-latency connection from Vietnam to our Singapore data centers."
        />
        <FeatureItem 
          icon={<ShieldCheck size={28} strokeWidth={2.5} />}
          title="Powerful & Secure"
          description="Enterprise-grade hardware with robust security measures to protect your data."
        />
        <FeatureItem 
          icon={<Headset size={28} strokeWidth={2.5} />}
          title="24/7/365 Support"
          description="Our expert technical team is always available to assist you, any time of the day."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;