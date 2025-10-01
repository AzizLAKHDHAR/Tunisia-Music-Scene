import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music2, Heart, Users, Globe, Target, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectInfos = () => {
  const projectStats = [
    { label: "Artists Featured", value: "100+", icon: Users },
    { label: "Venues Mapped", value: "50+", icon: Globe },
    { label: "Contributors", value: "20+", icon: Heart },
    { label: "Cities Covered", value: "15+", icon: Target },
  ];

  const projectFeatures = [
    {
      title: "Artist Discovery",
      description: "Discover emerging and established Tunisian musicians across all genres",
      icon: Music2,
      color: "bg-blue-500"
    },
    {
      title: "Venue Mapping",
      description: "Comprehensive database of music venues across Tunisia",
      icon: Globe,
      color: "bg-green-500"
    },
    {
      title: "Community Building",
      description: "Connect artists, fans, and industry professionals",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Cultural Preservation",
      description: "Documenting and preserving Tunisia's rich musical heritage",
      icon: Heart,
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Open Source Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AltScene Tunisia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive platform dedicated to mapping, documenting, and celebrating Tunisia's vibrant alternative music scene.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Frequently Asked Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes AltScene Tunisia Special
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines technology with cultural passion to create a comprehensive resource for Tunisia's music community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`${feature.color} p-3 rounded-lg`}>
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/about">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-card hover:bg-card/80 border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">About the Project</h3>
                  <p className="text-muted-foreground">Learn about our mission, vision, and the story behind AltScene Tunisia</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/faq">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-card hover:bg-card/80 border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">FAQ</h3>
                  <p className="text-muted-foreground">Find answers to commonly asked questions about our platform</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/project-contributors">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-card hover:bg-card/80 border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Project Contributors</h3>
                  <p className="text-muted-foreground">Meet the talented team behind this platform</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectInfos;
