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
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // For now, just reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">Email</h4>
                <a href="mailto:prasannaram978@gmail.com" className="text-secondary hover:text-primary transition-colors">
                  prasannaram978@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaLinkedin className="text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/prasannaram-r-r-327b09249/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  linkedin.com/in/prasannaram-r-r-327b09249
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaGithub className="text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">GitHub</h4>
                <a 
                  href="https://github.com/Prasannaram2k4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  github.com/Prasannaram2k4
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-light text-primary border border-primary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-primary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-light text-primary border border-primary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-light text-primary border border-primary/20 p-3 focus:outline-none focus:border-primary transition-colors"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="px-6 py-3 bg-dark text-primary border-2 border-primary hover:bg-primary hover:text-dark transition-all duration-300 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;