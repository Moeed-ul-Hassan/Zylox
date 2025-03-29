import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    }, 2500);

    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center z-[9999]"
      style={{
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
        opacity: loading ? 1 : 0,
        visibility: loading ? 'visible' : 'hidden'
      }}
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-4 border-[#0066FF] rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-4 border-[#0066FF]/80 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
        <div className="absolute inset-4 border-b-4 border-[#0066FF]/60 rounded-full animate-[spin_2s_linear_infinite]"></div>
      </div>
      <h2 className="text-white text-2xl font-bold mt-8 relative">
        <span className="text-[#0066FF]">Z</span>ylox
        <span className="loading-dots">
          <span className="dot animate-[pulse_1s_ease-in-out_0s_infinite]">.</span>
          <span className="dot animate-[pulse_1s_ease-in-out_0.2s_infinite]">.</span>
          <span className="dot animate-[pulse_1s_ease-in-out_0.4s_infinite]">.</span>
        </span>
      </h2>
      <p className="text-gray-400 mt-2">Building digital experiences</p>
    </div>
  );
};

export default Preloader;