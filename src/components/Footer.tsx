import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
              Your Portfolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Frontend Developer passionate about creating amazing user experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:shadow-glow-hover transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:shadow-glow-hover transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:shadow-glow-hover transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React.js & Tailwind CSS
            </p>
            <p className="mt-2 md:mt-0">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;