import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Work from '@/components/Work';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useCursor } from '@/hooks/useCursor';
import { useTextReveal } from '@/hooks/useTextReveal';

const Home: React.FC = () => {
  useCursor();
  useTextReveal();
  
  useEffect(() => {
    document.body.classList.add('font-sans', 'antialiased', 'bg-background', 'text-foreground');
    
    // Cleanup function
    return () => {
      document.body.className = '';
    };
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Work />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
