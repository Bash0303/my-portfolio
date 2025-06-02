import { useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [activeTab, setActiveTab] = useState('mission')

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

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-3 font-medium ${activeTab === 'mission' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 font-medium ${activeTab === 'education' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Educational Background
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 font-medium ${activeTab === 'skills' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          >
            Skills
          </button>
        </div>

        {/* Tabs Content */}
        <div className="p-8">
          {activeTab === 'mission' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a computer scientist, I utilize advanced techniques and technology to solve complex problems and drive progress. With expertise in algorithms and a passion for learning, I deliver robust solutions that enhance efficiency across various domains.
              </p>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Educational Background</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Primary School Leaving Certificate</li>
                <li>National Business and Technical Examination Council (NABTEB)</li>
                <li>National Diploma in Computer Science (Upper Credit)</li>
                <li>Higher National Diploma in Computer Science (Upper Credit)</li>
              </ul>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Skills</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">Microsoft Office</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        MS Word, PowerPoint, Excel
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">Design</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        CorelDRAW
                      </td>
                    </tr>
                     <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">UI/UX</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        FIGMA
                      </td>
                    </tr>
                     <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">Frontend</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        HTML, CSS, JavaScript, ReactJS & Tailwind CSS
                      </td>
                    </tr>
                     <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">Backend</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        PHP & MYSQL
                      </td>
                    </tr>
                     <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">Academic Research</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">
                        Abilitiy to Explore many Sites
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About