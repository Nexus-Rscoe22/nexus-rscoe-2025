"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Instructor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
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

  const mottoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#1C2526]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={mottoVariants} className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-8">
            Code. Collaborate. Conquer.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#2F2F2F] dark:text-white/90 max-w-3xl mx-auto mb-12"
          >
            To empower aspiring developers with skills, projects, and a supportive community to shape the digital world.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-4xl mx-auto">
            Nexus Web Development Club was founded with a simple mission: to create a space where web enthusiasts of all
            levels can come together, learn from each other, and build amazing projects. We believe in hands-on
            learning, peer collaboration, and pushing the boundaries of what's possible on the web.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/50 dark:bg-[#2F2F2F]/30 rounded-xl p-6 shadow-lg"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1E90FF] dark:text-[#1E90FF]">{member.name}</h3>
              <p className="text-[#2F2F2F]/80 dark:text-white/70">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

