import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, X, Loader2 } from 'lucide-react';
import { motion } from "framer-motion";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Seerah Saathi!",
      description: "Thank you for joining us on this sacred journey. We'll be in touch soon!",
    });
    
    setEmail("");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border border-blue-100 shadow-xl">
        <motion.button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-4 w-4" />
        </motion.button>

        <DialogHeader className="text-center space-y-4">
          <motion.div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="h-8 w-8 text-blue-600" />
          </motion.div>
          
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            Join Seerah Saathi
          </DialogTitle>
          
          <p className="text-gray-600 leading-relaxed">
            Start your sacred journey with the Prophet ﷺ. Enter your email to begin.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
            />
            {error && (
              <p id="email-error" className="text-red-500 text-sm mt-2">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              "Start Your Journey"
            )}
          </Button>

          <p className="text-xs text-center text-gray-500 leading-relaxed">
            By joining, you agree to receive updates about our Seerah journey program.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
