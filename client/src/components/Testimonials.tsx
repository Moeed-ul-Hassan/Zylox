import React, { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ${isHovered ? 'translate-y-[-5px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0066FF]/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-full overflow-hidden mr-4 transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: '"Working with Zylox was a game-changer for our business. They delivered a stunning Shopify store that exceeded our expectations and has significantly improved our conversion rates."',
      name: 'Michael Johnson',
      title: 'CEO, Fashion Brand',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    {
      quote: '"The team at Zylox is incredibly talented and professional. They transformed our outdated website into a modern, responsive platform that has helped us attract new clients and grow our business."',
      name: 'Sarah Williams',
      title: 'Marketing Director, Tech Startup',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    {
      quote: '"I was impressed by Zylox\'s attention to detail and their ability to capture our brand\'s essence in the custom Shopify theme they developed. They were responsive, flexible, and delivered on time."',
      name: 'David Chen',
      title: 'Owner, Boutique Shop',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedHeading subtext="What clients say">
          Client Testimonials
        </AnimatedHeading>
        
        <p className="text-gray-500 max-w-2xl mx-auto text-center mb-12">
          Hear what our clients have to say about working with Zylox.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
