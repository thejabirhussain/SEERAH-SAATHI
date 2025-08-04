import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, X, Loader2 } from "lucide-react";
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
      title: "Welcome to Seerah Saathi! 🌟",
      description: "Thank you for joining us on this sacred journey. We'll be in touch soon!",
    });

    setEmail("");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md card-elevated">
        <motion.button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-4 w-4" />
        </motion.button>

        <DialogHeader className="text-center">
          <motion.div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="h-8 w-8 text-white" />
          </motion.div>
          <DialogTitle className="text-2xl font-bold text-gradient-primary">
            Join Seerah Saathi
          </DialogTitle>
          <p className="text-muted-foreground">
            Start your sacred journey with the Prophet (ﷺ). Enter your email to begin.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`h-12 rounded-xl border-border/50 focus:border-primary ${
                error ? "border-red-500" : ""
              }`}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
            />
            {error && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            variant="gradient"
            size="lg"
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

          <p className="text-xs text-center text-muted-foreground">
            By joining, you agree to receive updates about our Seerah journey program.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};