import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, you would link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Anil_Balireddy_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 cyberpunk-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/80 via-bg-light/60 to-bg-dark/80"></div>
        
        {/* Animated particles/glow effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
            <span className="text-text-light">Hello, I'm </span>
            <span className="text-gradient">Anil</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-text-dark mb-8 leading-relaxed">
            I'm a <span className="text-primary font-semibold">Full Stack Java Developer</span> based in{' '}
            <span className="text-primary font-semibold">San Jose, CA</span> with{' '}
            <span className="text-primary font-semibold">5+ years</span> of experience building scalable enterprise applications.
          </p>
          
          <p className="text-lg md:text-xl text-text-dark mb-12 leading-relaxed">
            My expertise spans the entire software development lifecycle, with a focus on{' '}
            <span className="text-primary font-semibold">Java/J2EE</span>,{' '}
            <span className="text-primary font-semibold">Spring Boot</span>,{' '}
            <span className="text-primary font-semibold">microservices</span>, and modern JavaScript frameworks.
          </p>

          <p className="text-lg text-text-dark mb-12">
            Currently working at <span className="text-primary font-semibold">OneAir.ai</span>, where I build AI-powered travel solutions using{' '}
            <span className="text-primary font-semibold">Java</span>,{' '}
            <span className="text-primary font-semibold">Python</span>, and cloud technologies.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="btn-primary flex items-center gap-2"
          >
            <Download size={20} />
            Resume Download
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/anilbalireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-primary transition-colors duration-300"
          >
            <Github size={32} />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/anilbalireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={32} />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:anilbalireddy7@gmail.com"
            className="text-text-light hover:text-primary transition-colors duration-300"
          >
            <Mail size={32} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-text-light hover:text-primary transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



