import React, { useEffect, useRef, useState } from 'react';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtext?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  children, 
  className = "", 
  subtext 
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);
  
  return (
    <div className="text-center mb-16" ref={headingRef}>
      <div className="inline-block mb-3 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/20">
        <p className="text-white/80 text-sm font-medium">
          <span className="text-[#0066FF]">•</span> {subtext || "Zylox Agency"}
        </p>
      </div>
      
      <div className={`relative inline-block ${isVisible ? 'animate-section-heading' : 'opacity-0'}`}>
        <div className="absolute inset-0 border-2 border-[#0066FF] rounded-lg transform scale-110 opacity-0 transition-all duration-700 animate-box-reveal"></div>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 px-6 py-2 ${className}`}>
          <span className="reveal-text">{children}</span>
        </h2>
      </div>
    </div>
  );
};

export default AnimatedHeading;