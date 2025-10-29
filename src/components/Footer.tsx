'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="bg-gray-200 text-gray-700 py-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-center py-6">
          <Image src="/glc.webp" alt="GLC Logo" width={160} height={48} className="h-12 w-auto object-contain" />
        </div>
        <div className="text-center text-gray-500 text-sm">
          © 2025 Factor XI Learning Center. All rights reserved.
        </div>
      </div>
    </footer>
  )
}