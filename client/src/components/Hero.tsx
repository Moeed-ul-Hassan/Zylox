import React, { useState, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { scrollToElement } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { text } = useTypewriter({
    words: ['digital experiences', 'creative websites', 'custom solutions', 'e-commerce stores'],
    typingSpeed: 150,
    deletingSpeed: 50,
    delayBetweenWords: 2000
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('services');
  };
  
  return (
    <section id="hero" className="bg-[#0D0D0D] min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute w-full h-full bg-[#0D0D0D] opacity-90 z-0"></div>
      <div className="container mx-auto px-6 z-10">
        <div className={`max-w-4xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} id="hero-content">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            We build <span className="text-[#0066FF] typing-text" id="typing-text">{text}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl">
            Zylox is a professional freelancing agency specializing in web development and Shopify solutions, delivering modern and efficient web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); scrollToElement('services'); }}
              className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-block text-center"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToElement('contact'); }}
              className="border border-white text-white hover:bg-white hover:text-[#0D0D0D] font-medium py-3 px-6 rounded-md transition-all duration-300 inline-block text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a 
          href="#services" 
          onClick={handleScrollDown}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
