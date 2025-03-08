"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const events = [
    {
      title: "Web Dev Bootcamp 2023",
      date: "March 15-20, 2023",
      description: "An intensive 5-day bootcamp covering HTML, CSS, JavaScript, and React fundamentals.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      title: "Hackathon: Build for Good",
      date: "June 5-7, 2023",
      description: "A 48-hour hackathon focused on creating web solutions for local non-profit organizations.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      title: "JavaScript Deep Dive Workshop",
      date: "September 12, 2023",
      description: "A full-day workshop exploring advanced JavaScript concepts and modern frameworks.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      title: "Web Accessibility Summit",
      date: "November 18, 2023",
      description: "A conference dedicated to making the web more accessible for everyone.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  const openGallery = (index: number) => {
    setSelectedEvent(index)
  }

  const closeGallery = () => {
    setSelectedEvent(null)
  }

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

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  }

  return (
    <section id="events" className="py-20 bg-white dark:bg-[#1C2526]">
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
            PAST EVENTS
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#2F2F2F] dark:text-white mb-4"
          >
            Events Showcase
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-3xl mx-auto">
            Take a look at our past events and join us for future ones
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-[#2F2F2F] rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={events[currentSlide].images[0] || "/placeholder.svg"}
                    alt={events[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-[#1E90FF] dark:text-[#1E90FF] mb-2">
                    {events[currentSlide].title}
                  </h3>
                  <p className="text-[#FFD700] font-medium mb-4">{events[currentSlide].date}</p>
                  <p className="text-[#2F2F2F]/80 dark:text-white/70 mb-6">{events[currentSlide].description}</p>
                  <Button
                    onClick={() => openGallery(currentSlide)}
                    className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2F2F2F] font-medium"
                  >
                    View Photos
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-[#2F2F2F]/80 p-2 rounded-full shadow-lg z-10"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-6 h-6 text-[#1E90FF]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-[#2F2F2F]/80 p-2 rounded-full shadow-lg z-10"
            aria-label="Next event"
          >
            <ChevronRight className="w-6 h-6 text-[#1E90FF]" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#1E90FF]" : "bg-[#1E90FF]/30"}`}
                aria-label={`Go to event ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Photo Gallery Modal */}
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-[#2F2F2F]/50"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events[selectedEvent].images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    className="relative h-60 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${events[selectedEvent].title} photo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

