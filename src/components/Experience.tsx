"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experience, personalInfo } from '@/data/portfolio';

const Experience: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  return (
    <section id="experience" className="py-20 mt-0 bg-white dark:bg-gray-900 relative">
      {/* Simplified floating elements for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Timeline & Career Elements */}
          <motion.div
            className="absolute w-6 h-6 bg-blue-300/30 dark:bg-blue-500/20 rounded-full experience-float-1"
            transition={{ duration: 0 }}
            style={{ top: '20%', left: '15%' }}
          />
        
        {/* Floating Briefcase */}
        <motion.div
          className="absolute text-4xl opacity-10 experience-briefcase"
          transition={{ duration: 0 }}
          style={{ top: '15%', right: '20%' }}
        >
          💼
        </motion.div>

        {/* Floating Chart */}
        <motion.div
          className="absolute text-3xl opacity-10 experience-chart"
          transition={{ duration: 0 }}
          style={{ bottom: '25%', left: '10%' }}
        >
          📈
        </motion.div>

        {/* Floating Calendar */}
        <motion.div
          className="absolute text-2xl opacity-10 experience-calendar"
          transition={{ duration: 0 }}
          style={{ top: '60%', right: '15%' }}
        >
          📅
        </motion.div>

        {/* Floating Achievement Icons */}
        {['🏆', '🎯', '⭐', '🚀'].map((icon, index) => (
          <motion.div
            key={icon}
            className={`absolute text-2xl opacity-10 experience-achievement-${index + 1}`}
            transition={{ duration: 0 }}
            style={{
              top: `${30 + index * 10}%`,
              right: `${80 + index * 3}%`,
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Floating Timeline Connectors */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-1 h-20 bg-gradient-to-b from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full experience-connector-${index + 1}`}
            transition={{ duration: 0 }}
            style={{
              top: `${20 + index * 20}%`,
              left: `${5 + index * 2}%`,
            }}
          />
        ))}

        {/* Orbiting Experience Points */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-blue-200/20 dark:border-blue-500/10 rounded-full experience-orbit"
          transition={{ duration: 0 }}
          style={{ top: '40%', right: '10%' }}
        >
          <motion.div
            className="w-4 h-4 bg-blue-400/40 dark:bg-blue-500/30 rounded-full absolute experience-orbit-point"
            transition={{ duration: 0 }}
            style={{ top: '-2px', left: '50%', transformOrigin: '8px 68px' }}
          />
        </motion.div>
        <motion.div
          className="absolute w-4 h-4 bg-purple-300/30 dark:bg-purple-500/20 rounded-full experience-float-2"
          transition={{ duration: 0 }}
          style={{ top: '40%', right: '20%' }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-green-300/20 dark:bg-green-500/10 rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '30%', left: '25%' }}
        />
        
        {/* Floating Career Icons */}
        <motion.div
          className="absolute text-2xl opacity-10"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '35%', right: '15%' }}
        >
          📈
        </motion.div>
        <motion.div
          className="absolute text-xl opacity-10"
          animate={{
            x: [0, 35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '25%', right: '30%' }}
        >
          🏢
        </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line with Fade In and Green End */}
          <div 
            className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-transparent via-blue-500 to-green-500 opacity-90 shadow-lg z-10"
            style={{
              height: 'calc(100% - 2rem)',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.3) 5%, rgb(59, 130, 246) 15%, rgb(59, 130, 246) 85%, rgb(34, 197, 94) 100%)'
            }}
          ></div>
          
          {/* Timeline End Dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full shadow-lg z-20" style={{ bottom: '2rem' }}>
            <div className="absolute inset-1 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {experience.map((exp, index) => {
            // Helper function to get emoji based on experience type
            const getTypeEmoji = (type: string) => {
              switch (type) {
                case 'internship':
                  return '💼';
                case 'training':
                  return '📚';
                case 'leadership':
                  return '🏅';
                default:
                  return '💼';
              }
            };

            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative mb-12 ${index > 0 ? 'md:-mt-48' : ''} md:mb-4`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-gray-900 rounded-full shadow-lg z-30"
                  style={{
                    top: '4rem'
                  }}
                ></div>

                {/* Content Container */}
                <div className={`flex ${isEven ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                  <div 
                    className={`ml-12 md:ml-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-200 dark:border-gray-700 w-full max-w-lg md:max-w-sm lg:max-w-md relative`}
                    style={{
                      zIndex: 20 - index,
                      boxShadow: index > 0 ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : undefined
                    }}
                  >
                    {/* Type Emoji Tag */}
                    <div className={`mb-3 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700">
                        <span className="mr-2 text-lg">{getTypeEmoji(exp.type)}</span>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>

                    {/* Header */}
                    <div className={`mb-4 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                      <div className={`flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                          </svg>
                          {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">
                          ({calculateDuration(exp.startDate, exp.endDate)})
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-6 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start text-gray-600 dark:text-gray-300 ${
                          isEven ? '' : 'md:flex-row-reverse'
                        }`}>
                          <span className={`text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 ${
                            isEven ? 'mr-2' : 'md:ml-2 mr-2 md:mr-0'
                          }`}>•</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Areas */}
                    <div className={`border-t border-gray-200 dark:border-gray-600 pt-4 ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Areas & Skills
                      </h5>
                      <div className={`flex flex-wrap gap-2 ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                        {exp.keyAreas.map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800 transition-colors hover:bg-blue-200 dark:hover:bg-blue-800/70"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Seeking Opportunities */}
        <div className="text-center mt-8 mb-8 relative z-10">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800/30 mt-2 relative z-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3" style={{visibility: 'hidden'}}></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Currently Seeking Opportunities
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m actively looking for exciting opportunities to contribute to innovative projects and grow my career as a software developer. 
              Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Let&apos;s Connect
              </a>
              <span className="text-gray-500 dark:text-gray-400">or</span>
              <a
                href={personalInfo.contact.resume || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
