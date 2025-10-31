import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, TestTube, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'J2EE', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 90 },
        { name: 'PL/SQL', level: 85 },
      ]
    },
    {
      title: 'Frontend',
      icon: <Palette size={24} />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Angular (8/9)', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'jQuery', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'D3.js', level: 70 },
      ]
    },
    {
      title: 'Backend Frameworks',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Spring MVC', level: 90 },
        { name: 'Spring Security', level: 85 },
        { name: 'Spring AOP', level: 80 },
        { name: 'Hibernate', level: 85 },
        { name: 'JPA', level: 90 },
      ]
    },
    {
      title: 'Microservices & Cloud',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'Spring Cloud', level: 85 },
        { name: 'AWS (EC2, S3, Lambda)', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Eureka', level: 80 },
        { name: 'Zuul', level: 75 },
        { name: 'Ribbon', level: 75 },
        { name: 'Hystrix', level: 70 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'Oracle', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Cassandra', level: 70 },
      ]
    },
    {
      title: 'DevOps & Testing',
      icon: <TestTube size={24} />,
      skills: [
        { name: 'Jenkins', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Maven', level: 85 },
        { name: 'JUnit', level: 85 },
        { name: 'Selenium', level: 75 },
        { name: 'Swagger', level: 80 },
        { name: 'JMeter', level: 75 },
        { name: 'SonarQube', level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gradient-to-b from-bg-dark to-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-text-dark mt-6 max-w-3xl mx-auto">
            Technical skills organized by category, showcasing my expertise across the full stack development spectrum.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold text-text-light">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-light font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bg-dark/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-light mb-6 text-center">Methodologies & Additional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Agile Development',
                'Scrum Methodology',
                'Test-Driven Development (TDD)',
                'CI/CD Pipelines',
                'RESTful API Design',
                'Microservices Architecture',
                'Event-Driven Architecture',
                'Load Testing & Performance Optimization'
              ].map((methodology, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                >
                  <span className="text-text-light font-medium">{methodology}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



