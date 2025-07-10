import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App using React.js",
      description: "A comprehensive task management application built using React.js that allows users to create, update, and delete tasks. Features task prioritization, due date reminders, progress tracking, and real-time notifications for enhanced productivity.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "JavaScript", "CSS", "Local Storage"],
      liveDemo: "#",
      githubCode: "#",
      featured: true
    },
    {
      title: "Ecommerce Sales Analysis using Apache Spark", 
      description: "An advanced analysis of ecommerce sales data using Apache Spark to gain comprehensive insights into sales patterns, customer behavior, and revenue trends. Features data processing, visualization, and predictive analytics.",
      image: "/api/placeholder/600/400", 
      technologies: ["Apache Spark", "Python", "Data Analysis", "SQL", "Big Data"],
      liveDemo: "#",
      githubCode: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with React.js and modern web technologies, featuring smooth animations and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      liveDemo: "https://shaik-zahid-hussain-gamma.vercel.app/", 
      githubCode: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application with interactive maps, forecasts, and weather alerts. Features location-based weather data and responsive design for all devices.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "TypeScript", "Weather API", "Chart.js", "Tailwind CSS"],
      liveDemo: "#",
      githubCode: "#",
      featured: false
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with team features, project tracking, deadlines, and progress monitoring. Includes drag-and-drop interface and real-time updates.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Firebase", "Context API", "React DnD", "Styled Components"],
      liveDemo: "#",
      githubCode: "#", 
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard. Features secure authentication and order tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "Stripe API", "MongoDB", "Redux", "Express.js"],
      liveDemo: "#",
      githubCode: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and technical expertise
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-0 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-500 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Eye className="h-12 w-12 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Project Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary-glow shadow-glow-primary hover:shadow-glow-hover transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 animate-fade-in">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="p-6 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-500 group animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Project Preview */}
                  <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <Eye className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
