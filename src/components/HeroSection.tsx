import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailModal } from "./EmailModal";
import heroImage from "@/assets/hero-kaaba.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="main"
        aria-labelledby="hero-heading"
      >
        {/* Complex Arabic SVG Background */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20 z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="arabic-pattern-1"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M100,0 C150,50 150,150 100,200 C50,150 50,50 100,0 Z"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="1.5"
                />
                <path
                  d="M50,50 C75,75 125,75 150,50 C125,125 75,125 50,50 Z"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="arabic-pattern-2"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(15)"
              >
                <path
                  d="M150,0 C225,75 225,225 150,300 C75,225 75,75 150,0 Z"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <path
                  d="M75,75 C112.5,112.5 187.5,112.5 225,75 C187.5,187.5 112.5,187.5 75,75 Z"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.8"
                  opacity="0.7"
                />
              </pattern>
              <pattern
                id="arabic-pattern-3"
                width="150"
                height="150"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-10)"
              >
                <path
                  d="M75,0 L90,30 L120,30 L100,60 L110,90 L75,75 L40,90 L50,60 L20,30 L60,30 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arabic-pattern-1)" opacity="0.3" />
            <rect width="100%" height="100%" fill="url(#arabic-pattern-2)" opacity="0.2" />
            <rect width="100%" height="100%" fill="url(#arabic-pattern-3)" opacity="0.15" />
            <text
              x="50%"
              y="30%"
              fontFamily="'Traditional Arabic', Arial"
              fontSize="140"
              textAnchor="middle"
              fill="#7c3aed"
              opacity="0.05"
              transform="rotate(-5 600 360)"
            >
              بسم الله الرحمن الرحيم
            </text>
            <text
              x="50%"
              y="70%"
              fontFamily="'Traditional Arabic', Arial"
              fontSize="140"
              textAnchor="middle"
              fill="#10b981"
              opacity="0.05"
              transform="rotate(5 600 840)"
            >
              الحمد لله رب العالمين
            </text>
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen py-20">
          {/* Left: Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-left space-y-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-emerald-600">
              Seerah Saathi
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 italic">
              Companions on the sacred Journey
            </h2>
            <div className="relative inline-block">
              <p className="text-lg md:text-xl text-gray-700 max-w-md relative z-10 font-arabic tracking-wider">
                Reflect | Relive | Rejoice
              </p>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full opacity-50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              ></motion.div>
            </div>
            <p className="text-base md:text-lg max-w-xl leading-relaxed text-gray-600">
              Embark on a soul-refreshing journey performing Umrah, exploring
              historical Seerah sites and connecting with our spiritual roots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                variant="hero"
                size="xl"
                className="shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600"
                aria-label="Join now"
              >
                Join Now
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/90 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-purple-400 hover:text-purple-700 transition-colors shadow-sm"
                aria-label="Download brochure"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Kaaba"
                className="w-full max-w-lg rounded-xl shadow-2xl object-cover transform transition-all hover:scale-105 duration-500"
              />
              <motion.div
                className="absolute -inset-4 rounded-xl border-2 border-purple-200/50 pointer-events-none z-0"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>
              <motion.div
                className="absolute -inset-6 rounded-xl border border-emerald-200/30 pointer-events-none z-0"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 4 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          aria-hidden="true"
        >
          <div className="w-8 h-12 border-2 border-purple-300 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-purple-500 to-emerald-400 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};