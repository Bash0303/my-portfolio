import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-600 dark:text-blue-400 text-2xl" />
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Phone</h3>
              <a 
                href="tel:09063836085" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                09063836085
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-600 dark:text-green-400 text-2xl" />
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">WhatsApp</h3>
              <a 
                href="https://wa.me/2349063836085" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Email</h3>
              <a 
                href="mailto:lardext.com2019@gmail.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                lardext.com2019@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact