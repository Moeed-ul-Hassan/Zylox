import React, { useEffect, useRef } from 'react';
import AnimatedHeading from './AnimatedHeading';

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to each counter
            if (statsRef.current) {
              const counters = statsRef.current.querySelectorAll('.counter-value');
              counters.forEach((counter, index) => {
                setTimeout(() => {
                  counter.classList.add('animate-counter');
                }, index * 200);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedHeading subtext="Who we are">
          About Zylox
        </AnimatedHeading>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mt-12">
          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Zylox is a professional freelancing agency founded by <span className="font-semibold text-[#0066FF]">Moeed Mirza</span>. The agency specializes in web development and Shopify solutions, offering high-quality services to businesses and entrepreneurs.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With expertise in both frontend and backend technologies, Zylox delivers modern, scalable, and efficient web solutions. The team is dedicated to helping businesses establish and enhance their online presence through custom-built websites, e-commerce stores, and Shopify theme development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10" ref={statsRef}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100">
                  <h3 className="text-3xl font-bold text-[#0066FF] mb-2 counter-value">{stat.value}</h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0066FF] rounded-lg opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Zylox team working together" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10 object-cover border-4 border-white"
              style={{ maxHeight: '500px' }}
            />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0066FF] rounded-lg opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
