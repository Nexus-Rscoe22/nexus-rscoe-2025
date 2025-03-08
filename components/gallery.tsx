"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/gallery/web-development-workshop.jpg",
      alt: "Workshop on Web Development Fundamentals",
      category: "workshops",
    },
    {
      src: "/gallery/hackathon-winners.jpg",
      alt: "Hackathon Winners Celebration",
      category: "hackathons",
    },
    {
      src: "/gallery/community-networking.jpg",
      alt: "Community Networking Event",
      category: "community",
    },
    {
      src: "/gallery/javascript-workshop.jpg",
      alt: "JavaScript Advanced Techniques Workshop",
      category: "workshops",
    },
    {
      src: "/gallery/hackathon-presentation.jpg",
      alt: "Hackathon Project Presentation",
      category: "hackathons",
    },
    {
      src: "/gallery/community-gathering.jpg",
      alt: "Community Social Gathering",
      category: "community",
    },
    {
      src: "/gallery/ui-ux-workshop.jpg",
      alt: "UI/UX Design Workshop",
      category: "workshops",
    },
    {
      src: "/gallery/hackathon-collaboration.jpg",
      alt: "Hackathon Team Collaboration",
      category: "hackathons",
    },
    {
      src: "/gallery/annual-meetup.jpg",
      alt: "Community Annual Meetup",
      category: "community",
    },
    {
      src: "/gallery/fullstack-workshop.jpg",
      alt: "Full-Stack Development Workshop",
      category: "workshops",
    },
    {
      src: "/gallery/hackathon-finals.jpg",
      alt: "Innovation Hackathon Finals",
      category: "hackathons",
    },
    {
      src: "/gallery/leadership-summit.jpg",
      alt: "Community Leadership Summit",
      category: "community",
    },
  ]

  const filteredImages = filter === "all" ? images : images.filter((image) => image.category === filter)

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

  const filters = [
    { id: "all", label: "All" },
    { id: "workshops", label: "Workshops" },
    { id: "hackathons", label: "Hackathons" },
    { id: "community", label: "Community" },
  ]

  return (
    <section id="gallery" className="py-20 bg-[#1E90FF]/5 dark:bg-[#1E90FF]/10">
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
            className="inline-block px-4 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] dark:text-[#FFD700] font-medium text-sm mb-4"
          >
            MEMORIES
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#2F2F2F] dark:text-white mb-4"
          >
            Photo Gallery
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-3xl mx-auto mb-8"
          >
            Explore moments from our events, workshops, and community gatherings
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === item.id
                    ? "bg-[#1E90FF] text-white"
                    : "bg-white dark:bg-[#2F2F2F] text-[#2F2F2F] dark:text-white hover:bg-[#1E90FF]/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-[#2F2F2F]/50 hover:bg-[#2F2F2F]/70 transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={selectedImage} 
                  alt="Gallery image" 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

