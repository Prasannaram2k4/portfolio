import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section 
      id="resume" 
      className="section-padding bg-gray-100 dark:bg-black relative overflow-hidden transition-colors duration-300"
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
                  Aspiring AI Engineer
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
                  Aspiring AI Engineer
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-8 space-y-1">
                  <div>B.E. Computer Science and Engineering</div>
                  <div>VSB College of Engineering Technical Campus</div>
                  <div>2022–2026 · CGPA 8.5/10</div>
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
                  I am a Computer Science and Engineering student focused on AI engineering and full-stack development.
                  I build practical applications around LLMs, retrieval-augmented generation, agentic workflows, and reliable APIs.
                </motion.p>

                <motion.p 
                  className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed mb-6"
                  whileInView={{
                    opacity: inView ? [0.8, 1, 0.8] : 0.8
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop", delay: 1 }}
                >
                  As a Software Engineering Intern at Evalbench (June–October 2025), I built AI-powered web applications with React,
                  improved REST API performance, and integrated external LLM providers into product workflows using Agile practices.
                </motion.p>

                <motion.p 
                  className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed mb-8"
                  whileInView={{
                    opacity: inView ? [0.8, 1, 0.8] : 0.8
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop", delay: 2 }}
                >
                  My work includes autonomous browser-based lead discovery, document Q&A with vector search, resume-to-job matching,
                  and financial analytics. I enjoy taking a new technical idea from a focused proof of concept to a usable product.
                </motion.p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Software Engineering Intern</h3>
                  <p className="text-gray-700 dark:text-gray-300">Evalbench · AI &amp; Full Stack Development · June–October 2025</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">React.js, REST APIs, external LLM integrations, and Agile development.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;