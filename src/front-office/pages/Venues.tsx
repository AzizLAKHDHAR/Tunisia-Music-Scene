import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Star, ExternalLink, Phone } from "lucide-react";

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: "Carthage Theatre",
      description: "Historic amphitheater offering an intimate setting for acoustic and traditional performances",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      location: "Carthage, Tunis",
      capacity: 500,
      rating: 4.8,
      type: "Historic Venue",
      features: ["Acoustic Excellence", "Historic Setting", "Outdoor Stage"],
      upcomingEvents: 3,
      contact: "+216 71 123 456",
      website: "www.carthagetheatre.tn"
    },
    {
      id: 2,
      name: "Sidi Bou Said Cultural Center",
      description: "Modern cultural space in the heart of the blue and white city, perfect for contemporary performances",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      location: "Sidi Bou Said, Tunis",
      capacity: 300,
      rating: 4.6,
      type: "Cultural Center",
      features: ["Modern Sound System", "Art Gallery", "Café"],
      upcomingEvents: 5,
      contact: "+216 71 987 654",
      website: "www.sidibousaid-culture.tn"
    },
    {
      id: 3,
      name: "La Villa des Arts",
      description: "Elegant venue combining music and visual arts, hosting experimental and fusion performances",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      location: "Tunis Medina",
      capacity: 150,
      rating: 4.7,
      type: "Art Venue",
      features: ["Intimate Setting", "Art Exhibitions", "Wine Bar"],
      upcomingEvents: 2,
      contact: "+216 71 456 789",
      website: "www.lavilladesarts.tn"
    },
    {
      id: 4,
      name: "El Teatro Club",
      description: "Underground venue known for electronic music, DJ sets, and late-night performances",
      image: "https://images.unsplash.com/photo-1574391884720-bbc9278f7af6?w=400&h=300&fit=crop",
      location: "Tunis Centre Ville",
      capacity: 250,
      rating: 4.5,
      type: "Club",
      features: ["Electronic Setup", "Late Night", "Bar"],
      upcomingEvents: 7,
      contact: "+216 71 321 987",
      website: "www.elteatro.tn"
    },
    {
      id: 5,
      name: "Hammamet Festival Grounds",
      description: "Outdoor venue hosting the annual Hammamet International Festival and summer concerts",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      location: "Hammamet",
      capacity: 2000,
      rating: 4.9,
      type: "Festival Grounds",
      features: ["Large Capacity", "Outdoor Setting", "Festival Heritage"],
      upcomingEvents: 1,
      contact: "+216 72 654 321",
      website: "www.hammametfestival.tn"
    },
    {
      id: 6,
      name: "Jazz Café Tunis",
      description: "Cozy jazz club featuring local and international artists in an intimate setting",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      location: "Tunis Centre Ville",
      capacity: 80,
      rating: 4.4,
      type: "Jazz Club",
      features: ["Jazz Focus", "Intimate Atmosphere", "Fine Dining"],
      upcomingEvents: 4,
      contact: "+216 71 147 258",
      website: "www.jazzcafetunis.tn"
    }
  ];

  const venueTypes = ["All", "Historic Venue", "Cultural Center", "Art Venue", "Club", "Festival Grounds", "Jazz Club"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-background via-card to-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Music Venues</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Discover the spaces where Tunisian music comes alive - from historic theaters to underground clubs
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {venueTypes.map((type) => (
              <Button
                key={type}
                variant={type === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                  {venue.type}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{venue.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{venue.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {venue.location}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {venue.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{venue.capacity} capacity</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{venue.upcomingEvents} upcoming</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {venue.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span className="text-xs">{venue.contact}</span>
                  </div>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Own a Music Venue?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our platform to showcase your venue, connect with artists, and become part of Tunisia's vibrant music ecosystem.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Register Your Venue
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Venues;
