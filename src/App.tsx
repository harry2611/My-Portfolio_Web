import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Heart, ExternalLink, Calendar, MapPin, Phone, Sun, Moon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Experience from '../components/Experience'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
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

      {/* Enhanced interactive floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles with theme-aware opacity */}
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

        {/* Enhanced geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 4 === 0 ? (darkMode ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30' : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20') :
              i % 4 === 1 ? (darkMode ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30' : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20') :
              i % 4 === 2 ? (darkMode ? 'bg-gradient-to-r from-indigo-500/30 to-blue-500/30' : 'bg-gradient-to-r from-indigo-400/20 to-blue-400/20') :
              (darkMode ? 'bg-gradient-to-r from-pink-500/30 to-indigo-500/30' : 'bg-gradient-to-r from-pink-400/20 to-indigo-400/20')
            } ${i % 2 === 0 ? 'rounded-lg' : 'rounded-full'} ${darkMode ? 'shadow-lg' : 'shadow-md'}`}
            style={{
              width: `${40 + (i % 4) * 20}px`,
              height: `${40 + (i % 4) * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, 0],
              rotate: i % 2 === 0 ? [45, 225, 405] : [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced interactive particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? 'bg-blue-400/60' : 'bg-blue-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, -250, -120, 0],
              opacity: [0, 0.6, 1, 0.6, 0],
              scale: [0, 1, 2, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Enhanced pulsing orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute rounded-full ${
              i % 2 === 0 ? (darkMode ? 'bg-blue-500/20' : 'bg-blue-500/15') : (darkMode ? 'bg-purple-500/20' : 'bg-purple-500/15')
            } blur-xl ${darkMode ? 'shadow-2xl' : 'shadow-lg'}`}
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${15 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: darkMode ? [0.4, 0.7, 0.4] : [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* New: Floating sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={`absolute ${darkMode ? 'text-yellow-300' : 'text-yellow-500'}`}
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Avatar */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Enhanced avatar container with dynamic border */}
              <motion.div
                className={`w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-1 ${
                  darkMode ? 'shadow-2xl shadow-blue-500/20' : 'shadow-xl shadow-blue-500/30'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className={`w-full h-full rounded-full ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center overflow-hidden`}>
                  {/* Enhanced placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative">
                    <motion.span 
                      className="text-4xl font-bold text-white z-10"
                      animate={{ 
                        textShadow: darkMode 
                          ? ['0 0 20px rgba(59, 130, 246, 0.8)', '0 0 30px rgba(139, 92, 246, 0.8)', '0 0 20px rgba(59, 130, 246, 0.8)']
                          : ['0 0 10px rgba(59, 130, 246, 0.6)', '0 0 20px rgba(139, 92, 246, 0.6)', '0 0 10px rgba(59, 130, 246, 0.6)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      HZ
                    </motion.span>
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced floating icons around avatar */}
              {[
                { icon: Code, angle: 0, radius: 80, color: darkMode ? "text-blue-400" : "text-blue-500" },
                { icon: Heart, angle: 90, radius: 85, color: darkMode ? "text-red-400" : "text-red-500" },
                { icon: Sparkles, angle: 180, radius: 80, color: darkMode ? "text-purple-400" : "text-purple-500" },
                { icon: Github, angle: 270, radius: 85, color: darkMode ? "text-gray-300" : "text-gray-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.color} ${
                    darkMode ? 'bg-gray-800/90 shadow-lg shadow-gray-900/50' : 'bg-white/90 shadow-lg'
                  } p-3 rounded-full transition-all duration-300`}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos((item.angle * Math.PI) / 180) * item.radius,
                    y: Math.sin((item.angle * Math.PI) / 180) * item.radius,
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: { duration: 12 + index * 3, repeat: Infinity, ease: "linear" },
                  }}
                  whileHover={{ scale: 1.3, y: -5 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
              ))}

              {/* New: Orbit rings */}
              <motion.div
                className={`absolute inset-0 border-2 ${
                  darkMode ? 'border-blue-400/20' : 'border-blue-400/30'
                } rounded-full`}
                style={{ width: '200px', height: '200px', left: '-32px', top: '-32px' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={`absolute inset-0 border ${
                  darkMode ? 'border-purple-400/15' : 'border-purple-400/20'
                } rounded-full`}
                style={{ width: '240px', height: '240px', left: '-52px', top: '-52px' }}
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced main heading */}
          <div className="space-y-6">
            <motion.h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span 
                className={darkMode ? 'text-gray-100' : 'text-gray-800'}
                animate={{ 
                  textShadow: darkMode 
                    ? ['0 0 20px rgba(255, 255, 255, 0.3)', '0 0 30px rgba(255, 255, 255, 0.5)', '0 0 20px rgba(255, 255, 255, 0.3)']
                    : ['none']
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Hi, I'm
              </motion.span>{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold"
                animate={{ 
                  backgroundImage: darkMode 
                    ? ['linear-gradient(45deg, #3b82f6, #8b5cf6, #6366f1)', 'linear-gradient(45deg, #8b5cf6, #6366f1, #3b82f6)', 'linear-gradient(45deg, #6366f1, #3b82f6, #8b5cf6)']
                    : ['linear-gradient(45deg, #2563eb, #7c3aed, #4f46e5)', 'linear-gradient(45deg, #7c3aed, #4f46e5, #2563eb)', 'linear-gradient(45deg, #4f46e5, #2563eb, #7c3aed)']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Harsh Zele
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-3 tracking-wide ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
              style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className={`w-8 h-8 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
              </motion.div>
              <motion.span 
                className={`bg-gradient-to-r ${
                  darkMode 
                    ? 'from-gray-100 to-gray-300' 
                    : 'from-gray-800 to-gray-600'
                } bg-clip-text text-transparent`}
                animate={{ 
                  textShadow: darkMode 
                    ? ['0 0 15px rgba(255, 255, 255, 0.2)', '0 0 25px rgba(255, 255, 255, 0.4)', '0 0 15px rgba(255, 255, 255, 0.2)']
                    : ['none']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Full Stack Developer
              </motion.span>
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Heart className={`w-8 h-8 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced description */}
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
            I craft{' '}
            <motion.span 
              className={`font-black ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
              whileHover={{ scale: 1.05 }}
            >
              digital experiences
            </motion.span>{' '}
            that blend creativity with functionality. 
            Passionate about building{' '}
            <motion.span 
              className={`font-black ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
              whileHover={{ scale: 1.05 }}
            >
              scalable web applications
            </motion.span>{' '}
            and bringing ideas to life through code.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button 
              onClick={scrollToAbout}
              className={`px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl ${
                darkMode ? 'shadow-2xl shadow-blue-500/30' : 'shadow-lg'
              } hover:shadow-2xl flex items-center gap-3 tracking-wide relative overflow-hidden group`}
              style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <span className="font-extrabold text-lg relative z-10">Explore My Work</span>
            </motion.button>

            <motion.button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={`px-10 py-5 ${
                darkMode 
                  ? 'bg-gray-800/90 text-white border-gray-600 hover:border-purple-400 shadow-xl shadow-gray-900/50' 
                  : 'bg-white text-gray-900 border-gray-300 hover:border-purple-500 shadow-lg'
              } font-bold rounded-xl border-2 hover:shadow-2xl flex items-center gap-3 tracking-wide relative overflow-hidden group backdrop-blur-sm`}
              style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button hover effect */}
              <motion.div
                className={`absolute inset-0 ${
                  darkMode ? 'bg-purple-900/30' : 'bg-purple-50'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Mail className="w-6 h-6" />
              </motion.div>
              <span className="font-extrabold text-lg relative z-10">Get In Touch</span>
            </motion.button>
            
            <motion.a 
              href="https://github.com/harry2611"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-10 py-5 ${
                darkMode 
                  ? 'bg-gray-700/90 text-white border-gray-500 hover:border-blue-400 shadow-xl shadow-gray-900/50' 
                  : 'bg-gray-50 text-gray-900 border-gray-400 hover:border-blue-500 shadow-lg'
              } font-bold rounded-xl border-2 hover:shadow-2xl flex items-center gap-3 tracking-wide relative overflow-hidden group backdrop-blur-sm`}
              style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button hover effect */}
              <motion.div
                className={`absolute inset-0 ${
                  darkMode ? 'bg-gray-600/50' : 'bg-blue-50'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <motion.div
                whileHover={{ rotate: [0, 360] }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <Github className="w-6 h-6" />
              </motion.div>
              <span className="font-extrabold text-lg relative z-10">View GitHub</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com/harry2611", color: darkMode ? "hover:text-gray-300" : "hover:text-gray-700", bg: darkMode ? "bg-gray-800/90" : "bg-white/90" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-zele/", color: darkMode ? "hover:text-blue-400" : "hover:text-blue-600", bg: darkMode ? "bg-gray-800/90" : "bg-white/90" },
              { icon: Mail, href: "mailto:zele@usc.edu", color: darkMode ? "hover:text-red-400" : "hover:text-red-500", bg: darkMode ? "bg-gray-800/90" : "bg-white/90" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${social.bg} ${
                  darkMode ? 'shadow-xl shadow-gray-900/50' : 'shadow-lg'
                } rounded-full hover:shadow-2xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } ${social.color} transition-all duration-300 backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                } relative overflow-hidden group`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                {/* Social button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                />
                <social.icon className="w-7 h-7 relative z-10" />
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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-600/5 rounded-full"
          animate={{ scale: [1, 0.8, 1], rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              Harsh Zele
            </span>
            <p className="text-gray-400 mt-2 flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-400" />
              Full Stack Developer
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: "GitHub", href: "https://github.com/harry2611", icon: Github },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/harsh-zele/", icon: Linkedin },
              { name: "Email", href: "mailto:zele@usc.edu", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <social.icon className="w-4 h-4" />
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © 2025 Harsh Zele. All rights reserved. Built with
            <Heart className="w-4 h-4 text-red-400" />
            using React & Tailwind CSS.
          </p>
        </motion.div>
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
