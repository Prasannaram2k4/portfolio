import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "MarketPulse Pro",
      description: "Advanced stock market analysis platform with real-time data visualization",
      fullDescription: "MarketPulse Pro is a comprehensive stock market analysis platform that provides real-time market data, advanced charting capabilities, and portfolio management tools. Built with React and integrated with multiple financial APIs, it offers users professional-grade analytics for informed trading decisions.",
      image: "project1-placeholder.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "WebSocket"],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
      github: "https://github.com/Prasannaram2k4",
      demo: "https://project-demo.com",
      features: [
        "Real-time stock price updates",
        "Advanced charting and technical analysis",
        "Portfolio tracking and management",
        "Market news integration",
        "Custom watchlists and alerts"
      ],
      category: "Full Stack Web"
    },
    {
      id: 2,
      title: "MarketPulse Bot",
      description: "Automated trading bot with intelligent market analysis and risk management",
      fullDescription: "MarketPulse Bot is an advanced automated trading system that leverages machine learning algorithms to analyze market trends, execute trades, and manage risk. Built with Python and integrated with multiple trading APIs, it provides automated trading solutions with comprehensive backtesting and performance analytics.",
      image: "project2-placeholder.jpg",
      technologies: ["Python", "Machine Learning", "Trading APIs", "Data Analysis", "Backtesting"],
      icons: [<FaPython />, <FaDatabase />, <FaReact />, <FaNodeJs />],
      github: "https://github.com/Prasannaram2k4/marketpulse-bot",
      demo: "https://github.com/Prasannaram2k4/marketpulse-bot",
      features: [
        "Automated trading execution",
        "Machine learning market analysis",
        "Risk management and position sizing",
        "Comprehensive backtesting framework",
        "Real-time performance monitoring"
      ],
      category: "Trading Bot"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 30,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.section 
      id="projects" 
      className="section-padding bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(100,100,100,0.02) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 80%, rgba(100,100,100,0.02) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 70%, rgba(100,100,100,0.02) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-light-primary dark:text-dark-primary"
            variants={cardVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-light-primary dark:via-dark-primary to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-light-secondary dark:text-dark-secondary text-lg max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Explore my latest projects showcasing modern web development, 
            mobile applications, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Horizontal Project Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group cursor-pointer ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row bg-gradient-to-br from-light-card/80 to-gray-50/80 dark:from-gray-800/40 dark:to-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-light-primary/20 dark:border-primary/20 hover:border-light-primary/40 dark:hover:border-primary/40 transition-all duration-500`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 h-64 lg:h-80 bg-gradient-to-br from-light-primary/10 to-gray-300/20 dark:from-primary/20 dark:to-gray-700/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-light-primary/5 to-transparent dark:from-primary/10 dark:to-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl mb-4 text-light-primary/60 dark:text-primary/60"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icons[0]}
                    </motion.div>
                    <p className="text-light-secondary dark:text-secondary text-sm">Click to view details</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-light-primary/70 dark:text-primary/70 text-sm font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                </motion.div>

                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-light-primary dark:text-primary mb-4 group-hover:text-light-secondary dark:group-hover:text-white transition-colors"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-light-secondary dark:text-secondary text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {project.icons.slice(0, 4).map((icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="p-2 bg-light-primary/10 dark:bg-primary/10 rounded-lg text-light-primary/70 dark:text-primary/70 hover:text-light-primary dark:hover:text-primary hover:bg-light-primary/20 dark:hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="text-light-primary/70 dark:text-primary/70 text-sm font-medium flex items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="mr-2">Click for details</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-light-card to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-light-primary/30 dark:border-primary/30"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start p-8 border-b border-light-primary/20 dark:border-primary/20">
                <div>
                  <span className="text-light-primary/70 dark:text-primary/70 text-sm font-semibold tracking-wider uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-light-primary dark:text-primary mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors p-2"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-light-primary dark:text-primary mb-4">About This Project</h4>
                  <p className="text-light-secondary dark:text-secondary text-lg leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-light-primary dark:text-primary mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-light-secondary dark:text-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-light-primary dark:text-primary mr-3">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-light-primary dark:text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-light-primary/10 dark:bg-primary/10 text-light-primary dark:text-primary rounded-lg text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-light-primary dark:text-primary rounded-lg transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-light-primary hover:bg-light-secondary dark:bg-primary dark:hover:bg-white text-light-bg dark:text-dark rounded-lg transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;