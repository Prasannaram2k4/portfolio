import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitting(false);
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
        <motion.section
      id="contact" 
      ref={ref}
      className="section-padding bg-light-bg dark:bg-dark relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto relative z-10">
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-light-primary dark:text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-light-primary dark:via-primary to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: inView ? 96 : 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-light-secondary dark:text-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ 
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : -50
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ 
              opacity: { duration: 0.6 },
              x: { duration: 0.6 }
            }}
            className="space-y-8"
          >
            <div className="bg-light-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-light-secondary/20 dark:border-primary/20 shadow-lg">
              <h3 className="text-2xl font-bold text-light-primary dark:text-primary mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-light-primary/5 dark:hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div 
                    className="text-light-primary dark:text-primary mt-1 p-3 bg-light-primary/10 dark:bg-primary/10 rounded-full group-hover:bg-light-primary/20 dark:group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaEnvelope size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-light-primary dark:text-primary mb-1">Email</h4>
                    <a 
                      href="mailto:prasannaram978@gmail.com" 
                      className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors text-lg"
                    >
                      prasannaram978@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-light-primary/5 dark:hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div 
                    className="text-light-primary dark:text-primary mt-1 p-3 bg-light-primary/10 dark:bg-primary/10 rounded-full group-hover:bg-light-primary/20 dark:group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-light-primary dark:text-primary mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/prasannaram-r-r-327b09249/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors"
                    >
                      Connect with me professionally
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-light-primary/5 dark:hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div 
                    className="text-light-primary dark:text-primary mt-1 p-3 bg-light-primary/10 dark:bg-primary/10 rounded-full group-hover:bg-light-primary/20 dark:group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaGithub size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-light-primary dark:text-primary mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Prasannaram2k4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-light-secondary dark:text-secondary hover:text-light-primary dark:hover:text-primary transition-colors"
                    >
                      Check out my projects
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ 
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : 50
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.1 },
              x: { duration: 0.6, delay: 0.1 }
            }}
          >
            <div className="bg-light-card dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-light-secondary/20 dark:border-primary/20 shadow-lg">
              <h3 className="text-2xl font-bold text-light-primary dark:text-primary mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-light-primary dark:text-primary mb-3 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-light-card dark:bg-gray-900/50 text-light-primary dark:text-primary border border-light-secondary/30 dark:border-primary/30 rounded-lg p-4 focus:outline-none focus:border-light-primary dark:focus:border-primary focus:bg-white dark:focus:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-light-primary dark:text-primary mb-3 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-light-card dark:bg-gray-900/50 text-light-primary dark:text-primary border border-light-secondary/30 dark:border-primary/30 rounded-lg p-4 focus:outline-none focus:border-light-primary dark:focus:border-primary focus:bg-white dark:focus:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-light-primary dark:text-primary mb-3 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full bg-light-card dark:bg-gray-900/50 text-light-primary dark:text-primary border border-light-secondary/30 dark:border-primary/30 rounded-lg p-4 focus:outline-none focus:border-light-primary dark:focus:border-primary focus:bg-white dark:focus:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-light-primary to-gray-400 dark:from-primary dark:to-gray-200 text-light-bg dark:text-dark hover:from-gray-400 hover:to-light-primary dark:hover:from-gray-200 dark:hover:to-primary shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="w-5 h-5 border-2 border-gray-600 dark:border-gray-300 border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;