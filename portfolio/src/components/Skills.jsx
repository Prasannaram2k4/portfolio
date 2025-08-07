import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFigma } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', icon: 'figma.svg' },
    { name: 'Python', icon: 'figma.svg' },
    { name: 'React', icon: 'figma.svg' },
    { name: 'Node.js', icon: 'figma.svg' },
    { name: 'Django', icon: 'figma.svg' },
    { name: 'MongoDB', icon: 'figma.svg' },
    { name: 'Git', icon: 'figma.svg' },
    { name: 'Docker', icon: 'figma.svg' },
    { name: 'HTML5', icon: 'figma.svg' },
    { name: 'CSS3', icon: 'figma.svg' },
    { name: 'TypeScript', icon: 'figma.svg' },
    { name: 'PostgreSQL', icon: 'figma.svg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-light rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 h-28 relative overflow-hidden">
                <div className="text-4xl mb-2 text-primary group-hover:scale-90 transition-all duration-300">
                  <FaFigma className="w-12 h-12 text-primary" />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-primary font-medium text-center">{skill.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;