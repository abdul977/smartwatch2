import React, { useState, useEffect } from 'react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 2,
    minutes: 4,
    seconds: 3
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white p-4 rounded-lg text-center mb-8">
      <p className="text-yellow-400 text-xl mb-2">Black Friday Sale - 10% DISCOUNT 🔥🔥🔥</p>
      <div className="flex justify-center space-x-4">
        <TimeUnit value={timeLeft.days} unit="Days" />
        <TimeUnit value={timeLeft.hours} unit="Hours" />
        <TimeUnit value={timeLeft.minutes} unit="Minutes" />
        <TimeUnit value={timeLeft.seconds} unit="Seconds" />
      </div>
    </div>
  );
}

function TimeUnit({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="text-center">
      <div className="bg-purple-600 rounded-lg p-2 min-w-[60px]">
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <p className="text-sm mt-1">{unit}</p>
    </div>
  );
}