import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="section-padding bg-light">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Resume
          </motion.h2>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-secondary mb-8">
              Want to see the full details of my experience and education?
              <br />Download my resume for a comprehensive overview.
            </p>
            
            <motion.a
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-6 py-3 bg-dark text-primary border-2 border-primary hover:bg-primary hover:text-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="mr-2" /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;