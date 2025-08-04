import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailModal } from "./EmailModal";
import { MapPin, Clock, Star, Calendar } from "lucide-react";
import mosqueImage from "@/assets/mosque-architecture.jpg";
import { motion } from "framer-motion";

const journeyHighlights = [
  {
    title: "Makkah",
    description: "Visit the sacred city where the Prophet (ﷺ) was born and where Islam began",
    icon: MapPin,
    days: "Days 1-4"
  },
  {
    title: "Madinah",
    description: "Walk in the footsteps of the Prophet (ﷺ) in the illuminated city",
    icon: Star,
    days: "Days 5-8"
  },
  {
    title: "Historical Sites",
    description: "Explore Badr, Hudaibiyah, Taif and other significant locations",
    icon: Clock,
    days: "Days 9-12"
  }
];

const seerahChapters = [
  "Birth and Early Life",
  "The First Revelation",
  "The Meccan Period",
  "The Hijra (Migration)",
  "The Medinan Period",
  "The Conquest of Makkah",
  "The Farewell Pilgrimage",
  "Legacy and Teachings"
];

export const SeerahJourneySection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <motion.section
        id="chapters"
        className="py-24 bg-background relative overflow-hidden"
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
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url(data:image/svg+xml,${encodeURIComponent('<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#10b981" fill-opacity="0.1"><path d="M30 30l15-15v30h-30z"/></g></svg>')})`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="journey-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              More than a trip — a Seerah journey for the heart and mind
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the complete life story of Prophet Muhammad (ﷺ) through carefully curated chapters and sacred locations.
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
                <Card className="card-elevated hover-lift text-center">
                  <CardHeader>
                    <motion.div
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground">{highlight.title}</CardTitle>
                    <div className="text-sm text-accent font-medium">{highlight.days}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Seerah Chapters and Map View */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Seerah Chapters */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                Seerah Chapter Cards
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {seerahChapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    className="p-6 card-gradient hover-lift cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && alert(`Selected: ${chapter}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
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
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                Map View of the Journey
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  src={mosqueImage}
                  alt="Journey Map"
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Sacred Journey Route</h4>
                    <p className="text-white/90">Follow the blessed path through Makkah, Madinah, and historical sites</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              onClick={() => setIsEmailModalOpen(true)}
              variant="gradient"
              size="xl"
              className="hover:scale-105 transition-transform shadow-xl"
              aria-label="Start your journey"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </motion.section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};