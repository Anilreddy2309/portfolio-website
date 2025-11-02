import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Travel Platform',
      description: 'Built scalable backend services and dynamic interfaces for real-time travel deals using Java, Python, and React. Implemented AI algorithms for personalized recommendations.',
      features: [
        'RESTful APIs with 30% improved efficiency',
        'Third-party integrations for real-time data',
        'AI algorithms for recommendations',
        'Dynamic React interfaces with 15% better engagement'
      ],
      technologies: ['Java', 'Python', 'React', 'AWS', 'Microservices', 'MySQL'],
      image: '/projects/travel-platform.jpg',
      github: 'https://github.com/anilbalireddy/travel-platform',
      live: 'https://www.oneair.ai/',
      featured: true
    },
    {
      title: 'Microservices E-Commerce Platform',
      description: 'Developed microservices architecture with service discovery and API gateway using Spring Boot, Spring Cloud, and Apache Kafka.',
      features: [
        'Service discovery with Eureka',
        'API Gateway with Zuul',
        'Load balancing with Ribbon',
        'Circuit breaker with Hystrix',
        'Event-driven architecture with Kafka'
      ],
      technologies: ['Spring Boot', 'Spring Cloud', 'Kafka', 'Docker', 'MySQL'],
      image: '/projects/ecommerce-platform.jpg',
      github: 'https://github.com/anilbalireddy/ecommerce-platform',
      live: null,
      featured: true
    },
    {
      title: 'Enterprise Web Application',
      description: 'Full-stack enterprise application with secure authentication and responsive UI built with Angular and Spring MVC.',
      features: [
        'OAuth 2.0 authentication',
        'RESTful services',
        'Responsive Angular UI',
        'Hibernate ORM integration',
        'Oracle database integration'
      ],
      technologies: ['Angular', 'Spring MVC', 'Hibernate', 'Oracle', 'Bootstrap'],
      image: '/projects/enterprise-app.jpg',
      github: 'https://github.com/anilbalireddy/enterprise-app',
      live: null,
      featured: false
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Automated deployment pipeline for microservices with container orchestration and cloud deployment.',
      features: [
        'Jenkins pipeline automation',
        'Docker containerization',
        'Kubernetes orchestration',
        'Automated testing integration',
        'AWS cloud deployment'
      ],
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Maven'],
      image: '/projects/cicd-pipeline.jpg',
      github: 'https://github.com/anilbalireddy/cicd-pipeline',
      live: null,
      featured: false
    },
    {
      title: 'Real-time Data Processing System',
      description: 'Built a real-time data processing system using Apache Kafka and Spring Boot for handling high-volume data streams.',
      features: [
        'Real-time data streaming',
        'Kafka message processing',
        'Spring Boot microservices',
        'MongoDB integration',
        'Performance monitoring'
      ],
      technologies: ['Apache Kafka', 'Spring Boot', 'MongoDB', 'Redis', 'Docker'],
      image: '/projects/data-processing.jpg',
      github: 'https://github.com/anilbalireddy/data-processing',
      live: null,
      featured: false
    },
    {
      title: 'Cloud-Native API Gateway',
      description: 'Developed a cloud-native API gateway with authentication, rate limiting, and monitoring capabilities.',
      features: [
        'JWT authentication',
        'Rate limiting',
        'API monitoring',
        'Load balancing',
        'Cloud deployment'
      ],
      technologies: ['Spring Cloud Gateway', 'JWT', 'Redis', 'AWS', 'Prometheus'],
      image: '/projects/api-gateway.jpg',
      github: 'https://github.com/anilbalireddy/api-gateway',
      live: null,
      featured: false
    }
  ];

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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-bg-light to-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-text-dark mt-6 max-w-3xl mx-auto">
            A showcase of my recent projects demonstrating full-stack development expertise and modern technology implementations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card hover:border-primary/50 transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''} gap-6`}>
                {/* Project Image */}
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} h-64 rounded-lg overflow-hidden`}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjMUExQTJFIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyOCIgcj0iNDAiIGZpbGw9IiNGRjZCMzUiLz4KPHBhdGggZD0iTTE2MCAyMDBDMTYwIDE3MC4zIDE4NS4zIDE0NSAyMTUgMTQ1QzI0NC43IDE0NSAyNzAgMTcwLjMgMjcwIDIwMEgyNTBIMTYwWiIgZmlsbD0iI0ZGNkIzNSIvPgo8L3N2Zz4K"
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-text-light">{project.title}</h3>
                      {project.featured && (
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-text-dark mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-light mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-text-dark">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-bg-dark/50 text-text-light rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-white/10 hover:border-primary/50"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Anilreddy2309"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <span>View More Projects</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
