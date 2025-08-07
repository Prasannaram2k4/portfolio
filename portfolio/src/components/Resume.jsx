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
      className="section-padding bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
      whileInView={{
        background: [
          "linear-gradient(to bottom right, #111827, #000000)",
          "linear-gradient(to bottom right, #000000, #111827)",
          "linear-gradient(to bottom right, #111827, #000000)"
        ],
      }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
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
                className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full border-4 border-primary/30 flex items-center justify-center relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.6)",
                  boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl text-primary/60 font-bold">PR</div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Photo placeholder text */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-primary/40 bg-dark/80 px-2 py-1 rounded">
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
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Prasannaram R R
                </h1>
                <div className="text-lg text-primary/80 mb-6 leading-relaxed">
                  Backend & Full-Stack Developer
                </div>
                <div className="text-sm text-secondary mb-8 space-y-1">
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
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <motion.p 
                  className="text-secondary text-lg leading-relaxed mb-6"
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
                  className="text-secondary text-lg leading-relaxed mb-6"
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
                  className="text-secondary text-lg leading-relaxed mb-8"
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
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-gray-200 text-dark font-semibold rounded-lg hover:from-gray-200 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFileDownload className="mr-3" size={20} /> 
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>

              {/* Skills Highlight */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {['Python', 'Django', 'React.js', 'MongoDB', 'AWS', 'Docker'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-dark/80 backdrop-blur-sm rounded-lg p-3 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255,255,255,0.05)",
                      y: -2
                    }}
                    whileInView={{
                      rotateX: inView ? [0, 5, -5, 0] : 0
                    }}
                    viewport={{ once: false }}
                    transition={{ 
                      rotateX: { duration: 2, repeat: inView ? Infinity : 0, repeatType: "loop", delay: index * 0.2 },
                      hover: { duration: 0.2 }
                    }}
                  >
                    <span className="text-primary font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;