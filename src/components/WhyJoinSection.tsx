"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmailModal } from "./EmailModal"
import { TimelineModal } from "./TimelineModal"
import { Heart, BookOpen, Users, Play, MapPin, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import reflectImage from "@/assets/macca-image-1.jpg"
import reliveImage from "@/assets/hero-kaaba.jpg"
import rejoiceImage from "@/assets/arafath-mount.jpg"

const timelineItems = [
  {
    icon: Heart,
    title: "Reflect",
    location: "Sacred Spaces",
    year: "Daily Sessions",
    description:
      "Connect deeply with the life and teachings of Prophet Muhammad (ﷺ). Experience spiritual tranquility through guided reflection sessions.",
    position: "left",
    detailedDescription:
      "Our reflection sessions are carefully designed to help you connect with the profound teachings and character of Prophet Muhammad (ﷺ). Through guided meditation, Quranic recitation, and scholarly discussions, you'll experience moments of deep spiritual connection that will transform your understanding of Islamic history and your personal faith journey.",
    experience:
      "Participate in daily guided reflection sessions in quiet prayer areas, enjoy personal spiritual guidance, and take contemplative walks in historic locations while learning from renowned Islamic scholars.",
    benefits: [
      "Deepen your spiritual connection through guided meditation and reflection",
      "Gain profound insights into the character and teachings of Prophet Muhammad (ﷺ)",
      "Experience inner peace and tranquility in sacred environments",
      "Develop a stronger relationship with Allah through contemplative practices",
      "Learn from renowned Islamic scholars and spiritual guides",
    ],
    highlights: [
      "Daily guided reflection sessions",
      "Exclusive access to quiet prayer areas",
      "Personal spiritual guidance",
      "Contemplative walks in historic locations",
    ],
    image: reflectImage,
    testimonial: {
      text: "The reflection sessions completely transformed my understanding of the Prophet's (ﷺ) character. I felt a spiritual awakening that I carry with me every day.",
      author: "Amina Hassan",
      location: "London, UK",
    },
  },
  {
    icon: BookOpen,
    title: "Relive",
    location: "Historical Sites",
    year: "Exclusive Access",
    description:
      "Walk in the blessed footsteps of the Prophet (ﷺ) by visiting historical sites rarely accessible to the public.",
    position: "right",
    detailedDescription:
      "Experience history like never before as you visit exclusive historical sites that are rarely open to the general public. Our expert historians and Islamic scholars will guide you through the exact locations where pivotal moments in Islamic history unfolded, bringing the Seerah to life in ways you've never imagined.",
    experience:
      "Visit the Cave of Thawr where the Prophet (ﷺ) hid, explore private tours of historical Makkah sites, and walk the exact paths taken during the Hijrah with expert historian guides providing authentic historical experiences.",
    benefits: [
      "Visit exclusive historical sites not accessible to regular tourists",
      "Walk the exact paths taken by Prophet Muhammad (ﷺ) during the Hijrah",
      "Experience authentic historical environments with expert guidance",
      "Gain unique insights from renowned Islamic historians",
      "Create lasting memories in the most sacred places on Earth",
    ],
    highlights: [
      "Exclusive access to Cave of Thawr",
      "Private tours of historical Makkah sites",
      "Expert historian guides",
      "Authentic historical experiences",
    ],
    image: reliveImage,
    testimonial: {
      text: "Standing in the Cave of Thawr where the Prophet (ﷺ) hid was the most moving experience of my life. You can feel the history in every stone.",
      author: "Omar Al-Rashid",
      location: "Dubai, UAE",
    },
  },
  {
    icon: Users,
    title: "Rejoice",
    location: "Global Community",
    year: "Lifelong Bonds",
    description:
      "Join a community of like-minded believers on this transformational journey of faith and spiritual growth.",
    position: "left",
    detailedDescription:
      "Connect with fellow believers from around the world who share your passion for Islamic history and spiritual growth. Our carefully curated groups foster meaningful friendships and spiritual bonds that extend far beyond the journey itself, creating a global community of faith.",
    experience:
      "Build lifelong friendships in small, intimate group sizes with diverse international participants, share spiritual experiences, and join an ongoing global network of Seerah Saathi alumni with continued community support.",
    benefits: [
      "Build lifelong friendships with like-minded believers",
      "Share spiritual experiences with a supportive community",
      "Learn from diverse perspectives and cultural backgrounds",
      "Participate in group discussions and shared reflections",
      "Join an ongoing global network of Seerah Saathi alumni",
    ],
    highlights: [
      "Small, intimate group sizes",
      "Diverse international participants",
      "Shared spiritual experiences",
      "Ongoing community support",
    ],
    image: rejoiceImage,
    testimonial: {
      text: "The bonds I formed with my fellow travelers are unbreakable. We continue to support each other's spiritual journey even after returning home.",
      author: "Fatima Rodriguez",
      location: "Barcelona, Spain",
    },
  },
]

export const WhyJoinSection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<(typeof timelineItems)[0] | null>(null)
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const openTimelineModal = (item: (typeof timelineItems)[0]) => {
    setSelectedItem(item)
    setIsTimelineModalOpen(true)
  }

  const closeTimelineModal = () => {
    setIsTimelineModalOpen(false)
    setSelectedItem(null)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: (item: { position: string }) => (item.position === "left" ? -100 : 100) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <>          {/* Video Section */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl mx-auto">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(20px, 4vw, 36px)",
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
                Discover the Sacred Journey
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200">
                <div className="aspect-video flex items-center justify-center">
                  <motion.button
                    className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                  </motion.button>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-4 mb-6 sm:mb-8">
                Watch this inspiring video to learn more about the Seerah Saathi experience
              </p>
            </div>
          </motion.div>
          
      <motion.section
        id="about"
        className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        aria-labelledby="why-join-heading"
      >
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              id="why-join-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(20px, 6vw, 48px)",
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
                marginBottom: "1.5rem",
              }}
            >
              Why Join Seerah Saathi?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Seerah Saathi offers a unique spiritual experience that combines guided Umrah with exclusive Seerah site
              visits, creating a transformational journey for your heart and mind.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line - reduced width from w-1 to w-px for thinnest possible line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-600 to-blue-700 hidden lg:block"
              aria-hidden="true"
            ></div>

            {/* Timeline items */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
              <AnimatePresence>
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={item}
                  >
                    {/* Timeline Point - Hidden by default, glows on hover */}
                    <div
                      className={`absolute left-1/2 top-6 sm:top-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] rounded-full border-2 sm:border-4 border-white shadow-lg transform -translate-x-1/2 z-20 hidden lg:flex items-center justify-center transition-all duration-300 ${
                        hoveredIndex === index
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-400 shadow-2xl scale-110"
                          : "bg-gray-300 opacity-50"
                      }`}
                    ></div>

                    {/* Timeline Card */}
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 0 ? "" : "lg:grid-flow-col-dense"}`}
                    >
                      {/* Card Content */}
                      <Card
                        className={`group cursor-pointer transition-all duration-300 border-2 border-transparent mx-2 sm:mx-0 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:col-start-2"} ${
                          hoveredIndex === index
                            ? "shadow-xl scale-[1.02] border-blue-500 shadow-blue-300/50"
                            : "hover:shadow-xl hover:scale-[1.02]"
                        }`}
                        onClick={() => openTimelineModal(item)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <CardContent className="p-0 overflow-hidden rounded-xl">
                          {/* Image Section */}
                          <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Badges */}
                            <div className="absolute top-1.5 left-1.5 right-1.5 sm:top-2 sm:left-2 sm:right-2 md:top-4 md:left-4 md:right-4 flex flex-col xs:flex-row gap-1.5 sm:gap-2 xs:justify-between">
                              <Badge
                                variant="secondary"
                                className="bg-blue-600/90 text-white border-0 text-xs sm:text-sm w-fit"
                              >
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                {item.location}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-white/90 text-blue-700 border-blue-200 text-xs sm:text-sm w-fit"
                              >
                                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                {item.year}
                              </Badge>
                            </div>

                            {/* Timeline Number Mobile - Also responds to hover */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 lg:hidden">
                              <div
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                                  hoveredIndex === index
                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-400 shadow-lg scale-110"
                                    : "bg-gray-300 text-gray-600 opacity-50"
                                }`}
                              ></div>
                            </div>
                          </div>
                          {/* Content Section */}
                          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6 bg-white">
                            <div>
                              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-blue-700 transition-colors">
                                Chapter {index + 1}: {item.title}
                              </h3>
                              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 sm:p-3 md:p-4">
                              <h4 className="text-xs sm:text-sm md:text-base font-semibold text-blue-800 mb-1.5 sm:mb-2 flex items-center gap-2">
                                🎯 Experience Highlights
                              </h4>
                              <p className="text-xs sm:text-sm text-blue-900">{item.experience}</p>
                            </div>

                            <div className="flex items-center justify-between pt-2.5 sm:pt-3 md:pt-4 border-t border-blue-100">
                              <div className="text-xs sm:text-sm text-gray-500">Click to explore this chapter</div>
                              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <span className="text-blue-600 text-xs sm:text-sm md:text-lg">→</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Empty space for alternating layout */}
                      <div className={`hidden lg:block ${index % 2 === 0 ? "lg:ml-8" : "lg:mr-8 lg:col-start-1"}`} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>



          {/* Call to Action Section */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-2 sm:px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white max-w-4xl mx-auto">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(24px, 5vw, 42px)",
                  color: "white",
                  textTransform: "capitalize",
                  wordBreak: "normal",
                  overflowWrap: "normal",
                  marginTop: 0,
                  marginBottom: "1rem",
                }}
              >
                Begin Your Sacred Journey
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed">
                Join us on this transformative pilgrimage through Islamic history. Experience each chapter of the Seerah
                with expert guides, authentic accommodations, and spiritual reflection.
              </p>
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 hover:text-blue-700 border border-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                size="lg"
                aria-label="Start your journey"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modals */}
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />

      <TimelineModal item={selectedItem} isOpen={isTimelineModalOpen} onClose={closeTimelineModal} />
    </>
  )
}
