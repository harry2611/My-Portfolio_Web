import { motion } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Globe, Server, Sparkles, Target, Rocket, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS, Framer Motion",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development", 
      description: "Node.js, Express, Python, PostgreSQL, MongoDB",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & Cloud",
      description: "AWS, Docker, Firebase, Supabase, Redis",
      color: "from-purple-500 to-violet-500",
      bgGlow: "bg-purple-500/10"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Prototyping",
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/10"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps",
      color: "from-orange-500 to-amber-500",
      bgGlow: "bg-orange-500/10"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "DevOps & Tools",
      description: "Git, GitHub Actions, Vercel, Netlify, VS Code",
      color: "from-indigo-500 to-blue-500",
      bgGlow: "bg-indigo-500/10"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced dark theme background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated mesh background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced floating geometric shapes with glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border ${
              i % 3 === 0 ? 'border-blue-400/30 shadow-lg shadow-blue-500/20' : 
              i % 3 === 1 ? 'border-purple-400/30 shadow-lg shadow-purple-500/20' : 
              'border-pink-400/30 shadow-lg shadow-pink-500/20'
            } ${i % 2 === 0 ? 'rounded-full' : 'rounded-2xl rotate-45'}`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
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
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
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
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
            >
              <Sparkles className="h-10 w-10 text-blue-400 drop-shadow-lg shadow-blue-400/50" />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              About Me
            </h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I’m a CS grad student at USC with a passion for full-stack development. 
                I’ve worked with frontend tools like React and TailwindCSS, and backend technologies 
                including Node.js, Firebase, Java with Spring Boot and Python.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
               From designing clean UIs to building secure APIs and deploying end-to-end apps, I enjoy working 
               across the stack. I'm currently sharpening my skills in backend systems and scalable architecture. 
               Always curious and driven, I love turning ideas into real, usable products through clean, maintainable code.
              </motion.p>


            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl">💻</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  🌐 Programming Languages
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML5', 'CSS3'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-3 text-center border border-blue-100 dark:border-blue-800 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  🧰 Frameworks & Libraries
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['React', 'Next.js', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'Streamlit'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 text-center border border-green-100 dark:border-green-800 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  🧪 Tools & Technologies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Webpack', 'Jenkins'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-3 text-center border border-orange-100 dark:border-orange-800 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cloud Platforms & DevOps */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ☁️ Cloud Platforms & DevOps
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Firebase', 'AWS', 'Google Cloud (GCP)', 'CI/CD Pipelines'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg p-3 text-center border border-purple-100 dark:border-purple-800 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Databases & Storage */}
              <motion.div
                variants={cardVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 lg:col-span-2"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  🛢️ Databases & Storage
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'H2DB'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg p-3 text-center border border-pink-100 dark:border-pink-800 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { duration: 0.3 } 
                }}
                className="group relative"
              >
                <Card className="h-full bg-gray-900/90 backdrop-blur-xl border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden relative shadow-2xl hover:shadow-blue-500/25">
                  {/* Enhanced glow background */}
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${skill.bgGlow}`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Enhanced floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${
                          i % 3 === 0 ? 'bg-blue-400/60' : 
                          i % 3 === 1 ? 'bg-purple-400/60' : 'bg-pink-400/60'
                        } shadow-lg`}
                        style={{
                          left: `${10 + i * 15}%`,
                          top: `${10 + i * 10}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div 
                      className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-2xl shadow-blue-500/25`}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-gray-300 leading-relaxed font-medium">
                      {skill.description}
                    </CardDescription>
                  </CardContent>

                  {/* Enhanced hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`,
                      boxShadow: 'inset 0 0 50px rgba(59, 130, 246, 0.1)',
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden"
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 30px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                Let's Build Something Amazing Together
              </motion.h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether it's a startup idea, enterprise solution, or open-source contribution, 
                let's make it happen!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start a Conversation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
