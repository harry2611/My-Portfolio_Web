import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Heart, ExternalLink, Calendar, MapPin, Phone, Sun, Moon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Experience from '../components/Experience'
import About from '../components/About'
import "./index.css";

const Navigation = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode 
          ? 'bg-gray-900/95 border-gray-700' 
          : 'bg-white/95 border-gray-200'
      } backdrop-blur-xl border-b transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="flex items-center gap-2">
              {/* Animated Logo Container */}
              <motion.div 
                className="relative w-10 h-10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Outer rotating ring */}
                <motion.div
                  className={`absolute inset-0 border-2 rounded-full ${
                    darkMode ? 'border-blue-400' : 'border-blue-600'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Professional Avatar Container */}
                <motion.div
                  className={`w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* Developer Avatar */}
                  <motion.div className="relative w-full h-full flex items-center justify-center">
                    {/* Face */}
                    <motion.div 
                      className={`w-5 h-5 rounded-full ${
                        darkMode ? 'bg-amber-100' : 'bg-amber-50'
                      } relative flex items-center justify-center`}
                      style={{ fontSize: '8px' }}
                    >
                      {/* Eyes */}
                      <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-1.5 right-1 w-0.5 h-0.5 bg-gray-800 rounded-full"></div>
                      
                      {/* Smile */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-0.5 border-b border-gray-800 rounded-full"></div>
                      
                      {/* Hair */}
                      <div className="absolute -top-0.5 left-0 right-0 h-1.5 bg-gray-800 rounded-t-full"></div>
                    </motion.div>
                    
                    {/* Waving Hand */}
                    <motion.div
                      className="absolute -right-1 -top-0.5 text-amber-300"
                      style={{ fontSize: '6px' }}
                      animate={{
                        rotate: [0, 15, -15, 15, 0],
                        scale: [1, 1.2, 1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      👋
                    </motion.div>
                  </motion.div>
                  
                  {/* Professional glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white opacity-0"
                    animate={{ 
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
                
                {/* Floating tech icons around avatar */}
                {[
                  { icon: '⚛️', delay: 0 },
                  { icon: '💻', delay: 0.5 },
                  { icon: '🚀', delay: 1 },
                  { icon: '⚡', delay: 1.5 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xs"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0'
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0, 1, 0],
                      x: [0, 20 + i * 5],
                      y: [0, -20 + i * 10]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
                
                {/* Code brackets animation */}
                <motion.div
                  className={`absolute -left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                  animate={{
                    x: [-2, 0, -2],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {'<'}
                </motion.div>
                
                <motion.div
                  className={`absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                  animate={{
                    x: [2, 0, 2],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  {'>'}
                </motion.div>
              </motion.div>
              
              {/* Animated Text */}
              <motion.div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Fira Code", "JetBrains Mono", monospace' }}
                  whileHover={{
                    backgroundPosition: "200% center",
                    transition: { duration: 0.5 }
                  }}
                >
                  harsh.dev
                </motion.span>
                <motion.div 
                  className={`h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                  className={`${
                    darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors relative`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: darkMode ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced dynamic background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/60 to-purple-900/70' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}></div>
      
      {/* Animated mesh gradient overlay with theme-aware colors */}
      <motion.div
        className={`absolute inset-0 ${darkMode ? 'opacity-40' : 'opacity-25'}`}
        animate={{
          background: darkMode ? [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)"
          ] : [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className={`absolute rounded-full ${
              i % 3 === 0 ? (darkMode ? 'bg-blue-400/20' : 'bg-blue-400/15') : 
              i % 3 === 1 ? (darkMode ? 'bg-purple-400/20' : 'bg-purple-400/15') : 
              (darkMode ? 'bg-indigo-400/20' : 'bg-indigo-400/15')
            } ${darkMode ? 'shadow-2xl' : 'shadow-lg'}`}
            style={{
              width: `${80 + i * 25}px`,
              height: `${80 + i * 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h1 
            className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight ${
              darkMode 
                ? 'text-white' 
                : 'text-gray-900'
            }`}
            style={{ 
              fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              textShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-black">Harsh Zele</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-semibold tracking-wide ${
              darkMode 
                ? 'text-gray-100' 
                : 'text-gray-900'
            }`}
            style={{ 
              fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              textShadow: darkMode ? '0 2px 12px rgba(0,0,0,0.5)' : '0 2px 8px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I craft digital experiences that blend creativity with functionality. 
            Passionate about building innovative web applications and bringing ideas to life through code.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 ${
                darkMode 
                  ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/harshzele", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harshzele", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harsh@example.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-white/50 text-gray-700 hover:bg-white hover:text-gray-900'
                } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <motion.button 
          onClick={scrollToAbout}
          className={`p-3 rounded-full ${
            darkMode 
              ? 'bg-gray-800/90 shadow-xl shadow-gray-900/50' 
              : 'bg-white/90 shadow-lg'
          } hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border ${
            darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
          } group`}
          whileHover={{ scale: 1.1, y: -2 }}
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className={`w-6 h-6 ${
              darkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'
            } transition-colors duration-300`} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/harshzele/ecommerce-platform",
      icon: "🛒",
      pattern: "shopping"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com/harshzele/task-manager",
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
      title: "AI Chat Bot",
      description: "Intelligent chatbot using natural language processing with machine learning capabilities and contextual responses.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com/harshzele/ai-chatbot",
      icon: "🤖",
      pattern: "ai"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Framer Motion, featuring interactive animations and dark mode.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/harshzele/portfolio",
      icon: "💼",
      pattern: "portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
    emailjs.init(publicKey);
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                } text-white`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-center font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 dark:text-red-400 text-center font-medium"
                >
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 Harsh Zele. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { icon: Github, href: "https://github.com/harshzele", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harshzele", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harsh@example.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
