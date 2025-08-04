import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailModal } from "./EmailModal";
import { Heart, BookOpen, Users, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const timelineItems = [
  {
    icon: Heart,
    title: "Reflect",
    description: "Connect deeply with the life and teachings of Prophet Muhammad (ﷺ). Experience spiritual tranquility through guided reflection sessions.",
    position: "left"
  },
  {
    icon: BookOpen,
    title: "Relive",
    description: "Walk in the blessed footsteps of the Prophet (ﷺ) by visiting historical sites rarely accessible to the public.",
    position: "right"
  },
  {
    icon: Users,
    title: "Rejoice",
    description: "Join a community of like-minded believers on this transformational journey of faith and spiritual growth.",
    position: "left"
  }
];

export const WhyJoinSection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: (item: { position: string }) => (item.position === "left" ? -100 : 100) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <motion.section
        id="about"
        className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        aria-labelledby="why-join-heading"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="why-join-heading" className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Why Join Seerah Saathi?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Seerah Saathi offers a unique spiritual experience that combines guided Umrah with exclusive Seerah site visits, creating a transformational journey for your heart and mind.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden md:block" aria-hidden="true"></div>

            {/* Timeline items */}
            <div className="space-y-10">
              <AnimatePresence>
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${
                      item.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col gap-8`}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={item}
                    role="region"
                    aria-label={`Timeline item: ${item.title}`}
                  >
                    {/* Content */}
                    <div className="flex-1 md:px-8">
                      <div
                        className={`card-elevated p-8 hover-lift transition-all duration-300 ${
                          item.position === "left" ? "md:text-right" : "md:text-left"
                        } text-center md:text-left bg-white/90 backdrop-blur-sm`}
                      >
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-6 ${
                            item.position === "left" ? "md:ml-auto" : "md:mr-auto"
                          } mx-auto md:mx-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="w-8 h-8" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg z-10"></div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Video Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Discover the Sacred Journey
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
                <div className="aspect-video flex items-center justify-center">
                  <motion.button
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full text-white hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 ml-1" />
                    
                  </motion.button>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 mb-8">
                Watch this inspiring video to learn more about the Seerah Saathi experience
              </p>
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                variant="gradient"
                size="lg"
                className="hover:scale-105 transition-transform"
                aria-label="Start your journey"
              >
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};