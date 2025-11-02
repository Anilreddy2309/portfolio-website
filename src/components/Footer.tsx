import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Anilreddy2309',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/anil-balireddy-5b8381146/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:anilbalireddy7@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Anil Balireddy</h3>
            <p className="text-text-dark text-sm">
              Full Stack Java Developer crafting scalable enterprise solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top Button */}
          <div className="text-center md:text-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/50"
            >
              <ArrowUp size={16} />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-text-dark text-sm">
                © 2024 Anil Balireddy. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-text-dark text-sm">
                Built with <span className="text-primary">React</span> + <span className="text-primary">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



