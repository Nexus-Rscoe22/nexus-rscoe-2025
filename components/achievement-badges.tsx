"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Code } from "lucide-react"

export default function AchievementBadges() {
  const achievements = [
    {
      title: "50+ Events",
      icon: <Calendar className="w-6 h-6 text-[#1E90FF]" />,
      value: 50,
      suffix: "+",
    },
    {
      title: "200+ Members",
      icon: <Users className="w-6 h-6 text-[#1E90FF]" />,
      value: 200,
      suffix: "+",
    },
    {
      title: "10K+ Lines of Code",
      icon: <Code className="w-6 h-6 text-[#1E90FF]" />,
      value: 10,
      suffix: "K+",
    },
  ]

  const CounterAnimation = ({ value, suffix }: { value: number; suffix: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
      const node = nodeRef.current
      if (!node) return

      const start = 0
      const end = value
      const duration = 2000
      const startTime = performance.now()

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        const currentValue = Math.floor(easeProgress * end)

        if (node) {
          node.textContent = `${currentValue}${suffix}`
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      requestAnimationFrame(updateCounter)
    }, [value, suffix])

    return <span ref={nodeRef}>0{suffix}</span>
  }

  return (
    <div className="bg-white dark:bg-[#2F2F2F] rounded-xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
        <h3 className="text-lg font-bold text-[#2F2F2F] dark:text-white">Club Achievements</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#1E90FF]/10 flex items-center justify-center mb-3">
                {achievement.icon}
              </div>
              <h4 className="text-lg font-bold text-[#2F2F2F] dark:text-white mb-1">{achievement.title}</h4>
              <p className="text-3xl font-bold text-[#1E90FF]">
                <CounterAnimation value={achievement.value} suffix={achievement.suffix} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

