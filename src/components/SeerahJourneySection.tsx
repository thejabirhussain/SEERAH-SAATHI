"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from "lucide-react"

const journeyCards = [
  {
    id: 1,
    title: "Foundation & Early Life",
    days: "Days 1-3",
    color: "#0040c1",
    gradient: "from-blue-600 to-blue-700",
    icon: <MapPin className="w-5 h-5" />,
    content: [
      {
        day: 1,
        title: "Arrival & Umrah",
        activities: ["Arrive in Makkah & Perform Umrah", "Group orientation", "Reflection circle"],
      },
      {
        day: 2,
        title: "Seerah Foundations",
        activities: ["Introduction to Seerah", "Quraysh lineage & Zamzam", "Birth of Prophet ﷺ", "Key site visits"],
      },
      {
        day: 3,
        title: "Early Years",
        activities: ["Youth & Syria voyage", "Marriage to Khadijah (RA)", "First Revelation", "Visit Mt Hira"],
      },
    ],
  },
  {
    id: 2,
    title: "The Call & Challenges",
    days: "Days 4-6",
    color: "#2563eb",
    gradient: "from-blue-500 to-blue-600",
    icon: <Users className="w-5 h-5" />,
    content: [
      {
        day: 4,
        title: "First Call",
        activities: ["House of Arqam", "Early believers", "Opposition begins", "Group reflection"],
      },
      {
        day: 5,
        title: "Hardships",
        activities: ["Migration to Abyssinia", "The boycott", "Year of Sadness", "Journey to Taif"],
      },
      {
        day: 6,
        title: "Turning Point",
        activities: ["Bay'ah of Aqabah", "Night of Migration", "Mt Thawr visit", "Isra wal Miraj"],
      },
    ],
  },
  {
    id: 3,
    title: "Migration & Growth",
    days: "Days 7-9",
    color: "#1d4ed8",
    gradient: "from-blue-500 to-blue-700",
    icon: <Calendar className="w-5 h-5" />,
    content: [
      {
        day: 7,
        title: "Migration Journey",
        activities: ["Journey to Madinah", "Arrival at Quba", "Visit Masjid Quba", "Hijrah reflection"],
      },
      {
        day: 8,
        title: "New Life in Madinah",
        activities: ["Masjid an-Nabawi visit", "Brotherhood pact", "Madinah Charter", "Community building"],
      },
      {
        day: 9,
        title: "Trials of Faith",
        activities: ["Battles of Badr & Uhud", "Masjid Qiblatain", "Personal resilience", "Faith strengthening"],
      },
    ],
  },
  {
    id: 4,
    title: "Victory & Legacy",
    days: "Days 10-12",
    color: "#679aff",
    gradient: "from-blue-400 to-blue-600",
    icon: <MapPin className="w-5 h-5" />,
    content: [
      {
        day: 10,
        title: "Victory & Humility",
        activities: ["Victory of Makkah", "Letters to kings", "Umrah of Prophet ﷺ", "Humility reflection"],
      },
      {
        day: 11,
        title: "Final Phase",
        activities: ["Farewell Hajj", "Final teachings", "Passing of Prophet ﷺ", "Abu Bakr (RA) as Caliph"],
      },
      {
        day: 12,
        title: "Reflection & Departure",
        activities: ["Seerah reflections", "Personal pledge", "Certification", "Departure"],
      },
    ],
  },
]

export const SeerahJourneySection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentCardIndex((prev) => (prev === 0 ? journeyCards.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentCardIndex((prev) => (prev === journeyCards.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToCard = (index: number) => {
    if (isAnimating || index === currentCardIndex) return
    setIsAnimating(true)
    setCurrentCardIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentCard = journeyCards[currentCardIndex]

  return (
    <section id="chapters" className="py-4 sm:py-6 lg:py-7 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      {/* HEIGHT CONTROL: Change py-7 to py-6 or py-8 to adjust overall section height */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6 lg:mb-7">
          {/* HEIGHT CONTROL: Change mb-7 to mb-6 or mb-8 to adjust header spacing */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            style={{
              fontFamily: "Outfit, sans-serif",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(74deg, #0040c1, #679aff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Soulful Seerah
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-blue-700">12-Day Transformational Umrah Journey</p>
          {/* HEIGHT CONTROL: Change mb-7 to mb-6 or mb-8 to adjust header spacing */}
        </div>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-5 lg:mb-6 px-2">
          {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
          {journeyCards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => goToCard(index)}
              disabled={isAnimating}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentCardIndex
                  ? "text-white shadow-lg scale-105"
                  : "text-blue-700 bg-white hover:bg-blue-50 shadow-md border border-blue-200"
              }`}
              style={{
                backgroundColor: index === currentCardIndex ? card.color : undefined,
              }}
            >
              {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
              <span className="hidden sm:inline">{card.days}</span>
              <span className="sm:hidden">{card.id}</span>
              {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-4 sm:mb-5 lg:mb-6">
          {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
          <div
            className={`bg-gradient-to-br ${currentCard.gradient} rounded-lg sm:rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"}`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 text-white">
              {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">{currentCard.icon}</div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{currentCard.title}</h2>
                    {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                    <p className="text-xs sm:text-sm opacity-90">{currentCard.days}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                  <p className="text-xs opacity-75">Phase</p>
                  <p className="text-base sm:text-lg font-bold">{currentCard.id}/4</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-4 lg:p-6">
              {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                {currentCard.content.map((dayContent, index) => (
                  <div
                    key={dayContent.day}
                    className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                        style={{ backgroundColor: currentCard.color }}
                      >
                        {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                        {dayContent.day}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm sm:text-base">{dayContent.title}</h3>
                        {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                        <p className="text-xs text-gray-500">Day {dayContent.day}</p>
                      </div>
                    </div>
                    <ul className="space-y-1 sm:space-y-2">
                      {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                      {dayContent.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-gray-700 text-xs sm:text-sm flex items-start gap-2">
                          {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                          <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
            {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
            <div className="flex items-center justify-between gap-2">
              <Button
                onClick={goToPrevious}
                disabled={isAnimating}
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 sm:px-4 py-2 text-xs sm:text-sm disabled:opacity-50"
              >
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
              </Button>

              <div className="flex gap-1 sm:gap-2">
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                {journeyCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentCardIndex ? "scale-125" : "scale-100"
                    }`}
                    style={{
                      backgroundColor: index <= currentCardIndex ? card.color : "#d1d5db",
                    }}
                  />
                ))}
              </div>

              <Button
                onClick={goToNext}
                disabled={isAnimating}
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 sm:px-4 py-2 text-xs sm:text-sm disabled:opacity-50"
              >
                {/* HEIGHT CONTROL: Change mb-5 to mb-4 or mb-6 to adjust spacing */}
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
