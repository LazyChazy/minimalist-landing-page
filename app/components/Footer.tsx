import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FiGithub className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FiLinkedin className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FiTwitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer