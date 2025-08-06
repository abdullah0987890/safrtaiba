
'use client';

import { useState, useEffect } from 'react';

export default function CurrentDraw() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-15T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            November 2025 Draw
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" suppressHydrationWarning={true}>{timeLeft.days}</div>
                <div className="text-sm uppercase tracking-wider">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" suppressHydrationWarning={true}>{timeLeft.hours}</div>
                <div className="text-sm uppercase tracking-wider">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" suppressHydrationWarning={true}>{timeLeft.minutes}</div>
                <div className="text-sm uppercase tracking-wider">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" suppressHydrationWarning={true}>{timeLeft.seconds}</div>
                <div className="text-sm uppercase tracking-wider">Seconds</div>
              </div>
            </div>
            
            <div className="text-xl font-semibold mb-4">
              Until Draw Closes
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">1,247</div>
              <div className="text-sm uppercase tracking-wider">Current Participants</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm uppercase tracking-wider">Winners This Draw</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">PKR 250,000</div>
              <div className="text-sm uppercase tracking-wider">Package Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
