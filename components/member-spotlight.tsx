"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

export default function MemberSpotlight() {
  const [currentMember, setCurrentMember] = useState(0)

  const members = [
    {
      name: "Emma Wilson",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      portfolio: "https://example.com",
      project: "Built an interactive dashboard for data visualization",
    },
    {
      name: "David Chen",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com",
      portfolio: "https://example.com",
      project: "Created a real-time chat application with WebSockets",
    },
    {
      name: "Sophia Rodriguez",
      role: "UI/UX Designer & Developer",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Figma", "React", "CSS Animation"],
      github: "https://github.com",
      portfolio: "https://example.com",
      project: "Designed and developed an e-commerce website",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev === members.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [members.length])

  const nextMember = () => {
    setCurrentMember((prev) => (prev === members.length - 1 ? 0 : prev + 1))
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev === 0 ? members.length - 1 : prev - 1))
  }

  return (
    <div className="bg-white dark:bg-[#2F2F2F] rounded-xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
        <h3 className="text-lg font-bold text-[#2F2F2F] dark:text-white">Member Spotlight</h3>
      </div>
      <div className="relative p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#1E90FF]">
              <Image
                src={members[currentMember].image || "/placeholder.svg"}
                alt={members[currentMember].name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#1E90FF] dark:text-[#1E90FF]">{members[currentMember].name}</h4>
              <p className="text-[#FFD700] font-medium mb-2">{members[currentMember].role}</p>
              <p className="text-[#2F2F2F]/80 dark:text-white/70 mb-3">{members[currentMember].project}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {members[currentMember].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={members[currentMember].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-[#2F2F2F]/80 dark:text-white/70 hover:text-[#1E90FF] dark:hover:text-[#1E90FF]"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={members[currentMember].portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-[#2F2F2F]/80 dark:text-white/70 hover:text-[#1E90FF] dark:hover:text-[#1E90FF]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevMember}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 dark:bg-[#2F2F2F]/80 shadow-md"
          aria-label="Previous member"
        >
          <ChevronLeft className="w-5 h-5 text-[#1E90FF]" />
        </button>
        <button
          onClick={nextMember}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 dark:bg-[#2F2F2F]/80 shadow-md"
          aria-label="Next member"
        >
          <ChevronRight className="w-5 h-5 text-[#1E90FF]" />
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMember(index)}
              className={`w-2 h-2 rounded-full ${currentMember === index ? "bg-[#1E90FF]" : "bg-[#1E90FF]/30"}`}
              aria-label={`Go to member ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

