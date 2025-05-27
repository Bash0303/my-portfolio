import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              Design by <span className="font-bold">refresh.tech.hub</span>
            </p>
            <p className="text-sm">Copyright © {currentYear}</p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-400" />
              <a href="tel:09063836085" className="hover:text-blue-400 transition">
                09063836085
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:lardext.com2019@gmail.com" className="hover:text-blue-400 transition">
                lardext.com2019@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer