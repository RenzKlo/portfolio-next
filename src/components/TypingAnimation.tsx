"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  texts, 
  className = "", 
  speed = 100, 
  delay = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const text = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(prev => text.substring(0, prev.length - 1));
        
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(prev => text.substring(0, prev.length + 1));
        
        if (currentText.length >= text.length - 1) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? speed / 2 : isPaused ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, delay, mounted]);

  // Prevent SSR issues
  if (!mounted) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className="min-h-[1em]">
          {texts[0]}
        </span>
        <span className="ml-1 text-blue-500 dark:text-blue-400">
          |
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="min-h-[1em]">
        {currentText}
      </span>
      
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="ml-1 text-blue-500 dark:text-blue-400"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingAnimation;
