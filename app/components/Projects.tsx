// src/components/Projects.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import React from 'react'

const featuredProjects = [
  { id: 1, title: 'Major Project 1', description: 'Flagship project with extended description', image: '/major-project1.jpg', link: '#' },
  { id: 2, title: 'Major Project 2', description: 'Another significant project showcasing key skills', image: '/major-project2.jpg', link: '#' },
]

const regularProjects = [
  { id: 3, title: 'Project 3', description: 'Brief description', image: '/project3.jpg', link: '#' },
  // ... Add more projects here, up to 20+
]

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null)
  
    return (
    <section id="projects" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regularProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
              <a>  
                View Project
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects