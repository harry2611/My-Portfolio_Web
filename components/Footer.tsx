import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Harsh Zele</h3>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 w-full text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Harsh Zele
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
