import React, { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';

interface WorkItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="work-item rounded-lg overflow-hidden relative cursor-pointer shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className={`w-full h-64 object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 p-6 flex flex-col justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className={`text-gray-300 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>{description}</p>
        <a 
          href="#" 
          className={`text-[#0066FF] font-medium hover:underline flex items-center w-fit transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const workItems = [
    {
      title: 'E-commerce Website',
      description: 'A custom Shopify store with unique theme development',
      imageUrl: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Creative Portfolio',
      description: 'A responsive portfolio website for a photographer',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'SaaS Dashboard',
      description: 'A comprehensive dashboard for a SaaS product',
      imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Food Delivery App',
      description: 'A modern food ordering and delivery platform',
      imageUrl: 'https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fintech Website',
      description: 'A secure and modern financial technology platform',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Real Estate Platform',
      description: 'An interactive property listing and search website',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ];
  
  return (
    <section id="work" className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-6">
        <AnimatedHeading subtext="Our projects" className="text-white">
          Our Work
        </AnimatedHeading>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Check out some of our recent projects that showcase our expertise and creativity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {workItems.map((item, index) => (
            <WorkItem 
              key={index} 
              title={item.title} 
              description={item.description} 
              imageUrl={item.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
