import React, { useState, useEffect } from 'react';

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center w-20 h-16 sm:w-24 sm:h-20 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-inner">
      <span className="font-display text-2xl sm:text-4xl font-bold text-white tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wide">
      {label}
    </span>
  </div>
);

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 14,
    minutes: 32,
    seconds: 55,
  });

  // Countdown logic simulating a future date
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mt-6 sm:mt-10">
      <div 
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 min-h-[500px] flex flex-col items-center justify-center text-center p-6 sm:p-12"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.75), rgba(10, 15, 30, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrhfz7Fnvkfm3fqF5qP18oPalTu6BaDxKEkUDt1cPJUUjOS81O7UdEfGPXmymlkc1w-aLxkFQIcM8RWU0kViQrB0UnlSSls94W0wVirV9A9Fo9_GmSOR4LemWphshqWzCdTICfDQECkDrWmQW9iqmxEvI02xI9PK1foxWImIC0mZc-78p9Y-Xvr5InTxUQaH6_VHbIn2o3k-KGSblomM4U8ljO8IWd4y_VlrrulR1OxgAXaPkOLkYS1VF90R6fot8b3lOf5HkVyhc")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
              BÙNG NỔ ƯU ĐÃI – GIẢM TỚI 80%
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-medium">
              New Registrations for Cloud Singapore • Offer starts 27/11/2025
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            <CountdownItem value={timeLeft.days} label="Days" />
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;