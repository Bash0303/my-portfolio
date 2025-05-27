import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          As a computer scientist, I utilize advanced techniques and technology to solve complex 
          problems and drive progress. With expertise in algorithms and a passion for learning, 
          I deliver robust solutions that enhance efficiency across various domains.
        </p>
      </motion.div>
    </div>
  )
}

export default About