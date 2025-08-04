import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setError("");
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/seerahsaathi", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/seerahsaathi", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/seerahsaathi", label: "YouTube" }
  ];

  return (
    <motion.footer
      id="contact"
     className="bg-gradient-to-r from-primary to-accent text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      role="contentinfo"
    >
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe Our Newsletter</h3>
            <p className="mb-6 opacity-90">Get early updates about upcoming events</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 ${
                  error ? "border-red-500" : ""
                }`}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "newsletter-error" : undefined}
              />
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </form>
            {error && (
              <p id="newsletter-error" className="text-red-400 text-sm mt-2">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-gradient-secondary">
              Seerah Saathi
            </h4>
            <p className="opacity-90 mb-4">
              Embracing the footsteps of Prophet Muhammad (ﷺ)
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={`Visit our ${link.label} page`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="font-bold mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#chapters" className="opacity-90 hover:opacity-100 transition-opacity">Journey</a></li>
              <li><a href="#gallery" className="opacity-90 hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h5 className="font-bold mb-4 text-lg">Helpful Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Preparation Guide</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Experience Stories</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h5 className="font-bold mb-4 text-lg">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-90" />
                <span className="opacity-90">info@seerahsaathi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-90" />
                <span className="opacity-90">+92 333 8614929</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="opacity-90">
            © 2024 Seerah Saathi. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};