import { useEffect, useState } from 'react';
import '../styles/cursor.css';

export function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth <= 1024) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Initialize interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setIsEnlarged(true));
      element.addEventListener('mouseleave', () => setIsEnlarged(false));
    });

    // Update cursor position
    const updateCursorPosition = () => {
      if (cursor) {
        cursor.style.left = `${position.x}px`;
        cursor.style.top = `${position.y}px`;
        
        if (isEnlarged) {
          cursor.classList.add('cursor-enlarged');
        } else {
          cursor.classList.remove('cursor-enlarged');
        }
      }
      requestAnimationFrame(updateCursorPosition);
    };

    const animationId = requestAnimationFrame(updateCursorPosition);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setIsEnlarged(true));
        element.removeEventListener('mouseleave', () => setIsEnlarged(false));
      });
    };
  }, [position.x, position.y, isEnlarged]);

  return { isVisible };
}
