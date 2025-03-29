import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' }
  ];
  
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="reveal-text">About Zylox</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Zylox is a professional freelancing agency founded by Moeed Mirza. The agency specializes in web development and Shopify solutions, offering high-quality services to businesses and entrepreneurs.
            </p>
            <p className="text-gray-700 mb-6">
              With expertise in both frontend and backend technologies, Zylox delivers modern, scalable, and efficient web solutions. The team is dedicated to helping businesses establish and enhance their online presence through custom-built websites, e-commerce stores, and Shopify theme development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-5 rounded-lg text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-[#0066FF] mb-2">{stat.value}</h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0066FF] rounded-lg opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Zylox team working together" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10 object-cover"
              style={{ maxHeight: '500px' }}
            />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0066FF] rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
