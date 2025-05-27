import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Graphic Design',
    description: 'Creating visually appealing designs for branding, marketing, and digital media.'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and user-friendly interfaces for web and mobile applications.'
  },
  {
    title: 'Web Development',
    description: 'Building responsive, fast, and secure websites and web applications.'
  },
  {
    title: 'Academic Research',
    description: 'Conducting in-depth research and analysis in computer science and related fields.'
  }
]

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        My Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services