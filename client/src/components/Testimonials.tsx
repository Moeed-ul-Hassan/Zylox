import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageUrl }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0066FF]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">
        {quote}
      </p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="reveal-text">Client Testimonials</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear what our clients have to say about working with Zylox.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
