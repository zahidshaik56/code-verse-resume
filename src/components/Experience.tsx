import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Renu Sharma Foundation",
      role: "Frontend Developer Intern",
      duration: "Feb 2025 - June 2025",
      location: "San Francisco, CA",
      description: "Led a team of 5 developers in building scalable web applications using React and Node.js. Implemented CI/CD pipelines that reduced deployment time by 40% and architected microservices infrastructure that improved system reliability by 30%. Mentored junior developers and conducted code reviews to maintain code quality.",
      technologies: ["React.js", "Node.js", "CI/CD", "Microservices", "Team Leadership"]
    },
    {
      company: "M",
      role: "Python Developer Intern",
      duration: "Summer 2019",
      location: "Bangalore, India",
      description: "Developed RESTful APIs using Express.js and MongoDB while creating responsive UI components with React and Material UI. Participated in Agile development processes including daily stand-ups and sprint planning. Collaborated with the QA team to identify and fix bugs, ensuring high-quality software delivery.",
      technologies: ["Python", "Express.js", "MongoDB", "React.js", "Material UI", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Work <span className="bg-text-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on internships and real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-500 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:text-right text-sm text-muted-foreground">
                      <div className="flex items-center lg:justify-end gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center lg:justify-end gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;