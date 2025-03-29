import React from 'react';

interface WorkItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="work-item rounded-lg overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="work-item-overlay p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href="#" className="text-[#0066FF] font-medium hover:underline">View Project</a>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="reveal-text">Our Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
