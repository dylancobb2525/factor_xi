'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, MapPin } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import Image from 'next/image'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const impactStats = [
    {
      icon: <Users size={32} className="text-blue-600" />,
      value: 0,
      suffix: '',
      label: 'Disease Impact Statistics',
      description: 'Statistics for Acute Coronary Syndromes, Secondary Stroke Prevention, and Atrial Fibrillation are available in the Key Statistics section below.',
      gradient: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <section ref={ref} id="comprehensive-hub" className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 500,
            }}
            animate={{
              y: [Math.random() * 500, Math.random() * 500, Math.random() * 500],
              x: [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image on the Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <Image 
                src="/hero.jpeg" 
                alt="Factor XI/XIa Pathway" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Clinician-Focused Hub for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Factor XI/XIa Pathway Inhibition
              </span>
            </h2>
            <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
              Join our community of cardiology, neurology, stroke specialists, and multidisciplinary healthcare professionals by exploring curated educational resources focused on the latest clinical trial data and best practices for Factor XI/XIa pathway inhibition in acute coronary syndromes, atrial fibrillation, and secondary stroke prevention.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
} 