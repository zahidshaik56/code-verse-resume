import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Development Internship",
      issuer: "MotionCut",
      date: "May 2024",
      description: "Comprehensive Python development program covering data structures, algorithms, web development with Django, and database management.",
      skills: ["Python", "Django", "Data Structures", "Web Development"],
      certificateUrl: "#",
      verified: true
    },
    {
      title: "Machine Learning Certification", 
      issuer: "Bharat Intern",
      date: "February 2024",
      description: "Advanced machine learning course covering supervised and unsupervised learning, neural networks, and practical ML implementations.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      certificateUrl: "#",
      verified: true
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "NPTEL",
      date: "January 2024", 
      description: "Comprehensive cloud computing course covering AWS, Azure, cloud architecture, and distributed systems fundamentals.",
      skills: ["Cloud Computing", "AWS", "Azure", "Distributed Systems"],
      certificateUrl: "#",
      verified: true
    },
    {
      title: "Java Programming Internship",
      issuer: "Tech Solutions",
      date: "December 2023",
      description: "Object-oriented programming with Java, Spring Boot framework, and enterprise application development practices.",
      skills: ["Java", "Spring Boot", "OOP", "Enterprise Development"],
      certificateUrl: "#",
      verified: true
    },
    {
      title: "Frontend Web Development",
      issuer: "FreeCodeCamp",
      date: "November 2023",
      description: "Complete frontend development curriculum covering HTML, CSS, JavaScript, React.js, and responsive web design.",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Responsive Design"],
      certificateUrl: "#",
      verified: true
    },
    {
      title: "Database Management Systems",
      issuer: "Coursera",
      date: "October 2023",
      description: "Advanced database concepts including SQL, NoSQL databases, database design, and optimization techniques.",
      skills: ["SQL", "NoSQL", "Database Design", "MySQL"],
      certificateUrl: "#",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="bg-text-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="p-6 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-500 group animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    {cert.verified && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Verified
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="text-xs px-2 py-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Certificate
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="inline-block p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{certifications.length}</div>
                  <div className="text-sm text-muted-foreground">Total Certifications</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <div className="text-sm text-muted-foreground">Different Platforms</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;