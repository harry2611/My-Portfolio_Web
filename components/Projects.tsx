import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Stock Price Visualizer",
      description: "Built an interactive web app using Python, Pandas, and Streamlit  to visualize 7-day stock trends with real-time data from the Twelve Data API, secured via environment variables and deployed on Render.",
      tech: ["Python", "Streamlit", "Pandas","Twelve Data API", "Render"],
      github: "https://github.com/harry2611/Stock-App",
      icon: "📈",
      pattern: "finance"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com/harry2611/Task-Management-App",
      icon: "📋",
      pattern: "tasks"
    },
    {
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/harshzele/weather-dashboard",
      icon: "🌤️",
      pattern: "weather"
    },
    {
      title: "Social Media App",
      description: "Full-featured social media platform with real-time messaging, post sharing, and user interactions.",
      tech: ["React Native", "Firebase", "Redux", "Node.js"],
      github: "https://github.com/harshzele/social-app",
      icon: "📱",
      pattern: "social"
    },
    {
      title: "Smart Feedback Analyzer",
      description: "Intelligent chatbot using natural language processing with machine learning capabilities and contextual responses.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com/harshzele/ai-chatbot",
      icon: "🤖",
      pattern: "ai"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS, featuring sleek dark theme, smooth Framer Motion animations, interactive UI, and optimized performance with Vite.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion","PostCSS", "Git","Vercel"],
      github: "https://github.com/harry2611/My-Portfolio_Web",
      icon: "💼",
      pattern: "portfolio"
    }
  ];

  const getProjectPattern = (pattern: string) => {
    switch (pattern) {
      case 'finance':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
            {/* Animated laptop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateX: [0, 5, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ perspective: "1000px" }}
              >
                {/* Laptop base */}
                <motion.div 
                  className="w-24 h-16 bg-gray-800/80 rounded-lg shadow-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                />
                {/* Laptop screen */}
                <motion.div 
                  className="absolute -top-12 left-1 w-22 h-14 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80"
                  animate={{ 
                    rotateX: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity 
                  }}
                >
                  {/* Screen content */}
                  <div className="w-full h-full bg-gradient-to-b from-blue-400/40 to-purple-500/40 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/60 rounded-sm flex flex-col gap-1 p-1">
                      <div className="w-3/4 h-1 bg-white/60 rounded"></div>
                      <div className="w-1/2 h-1 bg-white/40 rounded"></div>
                      <div className="w-2/3 h-1 bg-white/50 rounded"></div>
                    </div>
                  </div>
                </motion.div>
                {/* Keyboard detail */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-10 grid grid-cols-8 grid-rows-3 gap-0.5 opacity-40">
                  {[...Array(24)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-gray-600/60 rounded-sm"
                      animate={{ 
                        opacity: [0.4, 0.8, 0.4] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.1 
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Shopping cart overlay */}
            <div className="absolute top-6 right-6 opacity-30">
              <div className="w-10 h-10 border-3 border-white rounded-lg relative bg-white/10">
                <div className="absolute -top-3 -left-2 w-4 h-4 border-t-3 border-l-3 border-white transform rotate-45"></div>
              </div>
            </div>
          </div>
        );
      case 'tasks':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600">
            {/* Animated laptop with task management */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateY: [0, 3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Laptop base */}
                <div className="w-26 h-18 bg-gray-800/80 rounded-lg shadow-2xl">
                  {/* Trackpad */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-700/60 rounded border border-gray-600/40"></div>
                </div>
                {/* Laptop screen */}
                <div className="absolute -top-14 left-1 w-24 h-16 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80">
                  {/* Screen content - task list */}
                  <div className="w-full h-full bg-gradient-to-b from-green-400/30 to-blue-500/30 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/70 rounded-sm p-1 space-y-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-1"
                          animate={{ 
                            opacity: [0.4, 0.9, 0.4] 
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.5 
                          }}
                        >
                          <div className="w-1 h-1 bg-green-400/80 rounded-full"></div>
                          <div className="w-12 h-0.5 bg-white/60 rounded"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Checkmark overlay */}
            <div className="absolute top-6 right-6 opacity-40">
              <div className="w-8 h-8 border-3 border-white rounded-lg flex items-center justify-center bg-white/10">
                <div className="w-4 h-3 border-b-3 border-r-3 border-white transform rotate-45 -mt-1"></div>
              </div>
            </div>
          </div>
        );
      case 'weather':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600">
            {/* Animated laptop with weather dashboard */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateX: [0, -2, 0],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Laptop base */}
                <div className="w-24 h-16 bg-gray-800/80 rounded-lg shadow-2xl"></div>
                {/* Laptop screen */}
                <div className="absolute -top-12 left-1 w-22 h-14 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80">
                  {/* Weather dashboard screen */}
                  <div className="w-full h-full bg-gradient-to-b from-orange-400/30 to-pink-500/30 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/70 rounded-sm flex items-center justify-center relative">
                      {/* Weather sun icon */}
                      <motion.div 
                        className="w-6 h-6 bg-yellow-400/80 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360] 
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity 
                        }}
                      />
                      {/* Weather data bars */}
                      <div className="absolute bottom-1 left-1 flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-1 bg-white/60 rounded"
                            style={{ height: `${2 + i}px` }}
                            animate={{ 
                              opacity: [0.4, 0.9, 0.4] 
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Weather bars */}
            <div className="absolute bottom-6 left-6 opacity-40 flex gap-2">
              <div className="w-3 h-8 bg-white/80 rounded-full"></div>
              <div className="w-3 h-6 bg-white/60 rounded-full"></div>
              <div className="w-3 h-10 bg-white/80 rounded-full"></div>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600">
            {/* Animated laptop with social media */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateY: [0, -5, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Laptop base */}
                <div className="w-26 h-18 bg-gray-800/80 rounded-lg shadow-2xl"></div>
                {/* Laptop screen */}
                <div className="absolute -top-14 left-1 w-24 h-16 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80">
                  {/* Social media screen */}
                  <div className="w-full h-full bg-gradient-to-b from-pink-400/30 to-red-500/30 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/70 rounded-sm p-1">
                      {/* Social posts */}
                      <div className="space-y-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-1"
                            animate={{ 
                              opacity: [0.3, 0.8, 0.3] 
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.7 
                            }}
                          >
                            <div className="w-2 h-2 bg-pink-400/80 rounded-full"></div>
                            <div className="w-10 h-0.5 bg-white/50 rounded"></div>
                          </motion.div>
                        ))}
                      </div>
                      {/* Heart icons */}
                      <div className="absolute bottom-1 right-1 flex gap-0.5">
                        {[...Array(3)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-1 h-1 bg-red-400/80 rounded-full"
                            animate={{ 
                              scale: [1, 1.5, 1] 
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.3 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600">
            {/* Animated laptop with AI interface */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateX: [0, 3, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Laptop base */}
                <div className="w-24 h-16 bg-gray-800/80 rounded-lg shadow-2xl"></div>
                {/* Laptop screen */}
                <div className="absolute -top-12 left-1 w-22 h-14 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80">
                  {/* AI interface screen */}
                  <div className="w-full h-full bg-gradient-to-b from-purple-400/30 to-indigo-500/30 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/70 rounded-sm p-1 relative">
                      {/* Brain/AI icon */}
                      <motion.div 
                        className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400/80 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity 
                        }}
                      />
                      {/* Chat bubbles */}
                      <div className="space-y-1 mt-4">
                        {[...Array(2)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-8 h-1 bg-white/50 rounded"
                            animate={{ 
                              opacity: [0.3, 0.8, 0.3] 
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: i * 0.5 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-600">
            {/* Animated laptop with portfolio */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                animate={{ 
                  rotateY: [0, 4, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Laptop base */}
                <div className="w-26 h-18 bg-gray-800/80 rounded-lg shadow-2xl">
                  {/* Apple logo simulation */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/20 rounded-full"></div>
                </div>
                {/* Laptop screen */}
                <div className="absolute -top-14 left-1 w-24 h-16 bg-gray-900/90 rounded-t-lg border-2 border-gray-700/80">
                  {/* Portfolio screen */}
                  <div className="w-full h-full bg-gradient-to-b from-indigo-400/30 to-cyan-500/30 rounded-t-md p-1">
                    <div className="w-full h-full bg-gray-800/70 rounded-sm p-1">
                      {/* Portfolio sections */}
                      <div className="space-y-1">
                        {[...Array(4)].map((_, i) => (
                          <motion.div 
                            key={i} 
                            className="w-full h-0.5 bg-white/40 rounded"
                            style={{ width: `${70 - i * 10}%` }}
                            animate={{ 
                              opacity: [0.4, 0.8, 0.4] 
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.4 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Code brackets overlay */}
            <div className="absolute top-6 left-6 opacity-40 text-white text-3xl font-mono font-bold">{'<>'}</div>
            <div className="absolute bottom-6 right-6 opacity-40 text-white text-3xl font-mono font-bold">{'</>'}</div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700">
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <motion.div 
                className="w-20 h-20 border-4 border-white/80 rounded-xl shadow-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Enhanced background decorations with more effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        {/* Additional floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className={`absolute ${
              i % 4 === 0 ? 'w-4 h-4 bg-blue-400/10 rounded-full' :
              i % 4 === 1 ? 'w-3 h-12 bg-purple-400/10 rounded-full' :
              i % 4 === 2 ? 'w-6 h-6 bg-indigo-400/10 rounded-lg rotate-45' :
              'w-8 h-2 bg-cyan-400/10 rounded-full'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
        
        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-blue-400/30 dark:text-blue-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            ✨
          </motion.div>
        ))}
        
        {/* Code symbols floating */}
        {['</', '/>', '{}', '[]', '()', '=>'].map((symbol, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-2xl font-mono text-purple-400/20 dark:text-purple-300/30 font-bold"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-black text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3" 
            style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
            animate={{
              textShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 30px rgba(139, 92, 246, 0.4)', 
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-blue-600" />
            </motion.div>
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black">Projects</span>
            <motion.div
              animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              <Code className="w-12 h-12 text-purple-600" />
            </motion.div>
          </motion.h2>
          
          {/* Enhanced underline */}
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mb-6 rounded-full shadow-lg"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium" style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            Here are some of my <span className="font-bold text-gray-700 dark:text-gray-200">recent projects</span> that showcase my skills in <span className="font-bold text-gray-700 dark:text-gray-200">web development</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900/95 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 2 : -2,
              }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, 
                    ${index % 4 === 0 ? 'rgba(59, 130, 246, 0.2)' :
                      index % 4 === 1 ? 'rgba(34, 197, 94, 0.2)' :
                      index % 4 === 2 ? 'rgba(249, 115, 22, 0.2)' :
                      'rgba(168, 85, 247, 0.2)'
                    }
                  )`,
                  filter: 'blur(8px)',
                  zIndex: -1,
                }}
              />
              
              {/* Floating particles around card */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${index}-${i}`}
                  className="absolute w-1 h-1 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    x: [0, 5, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              <div className="h-48 relative overflow-hidden">
                {getProjectPattern(project.pattern)}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Enhanced project icon with animation */}
                <motion.div 
                  className="absolute top-4 left-4 text-4xl"
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, -10, 10, 0],
                    y: -5 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.icon}
                </motion.div>
                
                {/* Enhanced GitHub button */}
                <div className="absolute bottom-4 right-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group/btn relative overflow-hidden"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 opacity-0 group-hover/btn:opacity-100"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <Github className="w-5 h-5 relative z-10" />
                  </motion.a>
                </div>
                
                {/* Tech stack preview on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0, x: 20 }}
                  whileHover={{ scale: 1, x: 0 }}
                >
                  <div className="flex flex-wrap gap-1 max-w-24">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6 relative">
                {/* Card content sparkle effect */}
                <motion.div
                  className="absolute top-2 right-2 text-yellow-400/60"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  ⭐
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Enhanced tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        backgroundColor: index % 2 === 0 ? '#dbeafe' : '#f3e8ff'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * techIndex }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Enhanced project link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  whileHover={{ x: 8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Floating elements around button */}
          <div className="relative inline-block">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`btn-particle-${i}`}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${-20 + i * 8}px`,
                  top: `${-10 + (i % 2) * 20}px`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            
            <motion.a
              href="https://github.com/harry2611"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Enhanced GitHub icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              
              <span className="text-lg font-extrabold relative z-10">View All Projects on GitHub</span>
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
              
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 blur-md"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
