"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';
import { createPortal } from 'react-dom';
import ProjectButton from './ProjectButton';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  const handleFilterChange = (newFilter: 'all' | 'featured') => {
    if (newFilter === filter) return;
    
    setIsTransitioning(true);
    setFilter(newFilter);
    
    // Allow time for animation to complete - faster on mobile
    setTimeout(() => {
      setIsTransitioning(false);
    }, isMobile ? 200 : 400);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <motion.section 
      key={`projects-section-${filter}`}
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      layout
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 projects-triangle"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', top: '15%', left: '10%' }}
          transition={{ duration: 0 }}
        />
        
        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-br from-green-300/20 to-blue-300/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-lg projects-square"
          transition={{ duration: 0 }}
          style={{ top: '25%', right: '15%' }}
        />
        
        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 dark:from-yellow-500/10 dark:to-orange-500/10 projects-octagon"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', bottom: '20%', left: '20%' }}
          transition={{ duration: 0 }}
        />
        
        {/* Floating Code Elements */}
        <motion.div
          className="absolute w-24 h-24 bg-pink-300/20 dark:bg-pink-500/10 rounded-full projects-circle"
          transition={{ duration: 0 }}
          style={{ top: '60%', right: '5%' }}
        />

        {/* Binary Background Pattern */}
        {['0', '1', '0', '1', '0'].map((bit, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl font-mono text-blue-200/10 dark:text-blue-400/5 select-none"
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              delay: index * 1.2,
              ease: "easeInOut"
            }}
            style={{
              top: `${10 + index * 20}%`,
              left: `${5 + index * 15}%`,
            }}
          >
            {bit}
          </motion.div>
        ))}
        
        {/* Enhanced Floating Tech Icons */}
        <motion.div
          className="absolute text-3xl opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '40%', right: '25%' }}
        >
          💻
        </motion.div>
        
        <motion.div
          className="absolute text-2xl opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '30%', right: '10%' }}
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 projects-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
          
          {/* Project count indicator */}
          <motion.div 
            className="text-center mb-6"
            key={filteredProjects.length}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
              {filter === 'featured' && ' • Featured'}
            </span>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            <motion.button
              onClick={() => handleFilterChange('featured')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Featured
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid Container with Smooth Section Resizing */}
        <motion.div
          layout
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ contain: 'layout' }}
        >
          {/* Blur overlay during transition */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 backdrop-blur-sm z-10 rounded-lg"
              />
            )}
          </AnimatePresence>

          {/* Grid with smooth height transitions and better mobile breakpoints */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 projects-grid"
            animate={{ height: "auto" }}
            transition={{ duration: 0 }}
            style={{ willChange: isMobile ? 'auto' : 'transform' }}
          >
            <AnimatePresence mode="sync">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer group transition-shadow ${
                    isMobile ? '' : 'hover:shadow-xl'
                  }`}
                  onClick={() => openModal(project)}
                  initial={{ 
                    opacity: 0, 
                    scale: isMobile ? 0.98 : 0.95,
                    y: isMobile ? 10 : 20
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    y: -20
                  }}
                  transition={{ 
                    duration: isMobile ? 0.2 : 0.3,
                    delay: isMobile ? index * 0.03 : index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={isMobile ? {} : { 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden group">
                {project.imageUrl && !imageErrors.has(project.id) ? (
                  <>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={() => handleImageError(project.id)}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    {/* Title overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold text-center px-4 bg-black/50 rounded-lg py-2">
                        {project.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Gradient fallback */}
                    <div className="h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center px-4">
                        {project.title}
                      </h3>
                    </div>
                  </>
                )}
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium z-10">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Action Buttons */}
                {project.buttons && project.buttons.length > 0 && (
                  <div className="flex space-x-3">
                    {project.buttons.slice(0, 2).map((button, buttonIndex) => (
                      <ProjectButton
                        key={buttonIndex}
                        button={button}
                        size="md"
                        variant="card"
                        onClick={(e) => e.stopPropagation()}
                      />
                    ))}
                  </div>
                )}
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

        {/* Project Modal (Portal) */}
        {typeof window !== 'undefined' && createPortal(
          <AnimatePresence>
            {selectedProject && (
              <>
                {/* Modal Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                  style={{ zIndex: 9998 }}
                />
                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed inset-8 md:inset-16 lg:inset-20 xl:left-1/4 xl:right-1/4 xl:top-16 xl:bottom-16 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                  style={{ zIndex: 9999 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    style={{ zIndex: 10000 }}
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Scrollable Content */}
                  <div className="h-full overflow-y-auto">
                    {/* Project Image/Header */}
                    <div className="relative h-48 md:h-56 lg:h-64">
                      {selectedProject.imageUrl && !imageErrors.has(selectedProject.id) ? (
                        <>
                          <Image
                            src={selectedProject.imageUrl}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-6 z-10">
                              {selectedProject.title}
                            </h2>
                          </div>
                        </>
                      ) : (
                        <div className="h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                          <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-6">
                            {selectedProject.title}
                          </h2>
                        </div>
                      )}
                    </div>

                    {/* Modal Content */}
                    <div className="p-4 md:p-6">
                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Project Overview
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {selectedProject.longDescription || selectedProject.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      {selectedProject.buttons && selectedProject.buttons.length > 0 && (
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                          {selectedProject.buttons.map((button, buttonIndex) => (
                            <ProjectButton
                              key={buttonIndex}
                              button={button}
                              variant="modal"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
        {/* End Project Modal (Portal) */}
      </div>
    </motion.section>
  );
};

export default Projects;
