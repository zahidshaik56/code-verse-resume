import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Renu Sharma Foundation",
      role: "Frontend Developer Intern",
      duration: "June 2024 - August 2024",
      location: "Remote",
      description: "Worked on a React-based internship portal with real-time form validation and dynamic dashboard updates. Implemented responsive design patterns and collaborated with backend developers to integrate RESTful APIs. Enhanced user experience through intuitive UI/UX design and optimized application performance by 40%.",
      technologies: ["React.js", "JavaScript", "CSS3", "REST APIs", "Git"]
    },
    {
      company: "MotionCut",
      role: "Python Development Intern",
      duration: "March 2024 - May 2024",
      location: "Remote",
      description: "Developed Python applications focusing on data processing and automation scripts. Created efficient algorithms for data analysis and built CLI tools that improved workflow efficiency. Gained hands-on experience with Python libraries and version control systems.",
      technologies: ["Python", "Data Analysis", "CLI Development", "Git", "Testing"]
    },
    {
      company: "Bharat Intern",
      role: "Machine Learning Intern",
      duration: "January 2024 - February 2024", 
      location: "Remote",
      description: "Worked on machine learning projects including predictive modeling and data visualization. Implemented various ML algorithms and created data pipelines for processing large datasets. Contributed to model optimization and performance analysis.",
      technologies: ["Python", "Machine Learning", "Data Science", "TensorFlow", "Pandas"]
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