"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmailModal } from "./EmailModal"
import { Calendar, Compass, Heart, Sparkles } from "lucide-react" // Added Compass, Heart, Sparkles
import mosqueImage from "@/assets/mosque-architecture.jpg"
import { motion } from "framer-motion"

const journeyHighlights = [
  {
    title: "Discover", // Changed title
    description: "Uncover the profound history and spiritual significance of the sacred journey.", // Updated description
    icon: Compass, // Changed icon
    // Removed days: "Days 1-4",
  },
  {
    title: "Reflect", // Changed title
    description: "Engage in deep contemplation and spiritual growth in blessed locations.", // Updated description
    icon: Heart, // Changed icon
    // Removed days: "Days 5-8",
  },
  {
    title: "Transform", // Changed title
    description: "Experience a personal spiritual metamorphosis through this unique pilgrimage.", // Updated description
    icon: Sparkles, // Changed icon
    // Removed days: "Days 9-12",
  },
]

const seerahChapters = [
  "Birth and Early Life",
  "The First Revelation",
  "The Meccan Period",
  "The Hijra (Migration)",
  "The Medinan Period",
  "The Conquest of Makkah",
  "The Farewell Pilgrimage",
  "Legacy and Teachings",
]

export const SeerahJourneySection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <>
      <motion.section
        id="chapters"
        className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        aria-labelledby="journey-heading"
      >
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
        >
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url(data:image/svg+xml,${encodeURIComponent('<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g fill="#1d4ed8" fillOpacity="0.1"><path d="M30 30l15-15v30h-30z"/></g></svg>')})`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="journey-heading"
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(32px, 6vw, 48px)",
                color: "var(--black)",
                textTransform: "capitalize",
                wordBreak: "normal",
                overflowWrap: "normal",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "normal",
                backgroundImage: "linear-gradient(130deg, #0040c1, #679aff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                marginTop: 0,
                marginBottom: "1.5rem",
                lineHeight:'1.5'
              }}
            >
              More than a trip — a Seerah journey <br /> for the heart and mind
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the complete life story of Prophet Muhammad (ﷺ) through carefully curated chapters and sacred
              locations.
            </p>
          </div>

          {/* Journey Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {journeyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <motion.div
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-blue-900">{highlight.title}</CardTitle>
                    {/* Removed the div for highlight.days */}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Seerah Chapters and Map View */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Seerah Chapters */}
            <div>
              <h3
                className="text-3xl font-bold mb-8"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(28px, 5vw, 42px)",
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
                  marginBottom: "2rem",
                }}
              >
                Seerah Chapter Cards
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {seerahChapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && alert(`Selected: ${chapter}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-blue-900 group-hover:text-blue-700 transition-colors">
                        {chapter}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map View */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-3xl font-bold mb-8"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(28px, 5vw, 42px)",
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
                  marginBottom: "2rem",
                }}
              >
                Map View of the Journey
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/80">
                <motion.img
                  src={mosqueImage}
                  alt="Journey Map"
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Sacred Journey Route</h4>
                    <p className="text-white/90">
                      Follow the blessed path through Makkah, Madinah, and historical sites
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              onClick={() => setIsEmailModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Start your journey"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </motion.section>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </>
  )
}
