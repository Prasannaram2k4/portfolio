import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "MarketPulse Pro",
      description: "A comprehensive trading app with market hour tracking, stock price display via Alpha Vantage API, trading journal, and virtual funded challenge features.",
      detailedDescription: "MarketPulse Pro is a full-stack trading application that provides real-time market data, portfolio tracking, and educational trading challenges. Built with React for a responsive frontend and Node.js backend with MongoDB for data persistence.",
      stack: ["React", "Node.js", "MongoDB", "Alpha Vantage API", "Python", "AI Integration"],
      github: "https://github.com/badrinagarjun/project-01",
      live: null,
      features: ["Real-time stock prices", "Market hour tracking", "Trading journal", "Virtual funded challenges", "AI-powered insights (coming soon)"]
    },
    {
      title: "MarketPulse Bot",
      description: "A Discord bot to manage trading sessions with automated functionality for trader communities.",
      detailedDescription: "An automated Discord bot designed for trading communities to manage trading sessions, track performance, and provide real-time market updates. Features timezone management and community engagement tools.",
      stack: ["Python", "discord.py", "pytz", "APIs"],
      github: "https://github.com/Prasannaram2k4/marketpulse-bot",
      live: null,
      features: ["Automated trading session management", "Community engagement", "Timezone support", "Performance tracking", "Market alerts"]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion.",
      detailedDescription: "A sophisticated portfolio website showcasing modern web development skills with smooth animations, responsive design, and interactive elements. Built using cutting-edge technologies for optimal performance.",
      stack: ["React", "TailwindCSS", "Framer Motion", "GitHub Pages"],
      github: "https://github.com/Prasannaram2k4/portfolio",
      live: "https://prasannaram2k4.github.io/portfolio",
      features: ["Responsive design", "Smooth animations", "Interactive elements", "Modern UI/UX", "Fast loading"]
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="section-padding bg-dark relative overflow-hidden"
      whileInView={{
        background: [
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          "linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%)",
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)"
        ],
      }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Animated background particles */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        {/* Stacked Cards Container */}
        <div className="relative max-w-4xl mx-auto" style={{ height: '600px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute w-full cursor-pointer"
              initial={{ 
                y: index * 30,
                scale: 1 - (index * 0.05),
                zIndex: projects.length - index,
                opacity: 1 - (index * 0.2)
              }}
              whileInView={{
                y: inView ? index * 30 : index * 60,
                scale: inView ? 1 - (index * 0.05) : 1 - (index * 0.1),
                opacity: inView ? 1 - (index * 0.2) : 1 - (index * 0.4)
              }}
              whileHover={{
                y: index * 15,
                scale: hoveredIndex === index ? 1.02 : 1 - (index * 0.05),
                zIndex: 100,
                opacity: 1,
                rotateX: hoveredIndex === index ? -2 : 0,
                rotateY: hoveredIndex === index ? 2 : 0,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              ref={index === 0 ? ref : null}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl">
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 relative flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  <div className="text-2xl font-bold text-primary/80 z-10">
                    {project.title}
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-secondary mb-6 text-lg leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.stack.slice(0, 4).map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="px-4 py-2 bg-dark text-primary text-sm rounded-full border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-4 py-2 bg-primary/10 text-primary/60 text-sm rounded-full">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-primary hover:text-secondary transition-colors font-medium"
                    >
                      <FaGithub size={20} className="mr-2" /> Code
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-primary hover:text-secondary transition-colors font-medium"
                      >
                        <FaExternalLinkAlt size={18} className="mr-2" /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bottom-4 right-4 text-primary/60 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Click for details
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-primary/30"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-primary">{selectedProject.title}</h3>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>
              
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                {selectedProject.detailedDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="text-secondary flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.stack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-dark text-primary text-sm rounded-full border border-primary/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-primary text-dark rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <FaGithub size={20} className="mr-2" /> View Code
                </motion.a>
                
                {selectedProject.live && (
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-dark transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={18} className="mr-2" /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;