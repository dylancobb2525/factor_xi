'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

interface Faculty {
  name: string
  title?: string
  credentials: string
  institution?: string
  imageUrl?: string
}

interface FacultyPlaceholderProps {
  index: number
}

interface FacultyCardProps {
  faculty: Faculty
  index: number
}

function FacultyCard({ faculty, index }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-5 h-40">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-[74px] h-[74px] mb-3 flex-shrink-0">
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-slate-200 shadow-md bg-gradient-to-br from-blue-100 to-teal-100">
              {faculty.imageUrl ? (
                <Image
                  src={faculty.imageUrl}
                  alt={faculty.name}
                  width={74}
                  height={74}
                  className="object-cover object-top w-full h-full"
                  quality={100}
                  priority={index < 6}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-8 h-8 text-slate-400" />
                </div>
              )}
            </div>
          </div>
          
          {/* Faculty Info */}
          <div className="text-center">
            <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {faculty.name}
            </h3>
            <div className="text-xs font-medium text-slate-600 whitespace-nowrap overflow-hidden text-ellipsis">
              {faculty.credentials}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function FacultyPlaceholder({ index }: FacultyPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-16 h-16 mb-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
              <User className="w-8 h-8 text-slate-400" />
            </div>
          </div>
          
          {/* Placeholder Text */}
          <div className="text-center">
            <h3 className="heading-font font-semibold text-slate-400 text-sm leading-tight mb-1">
              Expert Placeholder
            </h3>
            <div className="text-xs font-medium text-slate-300">
              To Be Added
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Faculty data - Factor XI Learning Center Expert Faculty/Steering Committee
  const facultyMembers: Faculty[] = [
    {
      name: 'Valeria Caso',
      credentials: 'MD, PhD, FESO',
      imageUrl: '/headshots/val.png'
    },
    {
      name: 'C. Michael Gibson',
      credentials: 'MD',
      imageUrl: '/headshots/gib.png'
    },
    {
      name: 'Robert A. Harrington',
      credentials: 'MD',
      imageUrl: '/headshots/rob.png'
    },
    {
      name: 'S. Claiborne Johnston',
      credentials: 'PhD, MD, MPH',
      imageUrl: '/headshots/clay.png'
    },
    {
      name: 'Carolyn S. P. Lam',
      credentials: 'MBBS, PhD, FRCP, MS, FACC, FAMS, FESC',
      imageUrl: '/headshots/car.png'
    },
    {
      name: 'Roxana Mehran',
      credentials: 'MD',
      imageUrl: '/headshots/rox.png'
    },
    {
      name: 'Manesh R. Patel',
      credentials: 'MD',
      imageUrl: '/headshots/man.png'
    },
    {
      name: 'Tatjana Potpara',
      credentials: 'MD PhD',
      imageUrl: '/headshots/tat.png'
    },
    {
      name: 'Christian T. Ruff',
      credentials: 'MD, MPH',
      imageUrl: '/headshots/ruff.png'
    },
    {
      name: 'Mukul Sharma',
      credentials: 'MD MSc FRCPC',
      imageUrl: '/headshots/muk.png'
    },
    {
      name: 'Ashkan Shoamanesh',
      credentials: 'MD',
      imageUrl: '/headshots/ash.png'
    },
    {
      name: 'Jeffrey I. Weitz',
      credentials: 'MD',
      imageUrl: '/headshots/jeff.png'
    }
  ]

  return (
    <section ref={ref} id="faculty" className="py-14 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-8"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Expert Faculty & <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Steering Committee</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Our distinguished expert faculty brings together leading authorities in cardiology, thrombosis research, stroke prevention, and clinical trials from premier institutions worldwide.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={`faculty-${index}`} faculty={faculty} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
