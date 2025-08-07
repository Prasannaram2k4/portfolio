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

  const skillCategories = [
    {
      title: "Languages",
      description: "Programming languages I'm proficient in",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-100",
      borderColor: "border-blue-400",
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      description: "Frontend and backend frameworks I work with",
      color: "from-green-500 to-green-700",
      textColor: "text-green-100",
      borderColor: "border-green-400",
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Django', icon: SiDjango },
      ]
    },
    {
      title: "Databases",
      description: "Database technologies I use for data storage",
      color: "from-purple-500 to-purple-700",
      textColor: "text-purple-100",
      borderColor: "border-purple-400",
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Development tools and deployment technologies",
      color: "from-orange-500 to-orange-700",
      textColor: "text-orange-100",
      borderColor: "border-orange-400",
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
      ]
    }
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
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Technical Skills
          </motion.h2>
          <motion.p 
            className="text-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here's a comprehensive overview of my technical expertise, organized by category. 
            I'm passionate about full-stack development and continuously learning new technologies.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-secondary">{category.description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`bg-gradient-to-br ${category.color} rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 h-24 relative overflow-hidden border ${category.borderColor} border-opacity-50`}>
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-all duration-300">
                        {React.createElement(skill.icon, { className: `w-8 h-8 ${category.textColor}` })}
                      </div>
                      <p className={`text-xs font-medium ${category.textColor} text-center`}>{skill.name}</p>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm`}>
                        <p className={`${category.textColor} font-bold text-sm text-center px-2`}>{skill.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;