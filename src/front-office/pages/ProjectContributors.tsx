import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Palette, Settings, Globe, ExternalLink, Instagram, Twitter, Github } from "lucide-react";

const ProjectContributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Amine Khelifi",
      role: "Full-Stack Developer",
      category: "Development",
      description: "Lead developer specializing in React, Node.js, and modern web technologies for music platform development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 5,
      notableWork: "Built the main platform architecture",
      projects: 45,
      social: {
        github: "@aminekhelifi",
        twitter: "@amine_dev",
        website: "www.aminekhelifi.dev"
      }
    },
    {
      id: 2,
      name: "Sarra Benali",
      role: "UI/UX Designer",
      category: "Design",
      description: "Creative designer focused on user experience and visual identity for music and cultural platforms",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      location: "Sfax",
      yearsActive: 6,
      notableWork: "Designed the complete user interface",
      projects: 35,
      social: {
        instagram: "@sarra_design",
        twitter: "@sarrabenali",
        website: "www.sarrabenali.design"
      }
    },
    {
      id: 3,
      name: "Mohamed Trabelsi",
      role: "DevOps Engineer",
      category: "Infrastructure",
      description: "Infrastructure specialist ensuring platform scalability, security, and performance optimization",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 7,
      notableWork: "Set up CI/CD and cloud infrastructure",
      projects: 25,
      social: {
        github: "@mtrabelsi",
        twitter: "@mohamed_ops",
        website: "www.mtrabelsi.tech"
      }
    },
    {
      id: 4,
      name: "Leila Mansouri",
      role: "Product Manager",
      category: "Management",
      description: "Product strategist coordinating development efforts and ensuring platform meets user needs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      location: "Sousse",
      yearsActive: 8,
      notableWork: "Managed platform roadmap and features",
      projects: 30,
      social: {
        twitter: "@leila_pm",
        website: "www.leilamansouri.com"
      }
    },
    {
      id: 5,
      name: "Youssef Bouazizi",
      role: "Mobile Developer",
      category: "Development",
      description: "Mobile app developer creating iOS and Android applications for the music platform ecosystem",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Monastir",
      yearsActive: 4,
      notableWork: "Developed mobile companion apps",
      projects: 20,
      social: {
        github: "@ybouazizi",
        twitter: "@youssef_mobile",
        website: "www.ybouazizi.dev"
      }
    },
    {
      id: 6,
      name: "Nadia Slimi",
      role: "QA Engineer",
      category: "Quality Assurance",
      description: "Quality assurance specialist ensuring platform reliability and optimal user experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 5,
      notableWork: "Established testing frameworks",
      projects: 40,
      social: {
        twitter: "@nadia_qa",
        website: "www.nadiaslimi.tech"
      }
    },
    {
      id: 7,
      name: "Khaled Zouari",
      role: "Data Analyst",
      category: "Analytics",
      description: "Data specialist analyzing user behavior and music trends to improve platform features",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      location: "Gafsa",
      yearsActive: 3,
      notableWork: "Built analytics dashboard",
      projects: 15,
      social: {
        github: "@kzouari",
        twitter: "@khaled_data",
        website: "www.khaledzouari.data"
      }
    },
    {
      id: 8,
      name: "Fatma Jebali",
      role: "Security Specialist",
      category: "Security",
      description: "Cybersecurity expert ensuring platform security, data protection, and compliance standards",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 6,
      notableWork: "Implemented security protocols",
      projects: 28,
      social: {
        twitter: "@fatma_security",
        website: "www.fatmajebali.security"
      }
    }
  ];

  const categories = ["All", "Development", "Design", "Infrastructure", "Management", "Quality Assurance", "Analytics", "Security"];
  const categoryIcons = {
    Development: Code,
    Design: Palette,
    Infrastructure: Settings,
    Management: Globe,
    "Quality Assurance": Settings,
    Analytics: Globe,
    Security: Settings
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-background via-card to-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Project Contributors</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Meet the talented developers, designers, and specialists who built this platform
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Contributors Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contributors.map((contributor) => {
            const CategoryIcon = categoryIcons[contributor.category] || Code;
            
            return (
              <Card key={contributor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-3">
                    <AvatarImage src={contributor.image} alt={contributor.name} />
                    <AvatarFallback>
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <CategoryIcon className="h-4 w-4" />
                    <span className="text-sm font-medium text-muted-foreground">{contributor.role}</span>
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {contributor.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {contributor.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{contributor.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span>{contributor.yearsActive} years</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Projects:</span>
                      <span>{contributor.projects}+</span>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Key Contribution:</p>
                    <p className="text-sm font-medium">{contributor.notableWork}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      {contributor.social.github && (
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <Github className="h-3 w-3" />
                        </Button>
                      )}
                      {contributor.social.instagram && (
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <Instagram className="h-3 w-3" />
                        </Button>
                      )}
                      {contributor.social.twitter && (
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <Twitter className="h-3 w-3" />
                        </Button>
                      )}
                      {contributor.social.website && (
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <Globe className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Development Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">8</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-muted-foreground">Combined Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-muted-foreground">Amazing Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a talented developer, designer, or tech professional? We're always looking for passionate individuals to join our mission.
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            View Open Positions
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectContributors;
