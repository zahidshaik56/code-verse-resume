import { Button } from "@/components/ui/button";
import { FileDown, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-primary-glow rounded-full animate-float delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-float delay-2000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-glow-primary animate-glow-pulse">
              <img 
                src={profilePhoto} 
                alt="Professional Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-display">
              <span className="bg-text-gradient bg-clip-text text-transparent bg-size-200 animate-text-shimmer">
                Your Name
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary font-medium animate-slide-up delay-200">
              Frontend Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
              Building modern web applications with clean UI and smart features. 
              Passionate about creating exceptional user experiences through code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up delay-500">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary-glow shadow-glow-primary hover:shadow-glow-hover transition-all duration-300 px-8 py-6 text-lg"
              >
                <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-slide-up delay-700">
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow-hover transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow-hover transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;