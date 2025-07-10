import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete professional profile
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-500 animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Resume Preview */}
              <div className="order-2 lg:order-1">
                <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border hover:border-primary transition-colors duration-300 group">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Resume Preview</h3>
                      <p className="text-muted-foreground text-sm">
                        Click the buttons below to view or download my complete resume
                      </p>
                    </div>
                    <div className="bg-background/50 rounded p-4 text-xs text-muted-foreground">
                      <div className="space-y-2">
                        <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                        <div className="h-2 bg-muted rounded w-1/2"></div>
                        <div className="h-2 bg-muted rounded w-2/3"></div>
                        <div className="h-1 bg-muted rounded w-full mt-3"></div>
                        <div className="h-1 bg-muted rounded w-4/5"></div>
                        <div className="h-1 bg-muted rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Actions */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get My Resume</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My resume includes detailed information about my education, 
                    technical skills, project experience, internships, and certifications. 
                    Perfect for HR teams and hiring managers who want to learn more about my background.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-glow shadow-glow-primary hover:shadow-glow-hover transition-all duration-300 group"
                  >
                    <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume (PDF)
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View in New Tab
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Last updated: December 2024</span>
                    <span>2 pages • PDF format</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300 text-center animate-slide-up delay-100">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Internships Completed</div>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300 text-center animate-slide-up delay-200">
              <div className="text-2xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Projects Developed</div>
            </Card>
            
            <Card className="p-6 bg-card-gradient border-border hover:shadow-glow-primary transition-all duration-300 text-center animate-slide-up delay-300">
              <div className="text-2xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Certifications Earned</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;