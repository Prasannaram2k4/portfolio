import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiExpress,
  SiDjango, 
  SiMongodb, 
  SiMysql,
  SiGit, 
  SiGithubactions,
  SiDocker, 
  SiPostgresql,
  SiOpenjdk,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiHuggingface,
  SiLangchain,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFirebase,
  SiRedis,
  SiFigma,
  SiLinux,
  SiNginx,
  SiPostman,
  SiRender,
  SiVercel
} from 'react-icons/si';
import { FaCloud, FaCode, FaRobot } from 'react-icons/fa';

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
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript (ES6+)', icon: SiJavascript },
        { name: 'Java', icon: SiOpenjdk },
        { name: 'C++', icon: SiCplusplus },
        { name: 'SQL', icon: SiPostgresql },
      ]
    },
    {
      title: "Frameworks & Libraries",
      description: "Web frameworks and libraries for building full-stack applications and APIs",
      color: "from-gray-600 to-gray-800",
      glowColor: "shadow-gray-400/20",
      borderColor: "border-gray-400",
      skills: [
        { name: 'React.js', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: SiFlask },
        { name: 'Django', icon: SiDjango },
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Applied AI skills spanning retrieval, language models, NLP, and intelligent automation",
      color: "from-gray-500 to-gray-700",
      glowColor: "shadow-gray-300/20",
      borderColor: "border-gray-300",
      skills: [
        { name: 'RAG Pipelines', icon: SiPython },
        { name: 'LLM Integration', icon: SiPython },
        { name: 'Agentic AI', icon: SiPython },
        { name: 'Prompt Engineering', icon: SiPython },
        { name: 'NLP', icon: SiPython },
        { name: 'Vector Search', icon: SiPython },
        { name: 'Hugging Face', icon: SiHuggingface },
        { name: 'Fine-tuning', icon: SiHuggingface },
        { name: 'Embeddings', icon: SiPython },
        { name: 'LangChain', icon: SiLangchain },
        { name: 'FAISS', icon: SiPython },
        { name: 'scikit-learn', icon: SiScikitlearn },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas },
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
        { name: 'MySQL', icon: SiMysql },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Redis', icon: SiRedis },
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Deployment, infrastructure, and CI/CD tools used to ship and operate applications",
      color: "from-gray-600 to-gray-800",
      glowColor: "shadow-gray-400/20",
      borderColor: "border-gray-400",
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Render', icon: SiRender },
        { name: 'Nginx', icon: SiNginx },
        { name: 'AWS EC2', icon: FaCloud },
        { name: 'AWS S3', icon: FaCloud },
      ]
    },
    {
      title: "Tools & Workflow",
      description: "Everyday development tools for testing, browser automation, design, and collaboration",
      color: "from-gray-600 to-gray-800",
      glowColor: "shadow-gray-400/20",
      borderColor: "border-gray-400",
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Postman', icon: SiPostman },
        { name: 'Playwright', icon: FaRobot },
        { name: 'Figma', icon: SiFigma },
        { name: 'Linux', icon: SiLinux },
        { name: 'VS Code', icon: FaCode },
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
      className="section-padding bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
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
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
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
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Description Text */}
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {skillCategories[activeCategory].title}
              </motion.h3>
              
              <motion.div 
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed min-h-[4rem]"
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
                    className="text-blue-600 dark:text-blue-400 ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </motion.div>
            </div>

            {/* Category Navigation Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Technology Stack:</h4>
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
                      <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{category.title}</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 opacity-80">{category.skills.length} Technologies</p>
                    </div>

                    {/* Active indicator */}
                    {activeCategory === index && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"
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
            transition={{ duration: 0.7, ease: "easeOut" }}
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
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ 
                      scale: 1.04,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} border ${skillCategories[activeCategory].borderColor} border-opacity-30 hover:border-opacity-60 transition-all duration-300 group-hover:${skillCategories[activeCategory].glowColor} group-hover:shadow-xl group-hover:shadow-white/5 backdrop-blur-sm h-32 overflow-hidden`}>
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm" />
                      
                      {/* Subtle hover accent */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-full bg-blue-600 rounded-full" />
                      </div>

                      {/* Icon */}
                      <div className="flex flex-col items-center justify-center h-full">
                        <motion.div
                          className="text-4xl mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg"
                          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                          {React.createElement(skill.icon, { className: "w-10 h-10" })}
                        </motion.div>
                        <h6 className="text-gray-900 dark:text-white text-sm font-semibold text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h6>
                      </div>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
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