import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const whatsappNumber = "+923338614929";
  const message = "Hello! I'm interested in learning more about Seerah Saathi.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.4)" },
    tap: { scale: 0.9 }
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-green-400"
      aria-label="Chat on WhatsApp"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleWhatsAppClick()}
    >
      <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />

      {/* Floating label */}
      <motion.div
        className="absolute right-full mr-4 bg-white text-green-800 px-4 py-2 rounded-lg shadow-md whitespace-nowrap hidden md:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Chat with us
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500 opacity-20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
    </motion.button>
  );
};