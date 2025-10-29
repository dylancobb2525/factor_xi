'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Award, Beaker, Database, Download, ChevronDown, ChevronUp } from 'lucide-react'

interface ResourceLink { 
  title: string; 
  href: string; 
  category: string;
  author?: string;
  date?: string;
  organization?: string;
}

interface ResourceGroup { 
  title: string; 
  icon: React.ReactNode; 
  items: ResourceLink[] 
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showResources, setShowResources] = useState(false)

  const resources: ResourceLink[] = [
    {
      title: '2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes',
      href: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309',
      category: 'ACS Guidelines',
      author: 'ACC/AHA/ACEP/NAEMSP/SCAI',
      date: '2025'
    },
    {
      title: '2023 ESC Guidelines for the management of acute coronary syndromes',
      href: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-Coronary-Syndromes-ACS-Guidelines',
      category: 'ACS Guidelines',
      author: 'European Society of Cardiology',
      date: '2023'
    },
    {
      title: 'Guideline on pharmacological interventions for long-term secondary prevention after ischaemic stroke or transient ischaemic attack',
      href: 'https://eso-stroke.org/wp-content/uploads/ESOC-2022-Secondary-Prevention-Guidelines.pdf',
      category: 'Stroke Prevention',
      author: 'European Stroke Organisation',
      date: '2022'
    },
    {
      title: '2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack',
      href: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000375',
      category: 'Stroke Prevention',
      author: 'AHA/ASA',
      date: '2021'
    },
    {
      title: 'American and European Guideline Comparison for Ischemic Stroke and TIA: Key Points',
      href: 'https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/09/18/13/32/comparison-of-american',
      category: 'Stroke Prevention',
      author: 'ACC',
      date: '2024'
    },
    {
      title: 'Future of Stroke Prevention: 7 Updates in the 2024 AHA/ASA Primary Prevention of Stroke Guideline',
      href: 'https://www.jacc.org/doi/10.1016/j.jacadv.2025.101724',
      category: 'Stroke Prevention',
      author: 'JACC Advances',
      date: '2024'
    },
    {
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      href: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193',
      category: 'Atrial Fibrillation',
      author: 'ACC/AHA/ACCP/HRS',
      date: '2023'
    },
    {
      title: '2024 ESC Guidelines for the management of atrial fibrillation',
      href: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Atrial-Fibrillation',
      category: 'Atrial Fibrillation',
      author: 'European Society of Cardiology',
      date: '2024'
    },
    {
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation (PubMed)',
      href: 'https://pubmed.ncbi.nlm.nih.gov/38033089/',
      category: 'Atrial Fibrillation',
      author: 'ACC/AHA/ACCP/HRS',
      date: '2023'
    },
    {
      title: 'Comparison of the Latest ESC, ACC/AHA/ACCP/HRS, and CCS Guidelines on the Management of Atrial Fibrillation',
      href: 'https://www.jacc.org/doi/10.1016/j.jacep.2024.12.018',
      category: 'Atrial Fibrillation',
      author: 'JACC Clinical Electrophysiology',
      date: '2024'
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ACS Guidelines':
        return <Award size={18} className="text-blue-600" />
      case 'Stroke Prevention':
        return <Beaker size={18} className="text-teal-600" />
      case 'Atrial Fibrillation':
        return <Database size={18} className="text-purple-600" />
      default:
        return <FileText size={18} className="text-slate-600" />
    }
  }

  return (
    <section ref={ref} id="resource-center" className="pt-16 pb-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4s"></div>
        
        {/* Scientific Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0066CC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00A6B8 2px, transparent 2px)`,
            backgroundSize: '50px 50px, 80px 80px'
          }} />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Resource <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Center</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Clinical practice guidelines for acute coronary syndromes, secondary stroke prevention, and atrial fibrillation management.
          </p>
        </motion.div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowResources(!showResources)}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {showResources ? 'Hide Resources' : 'View Resources'}
            {showResources ? (
              <ChevronUp size={20} className="ml-2" />
            ) : (
              <ChevronDown size={20} className="ml-2" />
            )}
          </button>
        </motion.div>

        {/* Resources Grid */}
        {showResources && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* First Row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.slice(0, 2).map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[280px]"
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(resource.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 mt-1">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      {resource.category}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="space-y-1 mb-4 flex-grow">
                  <p className="text-xs text-slate-500">{resource.author}</p>
                  <p className="text-xs text-slate-500">{resource.date}</p>
                </div>

                {/* Bottom Section - Fixed position */}
                <div className="mt-auto pt-4">
                  {/* Divider Line */}
                  <div className="border-t border-gray-200 mb-4"></div>
                  
                  {/* Read More Link - Centered */}
                  <div className="text-center">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium"
                    >
                      Read more
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
            
            {/* Second Row - 4 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.slice(2, 6).map((resource, index) => (
                <motion.div
                  key={index + 2}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index + 2) * 0.05 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[280px]"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getCategoryIcon(resource.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 mt-1">
                          {resource.title}
                        </h3>
                        <p className="text-xs text-slate-600 mb-2">
                          {resource.category}
                        </p>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 mb-4 flex-grow">
                      <p className="text-xs text-slate-500">{resource.author}</p>
                      <p className="text-xs text-slate-500">{resource.date}</p>
                    </div>

                    {/* Bottom Section - Fixed position */}
                    <div className="mt-auto pt-4">
                      {/* Divider Line */}
                      <div className="border-t border-gray-200 mb-4"></div>
                      
                      {/* Read More Link - Centered */}
                      <div className="text-center">
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium"
                        >
                          Read more
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            
            {/* Third Row - 4 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.slice(6, 10).map((resource, index) => (
                <motion.div
                  key={index + 6}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index + 6) * 0.05 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[280px]"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getCategoryIcon(resource.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 mt-1">
                          {resource.title}
                        </h3>
                        <p className="text-xs text-slate-600 mb-2">
                          {resource.category}
                        </p>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 mb-4 flex-grow">
                      <p className="text-xs text-slate-500">{resource.author}</p>
                      <p className="text-xs text-slate-500">{resource.date}</p>
                    </div>

                    {/* Bottom Section - Fixed position */}
                    <div className="mt-auto pt-4">
                      {/* Divider Line */}
                      <div className="border-t border-gray-200 mb-4"></div>
                      
                      {/* Read More Link - Centered */}
                      <div className="text-center">
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium"
                        >
                          Read more
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}