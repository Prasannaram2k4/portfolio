import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  SiPostgresql,
  SiOpenjdk 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [activeCategory, setActiveCategory] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const skillCategories = useMemo(() => [
    {
      title: "Languages",
      description: "Programming languages I'm proficient in for building robust applications",
      color: "from-gray-700 to-gray-900",
      glowColor: "shadow-gray-500/20",
      borderColor: "border-gray-500",
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: SiOpenjdk },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      description: "Modern frameworks and libraries I use for efficient development",
      color: "from-gray-600 to-gray-800",
      glowColor: "shadow-gray-400/20",
      borderColor: "border-gray-400",
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Django', icon: SiDjango },
      ]
    },
    {
      title: "Databases",
      description: "Database technologies for reliable data storage and management",
      color: "from-gray-500 to-gray-700",
      glowColor: "shadow-gray-300/20",
      borderColor: "border-gray-300",
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Essential tools and technologies for modern development workflow",
      color: "from-gray-800 to-black",
      glowColor: "shadow-white/10",
      borderColor: "border-gray-600",
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
      ]
    }
  ], []);

  // Typewriter effect for category descriptions
  useEffect(() => {
    const text = skillCategories[activeCategory].description;
    setDisplayText('');
    setTypewriterIndex(0);
    
    const timer = setInterval(() => {
      setTypewriterIndex(prevIndex => {
        if (prevIndex < text.length) {
          setDisplayText(text.slice(0, prevIndex + 1));
          return prevIndex + 1;
        } else {
          clearInterval(timer);
          return prevIndex;
        }
      });
    }, 30);

    return () => clearInterval(timer);
  }, [activeCategory, skillCategories]);

  return (
    <motion.section 
      id="skills" 
      ref={ref}
      className="section-padding bg-light-bg dark:bg-dark transition-colors duration-300 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto relative z-10">
        {/* Animated background layers */}
        <motion.div 
          className="absolute inset-0 -z-10"
          whileInView={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            ]
          }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute inset-0 -z-20"
          whileInView={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.02, 1],
          }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </motion.div>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-light-primary dark:text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            My Technical Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Text and Category Buttons */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ 
              opacity: inView ? 1 : 0,
              x: inView ? [0, -3, 3, -2, 2, 0] : [-50, 0],
              scale: inView ? [1, 1.01, 0.99, 1] : [0.9, 1]
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              opacity: { duration: 0.8 },
              x: { duration: 2, repeat: inView ? Infinity : 0, repeatType: "loop" },
              scale: { duration: 3, repeat: inView ? Infinity : 0, repeatType: "reverse" }
            }}
          >
            {/* Description Text */}
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {skillCategories[activeCategory].title}
              </motion.h3>
              
              <motion.div 
                className="text-secondary text-lg leading-relaxed min-h-[4rem]"
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block">
                  {displayText}
                  <motion.span
                    animate={{ opacity: typewriterIndex < skillCategories[activeCategory].description.length ? [1, 0] : 1 }}
                    transition={{ duration: 0.8, repeat: typewriterIndex < skillCategories[activeCategory].description.length ? Infinity : 0, repeatType: "reverse" }}
                    className="text-primary ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </motion.div>
            </div>

            {/* Category Navigation Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary mb-6">Technology Stack:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden ${
                      activeCategory === index
                        ? `${category.borderColor} ${category.glowColor} shadow-lg bg-gradient-to-r ${category.color}`
                        : 'border-gray-600 hover:border-gray-400 hover:shadow-gray-400/10 hover:shadow-lg'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                    
                    <div className="relative z-10">
                      <h5 className="font-bold text-sm text-primary mb-1">{category.title}</h5>
                      <p className="text-xs text-secondary opacity-80">{category.skills.length} Technologies</p>
                    </div>

                    {/* Active indicator */}
                    {activeCategory === index && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills Display */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ 
              opacity: inView ? 1 : 0,
              x: inView ? [0, 3, -3, 2, -2, 0] : [50, 0],
              scale: inView ? [1, 1.01, 0.99, 1.01, 0.99, 1] : [0.9, 1]
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              opacity: { duration: 0.8 },
              x: { duration: 2.5, repeat: inView ? Infinity : 0, repeatType: "loop" },
              scale: { duration: 4, repeat: inView ? Infinity : 0, repeatType: "reverse" }
            }}
            ref={ref}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative cursor-pointer"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ 
                      opacity: inView ? 1 : 0, 
                      y: inView ? 0 : 50, 
                      scale: inView ? 1 : 0.8,
                      rotateX: inView ? [0, 2, -2, 0] : 0
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      rotateX: { duration: 3, repeat: inView ? Infinity : 0, repeatType: "loop" }
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      y: -5,
                      rotateX: 5,
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} border ${skillCategories[activeCategory].borderColor} border-opacity-30 hover:border-opacity-60 transition-all duration-300 group-hover:${skillCategories[activeCategory].glowColor} group-hover:shadow-xl group-hover:shadow-white/5 backdrop-blur-sm h-32 overflow-hidden`}>
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm" />
                      
                      {/* Floating glow orb */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div 
                          className="w-full h-full bg-primary rounded-full"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>

                      {/* Icon */}
                      <div className="flex flex-col items-center justify-center h-full">
                        <motion.div 
                          className="text-4xl mb-3 text-white group-hover:text-primary transition-colors duration-300 drop-shadow-lg"
                          whileHover={{ 
                            x: [-1, 1, -1, 1, 0],
                            y: [-1, 1, -1, 1, 0],
                            scale: [1, 1.1, 1],
                            filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                            transition: { 
                              x: { duration: 0.2 },
                              y: { duration: 0.2 },
                              scale: { duration: 0.3 },
                              filter: { duration: 0.3 }
                            }
                          }}
                        >
                          {React.createElement(skill.icon, { className: "w-10 h-10" })}
                        </motion.div>
                        <h6 className="text-white text-sm font-semibold text-center group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h6>
                      </div>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-primary"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          style={{
                            background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'xor'
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;