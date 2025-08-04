import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 px-6 text-center text-sm font-medium relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
      aria-label="Site header"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{ x: [0, 60], y: [0, 60] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20c0-7.4-9-10-20-10S10 12.6 10 20s9 10 20 10 20-2.6 20-10z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 text-base tracking-wide">
        Your Go-to guide to know about the Prophet (ﷺ)
      </div>
    </motion.div>
  );
};