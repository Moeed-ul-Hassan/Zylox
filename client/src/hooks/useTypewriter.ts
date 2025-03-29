import { useState, useEffect, useCallback } from 'react';

type TypewriterOptions = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

export function useTypewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typeNextCharacter = useCallback(() => {
    const currentWord = words[wordIndex % words.length];
    
    if (isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
    }
    
    let timeout = typingSpeed;
    
    if (isDeleting) {
      timeout = deletingSpeed;
    }
    
    if (!isDeleting && displayText === currentWord) {
      // Word is complete, wait before deleting
      timeout = delayBetweenWords;
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      // Word is fully deleted, move to next word
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
      timeout = 500; // Pause before typing next word
    }
    
    const timerId = setTimeout(typeNextCharacter, timeout);
    return () => clearTimeout(timerId);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);
  
  useEffect(() => {
    const timerId = setTimeout(typeNextCharacter, 1000); // Initial delay
    return () => clearTimeout(timerId);
  }, [typeNextCharacter]);
  
  return { text: displayText };
}
