import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiDjango, 
  SiMongodb, 
  SiGit, 
  SiDocker, 
  SiHtml5, 
  SiCss3, 
  SiTypescript, 
  SiPostgresql 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Python', icon: SiPython },
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Django', icon: SiDjango },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'PostgreSQL', icon: SiPostgresql },
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
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
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
              <div className="bg-light rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 h-20 relative overflow-hidden">
                <div className="text-2xl mb-1 text-primary group-hover:scale-90 transition-all duration-300">
                  {React.createElement(skill.icon, { className: "w-8 h-8 text-primary" })}
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