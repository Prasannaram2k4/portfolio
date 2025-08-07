import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "MarketPulse Bot",
      description: "A Discord bot to manage trading sessions with automated functionality for trader communities.",
      stack: ["Python", "discord.py", "pytz"],
      github: "https://github.com/Prasannaram2k4/marketpulse-bot",
      live: null,
      image: "marketpulse.png" // Placeholder for project image
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion.",
      stack: ["React", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/Prasannaram2k4/portfolio",
      live: null, // This will be your deployed portfolio site
      image: "portfolio.png" // Placeholder for project image
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light rounded-lg overflow-hidden border border-primary/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500"
            >
              <div className="h-48 bg-gray-800 relative flex items-center justify-center">
                <div className="text-xl font-mono text-primary/50">
                  {project.title}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-dark text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    <FaGithub size={18} className="mr-1" /> Code
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-primary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt size={16} className="mr-1" /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;