import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music2, Heart, Target, Users, Globe, Star, Award, Zap } from "lucide-react";

const About = () => {
  const missionPoints = [
    {
      icon: Music2,
      title: "Showcase Tunisian Talent",
      description: "Provide a dedicated platform for Tunisian artists to gain visibility and connect with their audience."
    },
    {
      icon: Globe,
      title: "Map the Music Scene",
      description: "Create a comprehensive database of venues, events, and music-related businesses across Tunisia."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Foster connections between artists, fans, industry professionals, and music enthusiasts."
    },
    {
      icon: Heart,
      title: "Preserve Culture",
      description: "Document and celebrate Tunisia's rich musical heritage and contemporary innovations."
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Authenticity",
      description: "We celebrate genuine artistic expression and cultural authenticity."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Our platform welcomes all genres, styles, and voices in Tunisian music."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace technology to create new opportunities for musical discovery."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain high standards in content curation and platform experience."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Project Launch",
      description: "AltScene Tunisia was conceived as a response to the lack of centralized resources for Tunisia's alternative music scene."
    },
    {
      year: "2024",
      title: "Community Building",
      description: "Started building relationships with local artists, venues, and music industry professionals."
    },
    {
      year: "2024",
      title: "Platform Development",
      description: "Developed the first version of the platform with core features for artist and venue discovery."
    },
    {
      year: "2025",
      title: "Expanding Reach",
      description: "Growing our database and expanding to cover more cities and regions across Tunisia."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            About AltScene Tunisia
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Story & Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AltScene Tunisia was born from a passion for music and a deep appreciation for Tunisia's vibrant alternative music scene. We believe that every artist deserves to be heard and every music lover deserves to discover something new.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to create the most comprehensive platform for Tunisia's music scene, connecting artists with audiences and preserving our cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <point.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from platform development to community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 text-purple-400 rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From conception to today, here's how AltScene Tunisia has evolved.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Vision</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We envision a future where Tunisian music is celebrated globally, where local artists have the tools and platforms they need to thrive, and where music lovers can easily discover the incredible talent that Tunisia has to offer.
          </p>
          <p className="text-lg text-muted-foreground">
            Together, we're building more than just a platform – we're building a movement that celebrates and preserves Tunisia's musical legacy while fostering its future growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
