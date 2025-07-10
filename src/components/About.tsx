import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    "React.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS",
    "Node.js", "Python", "Git", "Responsive Design", "Problem Solving"
  ];

  const softSkills = ["Teamwork", "Communication", "Leadership", "Time Management", "Adaptability"];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a drive for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with a Computer Science background, 
                  specializing in React.js and modern web technologies. Currently based in 
                  [Your Location], I love turning complex problems into simple, beautiful solutions.
                </p>
                <p>
                  My journey in tech started with curiosity about how websites work, and has 
                  evolved into a deep passion for creating user-centric applications that make 
                  a difference. I'm always eager to learn new technologies and collaborate with 
                  talented teams.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or working on personal projects that challenge my skills.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Current Goal</h3>
              </div>
              <p className="text-lg text-primary font-medium">
                Looking for a frontend developer role in 2025 where I can contribute to 
                innovative projects and grow with a dynamic team.
              </p>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 animate-slide-up delay-200">
            <Card className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;