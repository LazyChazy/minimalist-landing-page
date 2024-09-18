'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A concise description of Project 1.',
    link: 'https://project1-link.com',
    github: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief overview of Project 2.',
    link: 'https://project2-link.com',
  },
  // Add more projects as needed
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Project List */}
          <div className="md:w-1/3">
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedProject.id === project.id
                        ? 'bg-gray-200'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex space-x-4">
                  {selectedProject.link && (
                    <Link 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-blue-500 hover:underline"
                    >
                      <FaExternalLinkAlt size={14} /> View Project
                    </Link>
                  )}
                  {selectedProject.github && (
                    <Link 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-700 hover:underline"
                    >
                      <FaGithub size={14} /> GitHub
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects