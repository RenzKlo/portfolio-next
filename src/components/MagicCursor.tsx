"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const MagicCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device - disable cursor effects on touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't track mouse on mobile devices
    if (isMobile) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create trailing particles
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        delay: Math.random() * 0.3,
      };
      
      setParticles(prev => [...prev.slice(-8), newParticle]);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0" style={{ zIndex: 30 }}>
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 0.8,
        }}
      />

      {/* Trailing particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          initial={{
            x: particle.x - 4,
            y: particle.y - 4,
            scale: 1,
            opacity: 0.8,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Ripple effect - replace continuous animation with CSS */}
      <div
        className="absolute border-2 border-blue-400/20 rounded-full cursor-ripple"
        style={{ 
          width: 40, 
          height: 40,
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />
    </div>
  );
};

export default MagicCursor;
