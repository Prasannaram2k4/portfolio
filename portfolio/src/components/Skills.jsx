import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', level: 'Advanced', icon: 'javascript.svg' },
    { name: 'Python', level: 'Advanced', icon: 'python.svg' },
    { name: 'React', level: 'Intermediate', icon: 'react.svg' },
    { name: 'Node.js', level: 'Intermediate', icon: 'nodejs.svg' },
    { name: 'Django', level: 'Advanced', icon: 'django.svg' },
    { name: 'MongoDB', level: 'Intermediate', icon: 'mongodb.svg' },
    { name: 'Git', level: 'Intermediate', icon: 'git.svg' },
    { name: 'Docker', level: 'Beginner', icon: 'docker.svg' },
    { name: 'HTML5', level: 'Advanced', icon: 'html5.svg' },
    { name: 'CSS3', level: 'Intermediate', icon: 'css3.svg' },
    { name: 'TypeScript', level: 'Beginner', icon: 'typescript.svg' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: 'postgresql.svg' },
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
                  {/* This is a placeholder for the actual SVG icon */}
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center text-white">
                    {skill.name[0]}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-primary font-medium text-center">{skill.name}</p>
                  <p className="text-secondary text-sm mt-1">{skill.level}</p>
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