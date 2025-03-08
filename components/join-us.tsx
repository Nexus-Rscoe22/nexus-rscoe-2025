"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, Loader2, Send, User, Mail, MessageSquare, Award } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

export default function JoinUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    skillLevel: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState("")
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Handle window access only on client-side
  useEffect(() => {
    setIsClient(true)
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    // Set initial size
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Success
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        skillLevel: "",
        reason: "",
      })
      
      toast.success("Your application has been submitted successfully!", {
        description: "We'll get back to you soon.",
        duration: 5000,
      })

      // Reset success message after 10 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 10000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionError(error instanceof Error ? error.message : "Failed to submit form")
      toast.error("Form submission failed", {
        description: error instanceof Error ? error.message : "Please try again later.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, skillLevel: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
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

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  // Background particle animation
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? "#1E90FF" : "#FFD700"
    }))
  }

  const [particles] = useState(() => generateParticles(25))

  return (
    <section id="join" className="py-24 bg-white dark:bg-[#1C2526] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF]/20 to-[#FFD700]/20"></div>
        {isClient && particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              x: [
                particle.x * windowSize.width, 
                particle.x * windowSize.width + (Math.random() * 100 - 50)
              ],
              y: [
                particle.y * windowSize.height, 
                particle.y * windowSize.height + (Math.random() * 100 - 50)
              ],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
            }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] font-medium text-sm mb-4"
            >
              JOIN OUR COMMUNITY
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-[#2F2F2F] dark:text-white mb-4"
            >
              Become a Member
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-lg text-[#2F2F2F]/80 dark:text-white/70 max-w-xl mx-auto"
            >
              Join our community of web developers and start your journey today
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="bg-white dark:bg-[#2F2F2F] rounded-xl shadow-xl p-8 md:p-10 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.2 
                    }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-[#2F2F2F] dark:text-white mb-4"
                  >
                    Thank You!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#2F2F2F]/80 dark:text-white/70 mb-4"
                  >
                    Your application has been submitted successfully. We'll get back to you soon!
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-[#2F2F2F]/80 dark:text-white/70"
                  >
                    A confirmation email has been sent to your inbox.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                  >
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="px-6"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {submissionError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-4"
                    >
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                        <div>
                          <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                            Form submission failed
                          </h3>
                          <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                            {submissionError}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-[#2F2F2F] dark:text-white mb-2 flex items-center">
                      <User className={`w-4 h-4 mr-1.5 ${focusedField === 'name' ? 'text-[#1E90FF]' : 'text-gray-400'}`} />
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your full name"
                      className={`w-full transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-[#1E90FF] ring-1 ring-[#1E90FF]/20' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#1E90FF]" 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-[#2F2F2F] dark:text-white mb-2 flex items-center">
                      <Mail className={`w-4 h-4 mr-1.5 ${focusedField === 'email' ? 'text-[#1E90FF]' : 'text-gray-400'}`} />
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your email address"
                      className={`w-full transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-[#1E90FF] ring-1 ring-[#1E90FF]/20' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#1E90FF]" 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="skillLevel" className="block text-sm font-medium text-[#2F2F2F] dark:text-white mb-2 flex items-center">
                      <Award className={`w-4 h-4 mr-1.5 ${focusedField === 'skillLevel' ? 'text-[#1E90FF]' : 'text-gray-400'}`} />
                      Skill Level
                    </label>
                    <Select 
                      value={formState.skillLevel} 
                      onValueChange={handleSelectChange}
                      required
                      onOpenChange={(open) => {
                        if (open) handleFocus('skillLevel')
                        else handleBlur()
                      }}
                    >
                      <SelectTrigger className={`w-full transition-all duration-300 ${
                        focusedField === 'skillLevel' 
                          ? 'border-[#1E90FF] ring-1 ring-[#1E90FF]/20' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}>
                        <SelectValue placeholder="Select your skill level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#1E90FF]" 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'skillLevel' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="reason" className="block text-sm font-medium text-[#2F2F2F] dark:text-white mb-2 flex items-center">
                      <MessageSquare className={`w-4 h-4 mr-1.5 ${focusedField === 'reason' ? 'text-[#1E90FF]' : 'text-gray-400'}`} />
                      Why do you want to join?
                    </label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      onFocus={() => handleFocus('reason')}
                      onBlur={handleBlur}
                      required
                      placeholder="Tell us why you're interested in joining our community"
                      className={`w-full min-h-[120px] transition-all duration-300 ${
                        focusedField === 'reason' 
                          ? 'border-[#1E90FF] ring-1 ring-[#1E90FF]/20' 
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#1E90FF]" 
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'reason' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-medium py-6 mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </motion.div>
                    )}
                  </Button>

                  <motion.p 
                    className="text-xs text-center text-[#2F2F2F]/60 dark:text-white/60 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-[#1E90FF] transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-of-service" className="underline hover:text-[#1E90FF] transition-colors">
                      Terms of Service
                    </Link>
                    .
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

