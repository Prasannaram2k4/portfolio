import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section 
      id="resume" 
      className="section-padding bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background elements - removed to fix theme consistency */}

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Photo and Name */}
            <motion.div 
              className="lg:col-span-1 text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: inView ? 1 : 0, 
                x: inView ? 0 : -50,
                rotateY: inView ? [0, 2, -2, 0] : 0
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8,
                rotateY: { duration: 4, repeat: inView ? Infinity : 0, repeatType: "loop" }
              }}
              ref={ref}
            >
              {/* Photo Placeholder */}
              <motion.div 
                className="w-64 h-64 mx-auto mb-8 bg-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 rounded-full border-4 border-gray-400 dark:border-blue-500 flex items-center justify-center relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(0,0,0,0.6)",
                  boxShadow: "0 0 30px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl text-gray-900 dark:text-blue-400 font-bold">PR</div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gray-900 dark:border-blue-500 opacity-0 group-hover:opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Photo placeholder text */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  Photo Space
                </div>
              </motion.div>

              {/* Name and Title */}
              <motion.div
                whileInView={{ 
                  scale: inView ? [1, 1.02, 1] : 1,
                }}
                viewport={{ once: false }}
                transition={{ duration: 2, repeat: inView ? Infinity : 0, repeatType: "loop" }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Prasannaram R R
                </h1>
                <div className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Full-Stack Developer | Backend Focused
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-8 space-y-1">
                  <div>Django • Django REST Framework • Python</div>
                  <div>React.js • REST APIs • Cloud</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: inView ? 1 : 0, 
                x: inView ? 0 : 50,
                y: inView ? [0, -2, 2, 0] : 0
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                y: { duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop" }
              }}
            >
              <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-300 dark:border-gray-600 shadow-lg">
                <motion.p 
                  className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed mb-6"
                  whileInView={{
                    opacity: inView ? [0.8, 1, 0.8] : 0.8
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop" }}
                >
                  I'm a Computer Science student passionate about backend and full-stack development. 
                  I specialize in designing scalable systems and building clean, maintainable code using 
                  Python and modern frameworks like Django and Django REST Framework.
                </motion.p>

                <motion.p 
                  className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed mb-6"
                  whileInView={{
                    opacity: inView ? [0.8, 1, 0.8] : 0.8
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop", delay: 1 }}
                >
                  My experience spans creating RESTful APIs, implementing JWT authentication, managing 
                  databases like MongoDB, and deploying applications on platforms like AWS, Render, and Vercel. 
                  On the frontend, I work with React.js to build responsive, user-focused interfaces.
                </motion.p>

                <motion.p 
                  className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed mb-8"
                  whileInView={{
                    opacity: inView ? [0.8, 1, 0.8] : 0.8
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop", delay: 2 }}
                >
                  I approach development with a problem-solving mindset, focusing on writing efficient code 
                  that's easy to scale and maintain. I enjoy learning new technologies and continuously 
                  improving the performance and usability of the applications I build.
                </motion.p>

                {/* Resume Download Button */}
                <motion.div 
                  className="flex justify-start"
                  whileInView={{
                    y: inView ? [0, -3, 3, 0] : 0
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 2, repeat: inView ? Infinity : 0, repeatType: "loop" }}
                >
                  <motion.a
                    href="/resume.pdf" 
                    download
                    className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFileDownload className="mr-3" size={20} /> 
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;