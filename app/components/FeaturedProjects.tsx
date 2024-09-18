'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const featuredProjects = [
  {
    id: 1,
    title: 'Major Project 1',
    description: 'A brief description of the project and its key features.',
    image: '/major-project1.jpg',
    link: '/projects/major-project-1'
  },
  {
    id: 2,
    title: 'Major Project 2',
    description: 'Another significant project showcasing your skills.',
    image: '/major-project2.jpg',
    link: 'https://external-project-link.com'
  },
  // Add more featured projects as needed
]

const FeaturedProject = ({ project }) => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative z-10 text-white text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
        <p className="text-xl mb-8">{project.description}</p>
        <Link href={project.link} className="btn-primary">
          View Project
        </Link>
      </div>
    </div>
  )
}

const FeaturedProjects = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${-(featuredProjects.length - 1) * 100}%`])

  return (
    <section ref={containerRef} className="bg-gray-900 h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        transition={{ ease: "easeInOut" }}
        className="h-full"
      >
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

export default FeaturedProjects