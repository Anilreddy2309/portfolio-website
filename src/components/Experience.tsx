import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'OneAir.ai',
      position: 'Software Engineer',
      location: 'San Jose, CA',
      duration: 'July 2024 - Present',
      description: [
        'Developed scalable backend services using Java and Python, creating RESTful APIs that improved data handling efficiency by 30%',
        'Built dynamic web interfaces using React, JavaScript, HTML, and CSS, improving user engagement by 15%',
        'Designed and optimized SQL databases, enhancing query performance by 40%',
        'Integrated third-party APIs for real-time travel deals, increasing platform functionality',
        'Implemented CI/CD pipelines using Jenkins and Docker',
        'Worked with AWS services including EC2, S3, Lambda, and Elastic Beanstalk'
      ],
      technologies: ['Java', 'Python', 'React', 'Angular 9', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Microservices', 'MySQL', 'MongoDB']
    },
    {
      company: 'Jio Platforms Limited',
      position: 'Software Developer',
      location: 'Bangalore, India',
      duration: 'Sep 2020 - Dec 2022',
      description: [
        'Developed microservices-based applications using Spring Boot, Spring Cloud, and Apache Kafka',
        'Implemented RESTful web services and secured them with Spring Security and OAuth 2.0',
        'Built responsive front-end applications using Angular 8 and React',
        'Set up CI/CD pipelines and containerized applications using Docker',
        'Worked with Spring Cloud components: Eureka, Ribbon, Zuul, Hystrix',
        'Performed database operations using Spring Data JPA and MySQL',
        'Conducted load testing with JMeter and unit testing with JUnit'
      ],
      technologies: ['Java 8', 'Spring Boot', 'Angular 8', 'Spring Cloud', 'Apache Kafka', 'Docker', 'AWS Lambda', 'MySQL', 'Redis']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-bg-light to-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-light">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-text-dark">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-dark">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:w-2/3">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-light mb-4">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2 text-text-dark">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-light mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-light mb-4">Want to see more?</h3>
            <p className="text-text-dark mb-6">
              Download my complete resume to see all my projects, certifications, and detailed experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Anil_Balireddy_Resume.pdf';
                link.click();
              }}
              className="btn-primary"
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;



