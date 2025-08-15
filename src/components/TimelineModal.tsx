"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X, MapPin, Calendar } from "lucide-react"

interface TimelineItem {
  icon: any
  title: string
  description: string
  position: string
  detailedDescription: string
  benefits: string[]
  highlights: string[]
  image: string
  location: string
  year: string
  experience: string
  testimonial?: {
    text: string
    author: string
    location: string
  }
}

interface TimelineModalProps {
  item: TimelineItem | null
  isOpen: boolean
  onClose: () => void
}

export const TimelineModal = ({ item, isOpen, onClose }: TimelineModalProps) => {
  // Handle scrolling when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl rounded-xl w-[86vw] sm:w-[85vw] max-h-[86vh] sm:max-h-[85vh] overflow-y-auto p-2 gap-0 [&>button]:hidden">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-4 md:right-4 z-50 bg-black/20 hover:bg-black/40 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
            onClick={onClose}
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Button>

          {/* Header Image */}
          <div className="relative h-40 sm:h-48 md:h-64 lg:h-80 overflow-hidden">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-1.5 left-1.5 right-10 sm:top-2 sm:left-2 sm:right-12 md:top-4 md:left-4 md:right-16 flex flex-col xs:flex-row gap-1.5 sm:gap-2 xs:justify-between">
              <Badge variant="secondary" className="bg-blue-600/90 text-white border-0 text-xs sm:text-sm w-fit">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                {item.location}
              </Badge>
              <Badge variant="outline" className="bg-white/90 text-blue-700 border-blue-200 text-xs sm:text-sm w-fit">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                {item.year}
              </Badge>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-6 md:left-6 md:right-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1.5 sm:mb-2 md:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
            {/* Detailed Description */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
                About This Experience
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {item.detailedDescription}
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="bg-blue-100/50 border border-blue-200 rounded-lg p-3 sm:p-4 md:p-6">
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-800 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                🎯 Experience Highlights
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-blue-900 leading-relaxed">{item.experience}</p>
            </div>

            {/* Benefits and Highlights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Benefits */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-3 sm:mb-4">
                  What You'll Gain
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {item.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white border border-blue-200 rounded-lg"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-3 sm:mb-4">Key Highlights</h3>
                <div className="space-y-2 sm:space-y-3">
                  {item.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-blue-900">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {item.testimonial && (
              <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mb-3 sm:mb-4">
                    Participant Testimonial
                  </h3>
                  <blockquote className="text-xs sm:text-sm md:text-base lg:text-lg italic text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    "{item.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-lg">
                        {item.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900 text-xs sm:text-sm md:text-base">
                        {item.testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">{item.testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Ready to Begin This Journey?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                Join us on this transformative spiritual experience and deepen your connection with Islamic history.
              </p>
              <Button
                size="lg"
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                onClick={onClose}
              >
                Reserve Your Journey
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
