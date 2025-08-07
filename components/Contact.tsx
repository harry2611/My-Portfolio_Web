import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Star, Sparkles, Heart, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser'

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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "zharsh2611@gmail.com",
      href: "mailto:zharsh2611@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone", 
      value: "+1 (213) 245-8177",
      href: "tel:+12132458177"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Los Angeles, CA",
      href: "https://maps.google.com/?q=Los+Angeles,+CA"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      href: "https://github.com/harry2611",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/harsh-zele/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      href: "https://twitter.com/_harryy_26", 
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Enhanced floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating sparkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-300"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3" style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            <Mail className="w-12 h-12 text-blue-600" />
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black">Touch</span>
            <Heart className="w-12 h-12 text-red-500" />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium" style={{ fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            I'm always open to discussing <span className="font-bold text-gray-700 dark:text-gray-200">new opportunities</span>, interesting projects, or just having a chat about <span className="font-bold text-gray-700 dark:text-gray-200">technology</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              Let's Connect
            </h3>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "zharsh2611@gmail.com", href: "mailto:zharsh2611@gmail.com", color: "bg-red-100 dark:bg-red-900" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harsh-zele/", href: "https://www.linkedin.com/in/harsh-zele/", color: "bg-blue-100 dark:bg-blue-900" },
                { icon: Github, label: "GitHub", value: "github.com/harry2611", href: "https://github.com/harry2611", color: "bg-gray-100 dark:bg-gray-900" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center`}>
                    <contact.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{contact.label}</p>
                    <motion.a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.value}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Contact Methods */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I typically respond to emails within <span className="font-semibold text-blue-600">24 hours</span>. 
                For urgent matters, feel free to reach out via LinkedIn for a faster response.
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form with Dark Glass Design */}
          <motion.div 
            className="bg-white dark:bg-gray-900/95 rounded-xl shadow-lg p-8 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            {/* Animated floating elements around form */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input 
                  type="text" 
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="What's this about?"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-200 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg"
                >
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Failed to send message. Please try again or contact me directly at zharsh2611@gmail.com
                  </p>
                </motion.div>
              )}
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
