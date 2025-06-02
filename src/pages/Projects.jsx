import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Departmental Course Allocation',
    description: 'A system for managing and allocating courses to faculty members in academic departments.'
  },
  {
    title: 'Attendance Management System',
    description: 'An automated solution for tracking and managing student or employee attendance.'
  },
  {
    title: 'Clearance Management System',
    description: 'An automated Clearance System that manage student record and review by Admin base on what student submmited for clearance .'
  },
  {
    title: 'Design and Implementation of Online Library Management System',
    description: 'An automated Library Management System that managed books for student and issue book.'
  },
  {
    title: 'Development of Automated predictive System for Bipolar Disorder using LSTM',
    description: 'This Project was developed with Python, it is a project that training system for prediction base on Dataset collected.'
  },
  {
    title: 'Carbon footprint Awareness Website with resources',
    description: 'A carbon Print Websites that educates individuals about their environmental impact and provides practical resources to help them reduce their carbon footprint.'
  },
  {
    title: 'Development of Capsule Network base on Bone tumor Detection',
    description: 'This Project was developed with Python, it is a project that training system for prediction base on Dataset collected.'
  },
  {
    title: 'Performance Comparison of Mutual Information and Particle Swarm Optimization features selection Algorithm on the Random Forrest',
    description: 'This Project was developed with Python, it implement Mutual Information and Particle Swarm Optimization algorithms for feature selection on a heart disase dataset.'
  },
  {
    title: 'My Portfolio',
    description: 'This responsive portfolio website built with React, Vite, and Tailwind CSS.'
  } 
  
]

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                  {index + 1}/{projects.length}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects