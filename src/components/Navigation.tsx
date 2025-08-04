import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EmailModal } from "./EmailModal";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient-primary">
                Seerah Saathi
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("chapters")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </button>
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                variant="hero"
                size="lg"
                className="shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600"
              >
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-border/50">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("chapters")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact Us
              </button>
              <Button
                onClick={() => setIsEmailModalOpen(true)}
                variant="gradient"
                className="w-full"
              >
                Join Now
              </Button>
            </div>
          )}
        </div>
      </nav>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};