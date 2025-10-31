'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Activity, AlertTriangle, Heart, TrendingUp, Users, Droplet, ShieldAlert } from 'lucide-react'

interface StatisticCardProps {
  icon: React.ReactNode
  value: string
  description: string
  index: number
  color: string
  cite?: { label: string; href: string }
}

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  // Initialize with appropriate starting values
  const getInitialValue = (val: string) => {
    if (val.includes('in')) {
      const match = val.match(/(\d+)\s+in\s+(\d+)/)
      return match ? `${match[1]} in 0` : val
    } else if (val.includes('M')) {
      return '0.0M'
    } else if (val.includes('x')) {
      if (val.includes('-')) {
        const match = val.match(/(\d+)-(\d+)x/)
        return match ? `${match[1]}-0x` : val
      }
      return '0x'
    } else if (val.includes(',')) {
      return '0'
    }
    return val
  }

  const [displayValue, setDisplayValue] = useState(getInitialValue(value))

  useEffect(() => {
    if (!inView) return

    // Parse different value formats
    if (value.includes('in')) {
      // Handle "1 in 4" or "1 in 22"
      const match = value.match(/(\d+)\s+in\s+(\d+)/)
      if (match) {
        const target = parseInt(match[2])
        let current = 0
        const duration = 800
        const steps = 50
        const increment = target / steps
        const stepTime = duration / steps

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(`${match[1]} in ${Math.floor(current)}`)
          }
        }, stepTime)

        return () => clearInterval(timer)
      }
    } else if (value.includes('M')) {
      // Handle "1.2M"
      const target = parseFloat(value)
      let current = 0
      const duration = 800
      const steps = 50
      const increment = target / steps
      const stepTime = duration / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(`${current.toFixed(1)}M`)
        }
      }, stepTime)

      return () => clearInterval(timer)
    } else if (value.includes('x')) {
      // Handle "5x" or "6-15x"
      if (value.includes('-')) {
        const match = value.match(/(\d+)-(\d+)x/)
        if (match) {
          const target = parseInt(match[2])
          let current = 0
          const duration = 800
          const steps = 50
          const increment = target / steps
          const stepTime = duration / steps

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(`${match[1]}-${Math.floor(current)}x`)
            }
          }, stepTime)

          return () => clearInterval(timer)
        }
      } else {
        const target = parseInt(value)
        let current = 0
        const duration = 800
        const steps = 50
        const increment = target / steps
        const stepTime = duration / steps

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(`${Math.floor(current)}x`)
          }
        }, stepTime)

        return () => clearInterval(timer)
      }
    } else if (value.includes('%')) {
      // Handle "0.07-0.5%"
      setDisplayValue(value) // These are too small to animate meaningfully
    } else if (value.includes(',')) {
      // Handle "795,000"
      const target = parseInt(value.replace(/,/g, ''))
      let current = 0
      const duration = 800
      const steps = 50
      const increment = target / steps
      const stepTime = duration / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current).toLocaleString())
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return <>{displayValue}</>
}

function StatisticCard({ icon, value, description, index, color, cite }: StatisticCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className={`relative ${color} rounded-2xl p-5 shadow-lg transition-all duration-300 border border-white/20 h-full flex items-center`}> 
        <div className="flex items-start space-x-3 w-full">
          <div className="p-2.5 bg-white/60 rounded-xl flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-1.5">
              <AnimatedValue value={value} inView={inView} />
            </div>
            <p className="text-slate-700 text-xs lg:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        {cite && (
          <div className="absolute bottom-3 right-4 text-[10px] text-slate-500">
            <a href={cite.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {cite.label}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const statistics = [
    {
      icon: <AlertTriangle size={24} className="text-red-700" />,
      value: "1 in 4",
      description: "Every year, 1 in 4 people worldwide die from conditions related to thrombosis",
      color: "bg-gradient-to-br from-red-50 to-orange-50"
    },
    {
      icon: <Heart size={24} className="text-rose-700" />,
      value: "1.2M",
      description: "People in the U.S. are hospitalized with acute coronary syndromes yearly, with recurrence rates of 4.4-6.7%",
      color: "bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      icon: <Users size={24} className="text-blue-700" />,
      value: "1 in 22",
      description: "Americans are estimated to be affected by atrial fibrillation, with untreated patients 5x more likely to have a stroke than those without",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <Activity size={24} className="text-purple-700" />,
      value: "5th leading cause of death",
      description: "795,000 stroke events occur yearly in America, with the risk of recurrent stroke in someone who has already had one is 6-15x higher than the risk in the general population",
      color: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      icon: <Droplet size={24} className="text-red-600" />,
      value: "Increased ICH Risk",
      description: "Amongst DOAC users' risk of ICH is 0.07-0.5%, which becomes impactful at scale in aging populations",
      color: "bg-gradient-to-br from-red-50 to-rose-50"
    }
  ]

  return (
    <section ref={ref} id="statistics" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Key <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Statistics</span>
          </h2>
        <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
          Understanding the scope and impact of thrombotic and bleeding complications.
        </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 mb-8 auto-rows-fr">
          {statistics.map((stat, index) => (
            <div key={index} className={
              index < 3 
                ? "xl:col-span-4" 
                : index === 3
                  ? "xl:col-span-6 xl:col-start-1" 
                  : "xl:col-span-6"
            }>
              <StatisticCard icon={stat.icon} value={stat.value} description={stat.description} index={index} color={stat.color} />
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-xl border border-blue-400/30">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <ShieldAlert size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Key Takeaway</h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  Bleeding is a significant problem and we need solutions that address this across Atrial Fibrillation, Acute Coronary Syndromes, and Secondary Stroke Prevention.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}