import React, { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleNavLinkClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <nav 
        id="navbar" 
        className={`navbar fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 bg-[#0D0D0D] shadow-lg' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white group">
            <span className="group-hover:text-[#0066FF] transition-colors duration-300">Zylox</span>
          </a>
          
          <div className="hidden lg:flex space-x-10">
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('services'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#work" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('work'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300"
            >
              Work
            </a>
            <a 
              href="#team" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('team'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          <button 
            id="menu-toggle" 
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className={`lg:hidden bg-[#0D0D0D] ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('services'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300 py-2"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300 py-2"
            >
              About
            </a>
            <a 
              href="#work" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('work'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300 py-2"
            >
              Work
            </a>
            <a 
              href="#team" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('team'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300 py-2"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
              className="text-white hover:text-[#0066FF] transition-colors duration-300 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
