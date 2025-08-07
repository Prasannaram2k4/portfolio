import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-light-secondary dark:text-secondary text-sm">
              © {currentYear} Prasannaram R R. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Prasannaram2k4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prasannaram-r-r-327b09249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;