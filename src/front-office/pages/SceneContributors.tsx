import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Music, Camera, Users, Award, MapPin, ExternalLink, Instagram, Twitter, Globe } from "lucide-react";

const SceneContributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Sarah Mahmoudi",
      role: "Music Producer",
      category: "Production",
      description: "Award-winning producer specializing in electronic fusion and traditional Tunisian music arrangements",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 8,
      notableWork: "Produced 'Desert Winds' album",
      projects: 25,
      social: {
        instagram: "@sarah_produces",
        twitter: "@sarahmahmoudi",
        website: "www.sarahmahmoudi.com"
      }
    },
    {
      id: 2,
      name: "Ahmed Ben Ali",
      role: "Sound Engineer",
      category: "Technical",
      description: "Master audio engineer with expertise in live sound and studio recording for world music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Sfax",
      yearsActive: 12,
      notableWork: "Chief Engineer at Hammamet Festival",
      projects: 150,
      social: {
        instagram: "@ahmedaudio",
        website: "www.benalistudios.tn"
      }
    },
    {
      id: 3,
      name: "Leila Khelifi",
      role: "Music Video Director",
      category: "Visual",
      description: "Creative director known for cinematic music videos that blend Tunisian landscapes with contemporary narratives",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      location: "Sidi Bou Said",
      yearsActive: 6,
      notableWork: "Directed 'Medina Nights' video series",
      projects: 35,
      social: {
        instagram: "@leila_visuals",
        twitter: "@leilakhelifi",
        website: "www.leilakhelifi.art"
      }
    },
    {
      id: 4,
      name: "Omar Trabelsi",
      role: "Event Promoter",
      category: "Business",
      description: "Leading promoter bringing international acts to Tunisia and promoting local talent across North Africa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 15,
      notableWork: "Founded Tunisia Music Week",
      projects: 200,
      social: {
        instagram: "@omar_events",
        twitter: "@trabelsiomar",
        website: "www.tunisiamusicweek.com"
      }
    },
    {
      id: 5,
      name: "Fatma Nasri",
      role: "Music Journalist",
      category: "Media",
      description: "Leading music journalist covering the Tunisian and Maghreb music scene for international publications",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 10,
      notableWork: "Author of 'Sounds of the Sahara'",
      projects: 300,
      social: {
        instagram: "@fatma_writes",
        twitter: "@fatmanasri",
        website: "www.fatmanasri.com"
      }
    },
    {
      id: 6,
      name: "Karim Bouzid",
      role: "Music Photographer",
      category: "Visual",
      description: "Concert photographer capturing the energy of live performances across Tunisia's music venues",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      location: "Sousse",
      yearsActive: 7,
      notableWork: "Official photographer for major festivals",
      projects: 80,
      social: {
        instagram: "@karim_shoots",
        website: "www.karimbouzid.photo"
      }
    },
    {
      id: 7,
      name: "Nadia Hamza",
      role: "Booking Agent",
      category: "Business",
      description: "Talent agent representing emerging Tunisian artists and facilitating international collaborations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      location: "Tunis",
      yearsActive: 9,
      notableWork: "Booked first Tunisian act at WOMEX",
      projects: 120,
      social: {
        instagram: "@nadia_bookings",
        twitter: "@nadiahamza",
        website: "www.hamzatalent.tn"
      }
    },
    {
      id: 8,
      name: "Youssef Mejri",
      role: "Record Label Owner",
      category: "Business",
      description: "Founder of Desert Sounds Records, championing traditional and contemporary Tunisian music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Monastir",
      yearsActive: 11,
      notableWork: "Founded Desert Sounds Records",
      projects: 60,
      social: {
        instagram: "@youssef_records",
        twitter: "@youssefmejri",
        website: "www.desertsounds.tn"
      }
    }
  ];

  const categories = ["All", "Production", "Technical", "Visual", "Business", "Media"];
  const categoryIcons = {
    Production: Music,
    Technical: Award,
    Visual: Camera,
    Business: Users,
    Media: Globe
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-background via-card to-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Scene Professionals</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Meet the talented professionals behind Tunisia's thriving music scene
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card shadow-sm">
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
            const CategoryIcon = categoryIcons[contributor.category] || Music;
            
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
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{contributor.location}</span>
                      </div>
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
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Notable Work:</p>
                    <p className="text-sm font-medium">{contributor.notableWork}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
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
          <h2 className="text-3xl font-bold text-center mb-12">Scene Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-muted-foreground">Active Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-muted-foreground">International Collaborations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a music professional contributing to Tunisia's music scene? Join our network and connect with fellow contributors.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Become a Contributor
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SceneContributors;
