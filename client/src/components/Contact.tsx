import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import AnimatedHeading from './AnimatedHeading';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start group">
      <div className="bg-[#0066FF] p-3 rounded-lg mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1 group-hover:text-[#0066FF] transition-colors duration-300">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; url: string }> = ({ icon, url }) => {
  return (
    <a 
      href={url} 
      className="bg-white/10 hover:bg-[#0066FF] p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Input field with animations
const AnimatedInput: React.FC<{
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  textarea?: boolean;
  rows?: number;
  required?: boolean;
}> = ({ 
  label, 
  id, 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  textarea = false, 
  rows = 4,
  required = false
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  
  useEffect(() => {
    setFilled(value.trim() !== '');
  }, [value]);
  
  const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-transparent form-input transition-all duration-300";
  const focusClasses = focused ? "ring-2 ring-[#0066FF] transform -translate-y-1" : "";
  const filledClasses = filled && !focused ? "border-[#0066FF]/50" : "";
  
  return (
    <div className="mb-6 relative">
      <label
        htmlFor={id}
        className={`block mb-2 font-medium transition-all duration-300 ${
          focused ? 'text-[#0066FF]' : 'text-gray-700'
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {!textarea ? (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClasses} ${focusClasses} ${filledClasses}`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          className={`${baseClasses} ${focusClasses} ${filledClasses}`}
          placeholder={placeholder}
          required={required}
        ></textarea>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log('Form submitted:', formState);
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@zylox.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 (234) 567-8900'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Lahore, Pakistan'
    }
  ];
  
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      url: '#'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      url: '#'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: '#'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      url: '#'
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#0066FF]/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#0066FF]/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedHeading subtext="Let's work together" className="text-white">
          Get In Touch
        </AnimatedHeading>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Ready to start your project? Reach out to us and let's discuss how we can help you achieve your goals.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form 
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl" 
              onSubmit={handleSubmit}
            >
              <AnimatedInput 
                label="Name"
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              
              <AnimatedInput 
                label="Email"
                id="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
              
              <AnimatedInput 
                label="Subject"
                id="subject"
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
              
              <AnimatedInput 
                label="Message"
                id="message"
                type="text"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                textarea
                rows={4}
                required
              />
              
              <button 
                type="submit" 
                className="w-full bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 btn-primary relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 text-white">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out to us through any of the following channels. We're always happy to hear from you and discuss your project needs.
                </p>
                
                <div className="space-y-8 stagger-animate">
                  {contactInfo.map((info, index) => (
                    <ContactInfo 
                      key={index}
                      icon={info.icon}
                      title={info.title}
                      content={info.content}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold mb-6 relative inline-block">
                  Follow Us
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0066FF]"></span>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <SocialButton 
                      key={index}
                      icon={link.icon}
                      url={link.url}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-12 lg:mt-16">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                  <h4 className="font-bold text-xl mb-4">Need a quick response?</h4>
                  <p className="text-gray-400 mb-4">We typically respond to inquiries within 24 hours.</p>
                  <a 
                    href="mailto:contact@zylox.com" 
                    className="inline-flex items-center text-[#0066FF] hover:text-white transition-colors duration-300"
                  >
                    <span>Email us directly</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
