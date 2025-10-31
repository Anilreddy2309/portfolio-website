import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Target, Star } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const aboutInfo = [
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Jose, CA',
    },
    {
      icon: <Briefcase size={24} />,
      label: 'Current Role',
      value: 'Software Engineer at OneAir.ai',
    },
    {
      icon: <Target size={24} />,
      label: 'Expertise',
      value: 'Java, Spring Boot, Microservices, React, AWS',
    },
    {
      icon: <Star size={24} />,
      label: 'Interests',
      value: 'Full Stack Development, Cloud Architecture, AI Integration',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-bg-dark to-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">About me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-text-dark leading-relaxed mb-6">
                I'm a <span className="text-primary font-semibold">Full Stack Java Developer</span> with over{' '}
                <span className="text-primary font-semibold">5 years</span> of experience designing and developing 
                enterprise-level applications. I specialize in building robust, scalable solutions using{' '}
                <span className="text-primary font-semibold">Java</span>,{' '}
                <span className="text-primary font-semibold">Spring Boot</span>,{' '}
                <span className="text-primary font-semibold">microservices architecture</span>, and modern web technologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-text-dark leading-relaxed">
                My journey in software development has taken me from{' '}
                <span className="text-primary font-semibold">Bangalore, India</span> to the{' '}
                <span className="text-primary font-semibold">San Francisco Bay Area</span>, where I currently work on 
                cutting-edge AI and travel technology solutions.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              {aboutInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card flex items-center gap-3"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <p className="text-sm text-text-dark font-medium">{info.label}</p>
                    <p className="text-text-light font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjMUExQTJFIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiNGRjZCMzUiLz4KPHBhdGggZD0iTTEwMCAyNDBDMTAwIDIwNS4zIDEyNS4zIDE4MCAxNjAgMTgwQzE5NC43IDE4MCAyMjAgMjA1LjMgMjIwIDI0MEgyMDBIMTAwWiIgZmlsbD0iI0ZGNkIzNSIvPgo8L3N2Zz4K"
                  alt="Anil Balireddy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/50 rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
