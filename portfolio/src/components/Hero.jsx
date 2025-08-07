import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <p className="text-light-secondary dark:text-secondary text-lg mb-2 font-mono">Hello, I'm</p>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-light-primary dark:text-primary"
          >
            Prasannaram R R
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-2 text-light-secondary dark:text-secondary">
              Full-Stack Developer | Backend Focused
            </h2>
            <p className="text-lg text-light-secondary dark:text-secondary mb-4">
              Coimbatore, India
            </p>
            <motion.p 
              className="text-light-primary dark:text-primary text-lg font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Let's build something great – just hit send 📬
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/Prasannaram2k4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-light-primary dark:text-primary hover:text-light-secondary dark:hover:text-secondary transition-colors"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prasannaram-r-r-327b09249/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-light-primary dark:text-primary hover:text-light-secondary dark:hover:text-secondary transition-colors"
            >
              <FaLinkedin size={32} />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-light-primary dark:border-primary text-light-primary dark:text-primary hover:bg-light-primary dark:hover:bg-primary hover:text-light-bg dark:hover:text-dark transition-all duration-300 font-medium text-lg"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;