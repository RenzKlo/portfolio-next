"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills, education } from '@/data/portfolio';
import { Skill } from '@/types';
import EmailWithCopy from './EmailWithCopy';

const About: React.FC = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const categoryTitles = personalInfo.skillCategories || {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    frameworks: 'Frameworks & Libraries',
    languages: 'Programming Languages',
    tools: 'Tools & Technologies'
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbiting Circles */}
        <motion.div
          className="absolute w-40 h-40 bg-blue-100/20 dark:bg-blue-500/10 rounded-full"
          animate={{
            x: [0, 60, 0, -30, 0],
            y: [0, -40, 20, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '15%', right: '10%' }}
        />
        
        <motion.div
          className="absolute w-24 h-24 bg-purple-100/20 dark:bg-purple-500/10 rounded-full"
          animate={{
            x: [0, -30, 0, 40, 0],
            y: [0, 50, -20, 30, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '15%' }}
        />

        {/* Floating Shapes */}
        <motion.div
          className="absolute w-16 h-16 bg-green-200/20 dark:bg-green-500/10"
          style={{ 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            top: '30%',
            left: '5%'
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-20 h-20 bg-yellow-200/20 dark:bg-yellow-500/10 rounded-lg"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '5%' }}
        />

        {/* Floating Code Symbols */}
        {['<>', '{}', '[]', '()', '//'].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-2xl font-mono text-blue-300/30 dark:text-blue-400/20 select-none"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut"
            }}
            style={{
              top: `${20 + index * 15}%`,
              right: `${85 - index * 5}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
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
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              About Me
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {personalInfo.aboutSubtitle || "Get to know more about my background, skills, and what drives my passion for development."}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.span
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                My Story
              </motion.span>
            </motion.h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-default"
              >
                {personalInfo.bio}
              </motion.p>
              {personalInfo.extendedBio?.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-default"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Enhanced Contact Info */}
            <motion.div 
              className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {personalInfo.quickInfoTitle || "Quick Info"}
              </motion.h4>
              <div className="space-y-2 text-sm">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <EmailWithCopy 
                    email={personalInfo.contact.email}
                    showLabel={true}
                    variant="default"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-gray-900 dark:text-white w-20">Location:</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {personalInfo.contact.location}
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-gray-900 dark:text-white w-20">Available:</span>
                  <motion.span 
                    className="text-green-600 dark:text-green-400"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {personalInfo.availabilityStatus || "For new opportunities"}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Education Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                  {personalInfo.educationBadge || "🎓 Education"}
                </span>
              </div>
              
              {/* Education Header */}
              <div className="mb-4">
                <motion.h4 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  {education[0]?.degree} in {education[0]?.field}
                  {education[0]?.major && (
                    <div className="text-base font-medium text-gray-700 dark:text-gray-300 mt-1">
                      Major in {education[0].major}
                    </div>
                  )}
                  {education[0]?.specialization && (
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-1">
                      Specialization: {education[0].specialization}
                    </div>
                  )}
                </motion.h4>
                <motion.h5 
                  className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  {education[0]?.institution}
                </motion.h5>
                <motion.div 
                  className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {education[0]?.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                    </svg>
                    {education[0]?.startDate && new Date(education[0].startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - {education[0]?.endDate ? new Date(education[0].endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : education[0]?.status === 'expected' ? 'Expected' : 'Present'}
                  </span>
                </motion.div>
                {/* GPA Badge */}
                {education[0]?.gpa && (
                  <motion.div 
                    className="mt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200">
                      🏆 {education[0].honors || `GPA: ${education[0].gpa}`}
                      {education[0].gradeSystem && (
                        <span className="ml-1 text-xs opacity-75">({education[0].gradeSystem})</span>
                      )}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Education Achievements */}
              {education[0]?.achievements && education[0].achievements.length > 0 && (
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  {education[0].achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {/* Academic Focus Areas */}
              {education[0]?.relevantCoursework && education[0].relevantCoursework.length > 0 && (
                <motion.div 
                  className="border-t border-gray-200 dark:border-gray-600 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Coursework
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {education[0].relevantCoursework.map((course, index) => (
                      <motion.span
                        key={course}
                        className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-800 transition-colors hover:bg-purple-200 dark:hover:bg-purple-800/70"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Thesis Section */}
              {education[0]?.thesis && (
                <motion.div 
                  className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    📝 Thesis
                  </h6>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {education[0].thesis.title}
                    </div>
                    {education[0].thesis.description && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {education[0].thesis.description}
                      </p>
                    )}
                    {education[0].thesis.advisor && (
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Advisor: {education[0].thesis.advisor}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Awards Section */}
              {education[0]?.awards && education[0].awards.length > 0 && (
                <motion.div 
                  className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    🏆 Academic Awards
                  </h6>
                  <div className="grid gap-2">
                    {education[0].awards.map((award, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-yellow-500 mr-2">🏅</span>
                        {award}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Certifications Section */}
              {education[0]?.certifications && education[0].certifications.length > 0 && (
                <motion.div 
                  className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  viewport={{ once: true }}
                >
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    📜 Certifications
                  </h6>
                  <div className="space-y-2">
                    {education[0].certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between text-xs"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </span>
                          <div className="text-gray-600 dark:text-gray-400">
                            {cert.issuer} {cert.date && `• ${cert.date}`}
                          </div>
                        </div>
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.span
                whileHover={{
                  color: "#3b82f6",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {personalInfo.skillsTitle}
              </motion.span>
            </motion.h3>
            
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <motion.h4 
                    className="text-lg font-medium text-gray-900 dark:text-white mb-4"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {categoryTitles[category as keyof typeof categoryTitles] || category}
                  </motion.h4>
                  <div className="space-y-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <motion.span 
                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                            whileHover={{ color: "#3b82f6", transition: { duration: 0.2 } }}
                          >
                            {skill.name}
                          </motion.span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-2 rounded-full transition-all duration-300 ${getLevelColor(skill.level)}`}
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: skill.level === 'expert' ? '100%' :
                                     skill.level === 'advanced' ? '80%' :
                                     skill.level === 'intermediate' ? '60%' : '40%'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
