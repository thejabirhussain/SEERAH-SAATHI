"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EmailModal } from "./EmailModal"
import heroImage from "@/assets/madina-hero-image-2.jpeg"
import { motion } from "framer-motion"

export const HeroSection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.1,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <>
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="main"
        aria-labelledby="hero-heading"
      >
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-20">
          {/* Left: Enhanced Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-left space-y-8"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Brand Title - Made Special */}
            <motion.div className="relative">
              <motion.h1
                id="hero-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "48px",
                  color: "var(--black)",
                  textTransform: "capitalize",
                  wordBreak: "normal",
                  overflowWrap: "normal",
                  WebkitTextFillColor: "transparent",
                  mixBlendMode: "normal",
                  backgroundImage: "linear-gradient(74deg, #0040c1, #679aff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight:800,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Soulful Seerah
              </motion.h1>
            </motion.div>

            {/* Subtitle with fade effect */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold relative"
              variants={subtitleVariants}
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: "700",
                textTransform: "capitalize",
                fontSize: "clamp(24px, 4vw, 28px)",
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8] }}
                transition={{ duration: 2, delay: 1 }}
              >
                A journey to discover, reflect and transform
              </motion.span>
            </motion.h2>

            {/* Enhanced Description */}
            <motion.div variants={contentVariants} className="relative">
              <motion.p
                className="text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Embark on a{" "}
                <motion.span
                  className="font-semibold relative"
                  style={{
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(#0040c1, #679aff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  soul-refreshing journey
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                    style={{ background: "linear-gradient(#0040c1, #679aff)" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                  />
                </motion.span>{" "}
                performing Umrah, exploring historical Seerah sites and connecting with our spiritual roots.
              </motion.p>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-6 pt-8" variants={buttonVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden group"
                  aria-label="Join now"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10">Join Now</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-blue-300 text-blue-700 hover:text-blue-800 hover:border-blue-400 hover:bg-blue-50/80 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  aria-label="Download brochure"
                >
                  Download Brochure
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Hero Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Clean Image Container */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03, rotateY: 5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ perspective: "1000px" }}
              >
                <motion.img
                  src={heroImage || "/placeholder.svg"}
                  alt="Sacred Kaaba - Center of Islamic pilgrimage"
                  className="w-full max-w-lg rounded-3xl shadow-2xl object-cover border-4 border-white/90 relative z-10"
                  initial={{ filter: "brightness(0.8)" }}
                  animate={{ filter: "brightness(1)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Simple Border Effect */}
                <motion.div
                  className="absolute -inset-3 rounded-3xl border-2 border-blue-300/40 pointer-events-none"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.div
            className="w-7 h-12 border-2 border-blue-400/60 rounded-full flex justify-center bg-white/60 backdrop-blur-md shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mt-2"
              animate={{
                y: [0, 6, 0],
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </>
  )
}
