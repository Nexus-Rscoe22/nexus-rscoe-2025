"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Trophy, Users, Zap } from "lucide-react"

export default function Roadmap() {
  const milestones = [
    {
      title: "Learn HTML/CSS",
      description: "Master the fundamentals of web structure and styling",
      icon: <Code className="w-8 h-8 text-[#1E90FF]" />,
    },
    {
      title: "Master JavaScript",
      description: "Develop interactive and dynamic web applications",
      icon: <Zap className="w-8 h-8 text-[#1E90FF]" />,
    },
    {
      title: "Build Real Projects",
      description: "Apply your skills to create portfolio-worthy websites",
      icon: <Trophy className="w-8 h-8 text-[#1E90FF]" />,
    },
    {
      title: "Hackathons",
      description: "Compete and collaborate in coding competitions",
      icon: <Rocket className="w-8 h-8 text-[#1E90FF]" />,
    },
    {
      title: "Career Prep",
      description: "Prepare for interviews and professional opportunities",
      icon: <Users className="w-8 h-8 text-[#1E90FF]" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="roadmap"
      className="py-20 bg-gradient-to-b from-white to-[#1E90FF]/5 dark:from-[#1C2526] dark:to-[#1E90FF]/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] font-medium text-sm mb-4"
          >
            YOUR JOURNEY
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#2F2F2F] dark:text-white mb-4"
          >
            Web Development Roadmap
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-3xl mx-auto">
            Follow our structured learning path to become a proficient web developer
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1E90FF]/30 hidden md:block"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-12 md:space-y-0 relative"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse text-right" : "text-left"
                }`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end">
                  <div
                    className={`bg-white dark:bg-[#2F2F2F] p-6 rounded-xl shadow-lg max-w-md ${
                      index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 rounded-full bg-[#1E90FF]/10">{milestone.icon}</div>
                      <h3 className="text-xl font-bold text-[#2F2F2F] dark:text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-[#2F2F2F]/80 dark:text-white/70">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#1E90FF] shadow-lg">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

