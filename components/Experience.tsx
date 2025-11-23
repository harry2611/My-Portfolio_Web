import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Award, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useState } from 'react'

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Lumina AI",
      location: "Los Angeles, CA",
      period: "May 2025 - Present",
      type: "Internship",
      description: "Developed a full-stack healthcare platform addressing post-surgical care inefficiencies through real-time risk alerts, integrated provider-patient calls, and automated scheduling, reducing patient follow-up delays by 30% and eliminating missed alerts.",
      achievements: [
        "Delivered 5+ interactive clinical dashboards using React and TypeScript, enhancing data visibility for clinicians and achieving sub-2-second load times across 500+ patient records.",
        "Devised JSON-based REST APIs with Node.js and PostgreSQL for patient data management, containerized services using Docker, and reduced deployment time by 40% to ensure scalable, reliable access.",
        "Integrated Twilio AI–powered call flows with AWS Lambda and S3 to automate patient reminders, reducing manual follow-ups by 35% and improving engagement and continuity of care.",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Docker", "AWS", "PostgreSQL"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      icon: "💼"
    },
    {
      title: "Software Development Intern",
      company: "Prudent Tech IT Solutions",
      location: "Mumbai, India",
      period: "Jan 2024 - Dec 2024",
      type: "Internship",
      description: "Contributed to the development of scalable front-end applications using React.js. Focused on building reusable UI components, improving performance, and integrating APIs for seamless user experiences.",
      achievements: [
        "Spearheaded cost and material management services using Spring Boot and Hibernate, streamlining data workflows and leveraging MySQL indexing to cut execution time by 40% through query optimization and caching.",
        " Implemented modular Kafka-based microservices and integrated Spring Boot APIs with Angular frontend, enhancing scalability, strengthening data-flow reliability, and accelerating CI/CD cycles by 25% under high traffic.",
        "Crafted a serverless API layer with AWS Lambda and API Gateway to enable on-demand functions, streamline integrations, eliminate redundant logic, and boost development velocity by 20%.",
      ],
      technologies: ["Java", "Spring Boot", "React", "JavaScript", "Angular", "AWS" "HTML & CSS", "MySQL", "Git"],
      gradient: "from-green-500 via-teal-500 to-blue-500",
      icon: "🚀"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced dark theme background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Animated mesh background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`exp-particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200, -100, 0],
              opacity: [0, 0.8, 1, 0.8, 0],
              scale: [0, 1, 1.5, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center relative">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
            >
              <Briefcase className="h-10 w-10 text-purple-400 drop-shadow-lg shadow-purple-400/50" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Work Experience
            </h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              My professional journey showcasing impactful contributions and continuous growth 
              in modern web development and team leadership.
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line with animated gradient and glow */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-px w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full shadow-lg shadow-purple-500/30 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            <motion.div
              variants={containerVariants}
              className="space-y-16"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title + experience.company}
                  variants={cardVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Enhanced Timeline dot with animation and glow */}
                  <motion.div 
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-900 z-20 shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${experience.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                    }}
                    animate={{
                      scale: hoveredCard === index ? 1.5 : 1,
                      rotate: hoveredCard === index ? 360 : 0,
                      boxShadow: hoveredCard === index ? 
                        '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' : 
                        '0 0 15px rgba(59, 130, 246, 0.4)'
                    }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      scale: 1.6,
                      boxShadow: '0 0 40px rgba(59, 130, 246, 1), 0 0 80px rgba(139, 92, 246, 0.6)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        background: `linear-gradient(135deg, ${experience.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                        filter: 'blur(4px)',
                      }}
                    />
                  </motion.div>

                  {/* Connecting line animation */}
                  <motion.div
                    className={`hidden md:block absolute top-1/2 w-8 h-0.5 z-10 ${
                      index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'
                    }`}
                    style={{
                      background: `linear-gradient(90deg, ${experience.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  ></motion.div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ 
                        y: -12, 
                        scale: 1.03,
                        transition: { duration: 0.3 } 
                      }}
                      className="group relative"
                    >
                      <Card className="bg-gray-900/95 backdrop-blur-xl border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden relative shadow-2xl hover:shadow-blue-500/25">
                        {/* Enhanced glow background */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${experience.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                          }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Enhanced floating particles effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-1 h-1 rounded-full ${
                                i % 3 === 0 ? 'bg-blue-400/60' : 
                                i % 3 === 1 ? 'bg-purple-400/60' : 'bg-pink-400/60'
                              } shadow-lg`}
                              style={{
                                left: `${10 + i * 12}%`,
                                top: `${10 + i * 8}%`,
                              }}
                              animate={{
                                y: hoveredCard === index ? [-15, 15, -15] : 0,
                                opacity: hoveredCard === index ? [0.4, 1, 0.4] : 0.2,
                                scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                              }}
                              transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>

                        <CardHeader className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="text-2xl"
                                animate={{
                                  rotate: hoveredCard === index ? [0, 15, -15, 0] : 0,
                                }}
                                transition={{ duration: 0.6 }}
                              >
                                {experience.icon}
                              </motion.div>
                              <motion.span 
                                className="px-4 py-2 text-sm rounded-full font-medium text-white shadow-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${experience.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {experience.type}
                              </motion.span>
                            </div>
                          </div>
                          
                          <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {experience.title}
                          </CardTitle>
                          
                          <CardDescription className="text-lg font-semibold text-blue-300 flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            {experience.company}
                          </CardDescription>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-300 mt-3">
                            <motion.div 
                              className="flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar className="h-4 w-4 text-blue-400" />
                              {experience.period}
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="h-4 w-4 text-green-400" />
                              {experience.location}
                            </motion.div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6 relative z-10">
                          <p className="text-gray-300 leading-relaxed font-medium">
                            {experience.description}
                          </p>

                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Award className="h-5 w-5 text-yellow-400" />
                              <h4 className="text-sm font-semibold text-white">
                                Key Achievements
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {experience.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start gap-3 text-sm text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.3, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  </motion.div>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  className="px-3 py-1.5 bg-gray-800/80 text-gray-200 text-xs rounded-full font-medium border border-gray-600/50 hover:border-blue-400/50 hover:bg-blue-900/30 transition-all duration-200"
                                  whileHover={{ 
                                    scale: 1.08,
                                    y: -2,
                                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                                  }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                  viewport={{ once: true }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </CardContent>

                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
                          }}
                        />
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Ready for New Opportunities
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and contribute to innovative projects. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://www.linkedin.com/in/harsh-zele/', '_blank')}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Connect on LinkedIn</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
