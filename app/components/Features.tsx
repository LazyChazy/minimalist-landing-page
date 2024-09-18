// src/components/Features.js
'use client'

import { motion } from 'framer-motion'
import { FiLayout, FiCode, FiSmartphone } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const features = [
    {
      icon: <FiLayout className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Creating websites that look great on all devices'
    },
    {
      icon: <FiCode className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code'
    },
    {
      icon: <FiSmartphone className="h-6 w-6" />,
      title: 'User-Centric Approach',
      description: 'Focusing on the best possible user experience'
    }
  ]
const FeatureItem = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-50 p-6 rounded-lg shadow-md"
    >
      <div className="text-blue-500 mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features