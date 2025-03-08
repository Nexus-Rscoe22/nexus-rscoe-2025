"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer id="contact" className="bg-[#2F2F2F] text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1E90FF] rounded-full">
                <span className="font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold">Nexus Web Dev Club</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A community for web development enthusiasts to learn, create, and innovate together. Join us on our
              mission to shape the future of the web.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#2F2F2F] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#2F2F2F] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#2F2F2F] transition-colors"
                aria-label="Discord"
              >
                <Discord className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-white/70 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-white/70 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#join" className="text-white/70 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Email: info@nexuswebdev.com</li>
              <li className="text-white/70">Phone: +1 (123) 456-7890</li>
              <li className="text-white/70">Address: 123 Web Street, Digital City, 10101</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Nexus Web Development Club. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#1E90FF] flex items-center justify-center shadow-lg hover:bg-[#FFD700] hover:text-[#2F2F2F] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}

