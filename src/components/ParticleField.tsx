"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  animationDelay: number;
  animationDuration: number;
  animateX: [number, number, number];
  animateY: [number, number, number];
  animateScale: [number, number, number];
}

const ParticleField: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Generate particles only on client side to avoid hydration mismatch
    // Reduce particle count on mobile for better performance
    const particleCount = window.innerWidth < 768 ? 8 : 20;
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 10,
      animateX: [0, Math.random() * 200 - 100, 0] as [number, number, number],
      animateY: [0, Math.random() * 200 - 100, 0] as [number, number, number],
      animateScale: [1, Math.random() * 2 + 0.5, 1] as [number, number, number],
    }));
    
    setParticles(generatedParticles);
    setMounted(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render particles until component is mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl particle-glow-1"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-yellow-500/5 rounded-full blur-3xl particle-glow-2"
        />
      </div>
    );
  }

  // On mobile, show simplified static version
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-yellow-500/5 rounded-full blur-3xl opacity-20"
        />
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm particle-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            scale: particle.animateScale,
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 0, // Disable Framer Motion animations for mobile performance
          }}
        />
      ))}

      {/* Ambient glow effects - use CSS animations instead of Framer Motion */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl particle-glow-1"
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-yellow-500/5 rounded-full blur-3xl particle-glow-2"
      />
    </div>
  );
};

export default ParticleField;
