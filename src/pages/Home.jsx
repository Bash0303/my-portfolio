import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

// Import your images
import picture1 from '../assets/images/picture1.jpg'
import picture2 from '../assets/images/picture2.jpg'
import picture3 from '../assets/images/picture3.jpg'

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [picture1, picture2, picture3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Bashir ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            I am <span className="text-blue-600 dark:text-blue-400">Bashir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            From Nigeria
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            A Computer Scientist & Web Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-4"
          >
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Hire Me
            </Link>

            <a
              href="https://wa.me/2349063836085"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home