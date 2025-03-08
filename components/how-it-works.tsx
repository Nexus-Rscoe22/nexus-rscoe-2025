"use client"

import { motion } from "framer-motion"
import { Book, Code, Rocket } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Learn",
      description:
        "Attend workshops, follow tutorials, and participate in study groups to build your foundation in web development technologies.",
      icon: <Book className="w-12 h-12 text-[#1E90FF]" />,
    },
    {
      title: "Build",
      description:
        "Apply your knowledge by working on real projects, both individually and in teams, to strengthen your skills and portfolio.",
      icon: <Code className="w-12 h-12 text-[#1E90FF]" />,
    },
    {
      title: "Grow",
      description:
        "Receive mentorship, network with peers and professionals, and prepare for career opportunities in the industry.",
      icon: <Rocket className="w-12 h-12 text-[#1E90FF]" />,
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

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <section id="how-it-works" className="py-20 bg-[#1E90FF]/5 dark:bg-[#1E90FF]/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#1E90FF]"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] dark:text-[#FFD700] font-medium text-sm mb-4"
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#2F2F2F] dark:text-white mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-3xl mx-auto">
            Our three-step approach to help you become a successful web developer
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#2F2F2F] p-8 rounded-xl shadow-lg"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#1E90FF]/10"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] dark:text-white mb-4 text-center">{step.title}</h3>
              <p className="text-[#2F2F2F]/80 dark:text-white/70 text-center">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

