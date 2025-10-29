'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

interface Faculty {
  name: string
  title: string
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
                  className={`object-cover object-top w-full h-full ${
                    faculty.name === 'Julia Brandts' ||
                    faculty.name === 'Pasquale Perrone-Filardi' ||
                    faculty.name === 'Ira J. Goldberg' ||
                    faculty.name === 'Christie Ballantyne' ||
                    faculty.name === 'Pam R. Taub'
                      ? 'scale-125'
                      : ''
                  }`}
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
      name: 'Robert A. Harrington',
      title: 'Stanford University',
      credentials: 'MD',
      institution: 'Stanford University'
    },
    {
      name: 'C. Michael Gibson',
      title: 'Harvard Medical School, Baim Institute',
      credentials: 'MD',
      institution: 'Harvard Medical School'
    },
    {
      name: 'Philippe Gabriel Steg',
      title: 'Université Paris-Cité',
      credentials: 'MD',
      institution: 'Université Paris-Cité, France'
    },
    {
      name: 'Jeffrey I. Weitz',
      title: 'McMaster University',
      credentials: 'MD',
      institution: 'McMaster University, Canada'
    },
    {
      name: 'Roxana Mehran',
      title: 'Mount Sinai',
      credentials: 'MD',
      institution: 'Mount Sinai, New York'
    },
    {
      name: 'Kenneth W. Mahaffey',
      title: 'Stanford University',
      credentials: 'MD',
      institution: 'Stanford University'
    },
    {
      name: 'Graeme J. Hankey',
      title: 'University of Western Australia',
      credentials: 'MD',
      institution: 'University of Western Australia'
    },
    {
      name: 'Shamir R. Mehta',
      title: 'McMaster University',
      credentials: 'MD',
      institution: 'McMaster University, Canada'
    },
    {
      name: 'Carolyn S. P. Lam',
      title: 'National Heart Centre Singapore',
      credentials: 'MBBS, PhD',
      institution: 'National Heart Centre Singapore'
    },
    {
      name: 'M. Cecilia Bahit',
      title: 'INECO Neurociencias',
      credentials: 'MD',
      institution: 'INECO Neurociencias'
    },
    {
      name: 'S. Claiborne Johnston',
      title: 'University of California, San Francisco',
      credentials: 'MD, PhD',
      institution: 'UCSF'
    },
    {
      name: 'Sneha S. Jain',
      title: 'Stanford University',
      credentials: 'MD, MBA',
      institution: 'Stanford University'
    },
    {
      name: 'Karen S. Pieper',
      title: 'Thrombosis Research Institute',
      credentials: 'MS',
      institution: 'London, United Kingdom'
    },
    {
      name: 'Wataru Shimizu',
      title: 'Nippon Medical School',
      credentials: 'MD, PhD',
      institution: 'Tokyo, Japan'
    },
    {
      name: 'Tatjana Potpara',
      title: 'University of Belgrade',
      credentials: 'MD, PhD',
      institution: 'Serbia'
    },
    {
      name: 'Christian T. Ruff',
      title: 'Brigham and Women\'s Hospital',
      credentials: 'MD, MPH',
      institution: 'Harvard Medical School'
    },
    {
      name: 'Hooman Kamel',
      title: 'Weill Cornell Medicine',
      credentials: 'MD, MS',
      institution: 'New York, NY'
    },
    {
      name: 'Basil S. Lewis',
      title: 'Lady Davis Carmel Medical Center',
      credentials: 'MD',
      institution: 'Haifa, Israel'
    },
    {
      name: 'Jan H. Cornel',
      title: 'Noordwest Ziekenhuisgroep',
      credentials: 'MD',
      institution: 'Alkmaar, The Netherlands'
    },
    {
      name: 'Peter R. Kowey',
      title: 'Lankenau Institute for Medical Research',
      credentials: 'MD',
      institution: 'Philadelphia, PA'
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
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">
            Expert Faculty & <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Steering Committee</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Our distinguished expert faculty brings together leading authorities in cardiology, thrombosis research, stroke prevention, and clinical trials from premier institutions worldwide.
          </p>
        </motion.div>

        {/* Faculty Grid - Wider layout for less vertical space */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={`faculty-${index}`} faculty={faculty} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
