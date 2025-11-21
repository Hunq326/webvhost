import React from 'react';

interface PricingCardProps {
  title: string;
  discount: number;
  isBestValue?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, discount, isBestValue }) => {
  const baseClasses = "relative flex flex-col gap-6 p-8 rounded-2xl transition-all duration-300 group";
  const standardClasses = "bg-white/60 border border-gray-200 hover:-translate-y-2 hover:shadow-xl backdrop-blur-md";
  const bestValueClasses = "bg-red-50 border-2 border-primary scale-105 hover:scale-[1.07] shadow-2xl shadow-primary/20 z-10";

  return (
    <div className={`${baseClasses} ${isBestValue ? bestValueClasses : standardClasses}`}>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
          {isBestValue && (
            <span className="bg-primary text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide shadow-sm">
              Best Value
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className={`font-display text-5xl font-extrabold tracking-tight ${isBestValue ? 'text-primary' : 'text-gray-900'}`}>
            {discount}%
          </span>
          <span className="font-display text-xl font-bold text-gray-600">Discount</span>
        </div>
      </div>

      <button className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all duration-200 mt-auto ${
        isBestValue 
          ? 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/40' 
          : 'bg-primary text-white hover:bg-primary-hover hover:shadow-lg'
      }`}>
        Choose Plan
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        Choose Your Investment Plan
      </h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center px-2 sm:px-4">
        <PricingCard title="1 Year Plan" discount={50} />
        <PricingCard title="2 Year Plan" discount={60} />
        <PricingCard title="3+ Year Plan" discount={80} isBestValue={true} />
      </div>
    </section>
  );
};

export default PricingSection;