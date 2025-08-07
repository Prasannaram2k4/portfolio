import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.a 
          href="#hero"
          className="text-2xl font-mono font-bold text-light-primary dark:text-primary"
          whileHover={{ 
            scale: 1.1,
            textShadow: "0 0 8px rgba(59, 130, 246, 0.8)"
          }}
        >
          <span className="relative">
            PR
            <motion.span
              className="text-light-primary dark:text-primary"
            >
              .
            </motion.span>
          </span>
          
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Particle effect */}
          <motion.div
            className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"
            animate={{
              x: [0, 20, 40, 60, 40, 20, 0],
              y: [0, -5, -10, -5, 0, -3, 0],
              opacity: [0, 1, 0.5, 1, 0.5, 1, 0],
              scale: [0, 1, 0.5, 1, 0.5, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Second particle */}
          <motion.div
            className="absolute bottom-0 right-0 w-1 h-1 bg-gray-300 rounded-full"
            animate={{
              x: [0, -15, -30, -15, 0],
              y: [0, 5, 10, 5, 0],
              opacity: [0, 0.8, 1, 0.8, 0],
              scale: [0, 0.8, 1, 0.8, 0]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <a 
                href={link.href}
                className="text-light-primary dark:text-primary hover:text-light-secondary dark:hover:text-secondary transition-colors font-medium tracking-wide"
              >
                {link.name}
              </a>
              <motion.div
                className="h-0.5 bg-light-primary dark:bg-primary absolute bottom-0 left-0 right-0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-light-primary dark:text-primary text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-light-primary dark:text-primary hover:text-light-secondary dark:hover:text-secondary transition-colors py-2 font-medium"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;