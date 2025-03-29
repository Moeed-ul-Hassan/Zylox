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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden animated-bg">
      <div className="absolute inset-0 bg-[#0D0D0D]/80 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0066FF]/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-64 h-64 bg-[#0066FF]/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className={`max-w-4xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} id="hero-content">
          <div className="inline-block mb-3 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/20">
            <p className="text-white/80 text-sm font-medium">
              <span className="text-[#0066FF]">•</span> Professional Freelancing Agency
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            We build <span className="text-[#0066FF] typing-text" id="typing-text">{text}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Zylox is a professional freelancing agency specializing in web development and Shopify solutions, delivering modern and efficient web experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); scrollToElement('services'); }}
              className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block text-center btn-primary"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToElement('contact'); }}
              className="border border-white text-white hover:bg-white hover:text-[#0D0D0D] font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block text-center btn-outline"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-4 text-gray-400 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="font-medium">Trusted by businesses worldwide</span>
            <span className="h-px bg-gray-700 w-12"></span>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a 
          href="#services" 
          onClick={handleScrollDown}
          className="text-white hover:text-[#0066FF] transition-colors duration-300"
          aria-label="Scroll down"
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
