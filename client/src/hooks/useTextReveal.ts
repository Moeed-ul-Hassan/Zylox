import { useEffect, useRef } from 'react';

type RevealTextOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useTextReveal(options: RevealTextOptions = {}) {
  const { threshold = 0.3, rootMargin = '0px 0px -100px 0px' } = options;
  const ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('revealed');
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el) => {
      if (el.parentElement) {
        observer.observe(el.parentElement);
      }
    });
    
    return () => {
      revealElements.forEach((el) => {
        if (el.parentElement) {
          observer.unobserve(el.parentElement);
        }
      });
    };
  }, [threshold, rootMargin]);
  
  return ref;
}
