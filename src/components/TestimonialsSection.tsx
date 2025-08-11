import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Tahir Farooqui",
    position: "GS PIDC / PPL House",
    content: "Seerah Retreat by Timelenders is a unique journey of introduction, love and connection to the Messenger of Allah PBUH. It is a Life-Game changer for sure, this journey is a completely transformational journey.",
    rating: 5,
    location: "Pakistan"
  },
  {
    id: 2,
    name: "Muneeb Ahmed",
    position: "Business Professional",
    content: "I wholeheartedly recommend the SEERAH Retreat Program. It is an investment in yourself, an opportunity to experience the Soul-Refreshing Journey with the Umrah, and a chance to connect with a community of like-hearted individuals.",
    rating: 5,
    location: "Pakistan"
  },
  {
    id: 3,
    name: "Muhammad Afzal",
    position: "Entrepreneur",
    content: "I would recommend this Program to all of my Muslim Brothers and Sisters even if you have previously done Umrah. This is something different and a must have experience at least once in your lifetime.",
    rating: 5,
    location: "India"
  },
  {
    id: 4,
    name: "Ghulam Rasool Khan",
    position: "Founder & CEO Moveme.pk",
    content: "In December 2023, I had the privilege of participating in the SEERAH Retreat, which proved to be the most profound and enriching journey I have ever experienced. Everyone must go by this experience once in life.",
    rating: 5,
    location: "Pakistan"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading" 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"
          >
            Transformed Lives, Lasting Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Listen to the inspiring stories of those who have experienced the life-changing Seerah Saathi journey.
          </p>
        </div>

        {/* Video Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              {/* Video Placeholder */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100/50 to-blue-200/30 flex items-center justify-center">
                  <motion.button
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    aria-label="Play testimonial video"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.button>
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-700" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-blue-700" />
                </button>
              </motion.div>

              {/* Testimonial Content */}
              <motion.div
                className="p-8"
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-600 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg text-gray-600 mb-6 italic leading-relaxed">
                    "{currentTestimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-blue-700 font-medium">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 w-8"
                    : "bg-blue-200 hover:bg-blue-300 w-3"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
