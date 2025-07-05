"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, typingAnimationTexts } from '@/data/portfolio';
import TypingAnimation from './TypingAnimation';
import MagneticHover from './MagneticHover';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'mail':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Multiple Floating Elements with Different Animations */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '20%', right: '15%' }}
      />

      {/* Floating Triangle */}
      <motion.div
        className="absolute w-24 h-24 bg-purple-200/20 dark:bg-purple-500/10"
        style={{ 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          top: '60%',
          left: '10%'
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Square */}
      <motion.div
        className="absolute w-20 h-20 bg-green-200/20 dark:bg-green-500/10 rounded-lg"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '20%' }}
      />

      {/* Floating Hexagon */}
      <motion.div
        className="absolute w-28 h-28 bg-yellow-200/20 dark:bg-yellow-500/10"
        style={{ 
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          bottom: '20%',
          right: '20%'
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          rotate: [0, 120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Pulsing Dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-indigo-400/30 dark:bg-indigo-300/20 rounded-full"
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut"
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${80 + i * 2}%`,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar with Animation */}
          <motion.div 
            className="relative w-48 h-48 mx-auto mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "backOut",
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(45deg, #8b5cf6, #ec4899)",
                  "linear-gradient(45deg, #ec4899, #f59e0b)",
                  "linear-gradient(45deg, #f59e0b, #3b82f6)",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <motion.span 
                  className="text-4xl font-bold text-gray-600 dark:text-gray-300"
                  animate={{ 
                    textShadow: [
                      "0 0 0px #3b82f6",
                      "0 0 20px #3b82f6",
                      "0 0 0px #3b82f6"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {personalInfo.name.split(' ').map(name => name[0]).join('')}
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name and Title with Staggered Animation */}
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: "easeOut"
            }}
          >
            {personalInfo.name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.05,
                  ease: "backOut"
                }}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  color: "#3b82f6",
                  transition: { duration: 0.2 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 mb-2 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              {personalInfo.title}
            </motion.span>
          </motion.h2>

          {/* Dynamic Typing Animation */}
          <motion.div
            className="text-xl sm:text-2xl mb-6 h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TypingAnimation
              texts={typingAnimationTexts}
              className="text-gray-600 dark:text-gray-300 font-medium"
              speed={80}
              delay={2500}
            />
          </motion.div>

          {/* Bio with Typewriter Effect */}
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons with Advanced Animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <MagneticHover strength={0.3}>
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
            </MagneticHover>
            
            <MagneticHover strength={0.3}>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#8b5cf6"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </MagneticHover>
          </motion.div>

          {/* Social Links with Staggered Animation */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={social.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  color: "#3b82f6",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {getSocialIcon(social.icon)}
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
