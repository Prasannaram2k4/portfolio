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
        scrolled ? 'bg-dark shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#hero"
          className="text-2xl font-mono font-bold text-primary relative overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            rotateY: 10,
            textShadow: "0 0 8px rgba(255,255,255,0.8)"
          }}
          animate={{
            rotateZ: [0, 2, -2, 0],
            textShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 4px rgba(255,255,255,0.3)",
              "0 0 8px rgba(255,255,255,0.5)",
              "0 0 4px rgba(255,255,255,0.3)",
              "0 0 0px rgba(255,255,255,0)"
            ]
          }}
          transition={{
            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="relative z-10">
            <motion.span
              animate={{
                color: ["#ffffff", "#e0e0e0", "#ffffff", "#f0f0f0", "#ffffff"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              P
            </motion.span>
            <motion.span
              animate={{
                color: ["#ffffff", "#f0f0f0", "#ffffff", "#e0e0e0", "#ffffff"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              R
            </motion.span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="text-primary"
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
                className="text-primary hover:text-secondary transition-colors font-medium tracking-wide"
              >
                {link.name}
              </a>
              <motion.div
                className="h-0.5 bg-primary absolute bottom-0 left-0 right-0"
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
          className="md:hidden text-primary text-2xl focus:outline-none"
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
          className="md:hidden bg-dark shadow-lg"
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
                  className="block text-primary hover:text-secondary transition-colors py-2 font-medium"
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