import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, MapPin, Award, ArrowRight, Star, Calendar, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import tunisiaDesert from "@/assets/tunisia-desert.jpg";

const Explore = () => {
  const featuredArtists = [
    { name: "Omar Souleyman", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face" },
    { name: "Emel Mathlouthi", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
    { name: "Dhafer Youssef", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Mounira Hamdi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "Lotfi Bouchnak", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  ];

  const featuredVenues = [
    {
      name: "Carthage Theatre",
      location: "Carthage, Tunis",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      type: "Historic Venue"
    },
    {
      name: "El Teatro Club",
      location: "Tunis Centre Ville",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1574391884720-bbc9278f7af6?w=300&h=200&fit=crop",
      type: "Club"
    },
    {
      name: "Jazz Café Tunis",
      location: "Tunis Centre Ville", 
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      type: "Jazz Club"
    }
  ];

  const featuredContributors = [
    {
      name: "Sarah Mahmoudi",
      role: "Music Producer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      category: "Production"
    },
    {
      name: "Ahmed Ben Ali", 
      role: "Sound Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      category: "Technical"
    },
    {
      name: "Leila Khelifi",
      role: "Music Video Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", 
      category: "Visual"
    }
  ];

  const genres = [
    { name: "Traditional", color: "bg-orange-200", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Pop", color: "bg-teal-500", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Hip Hop", color: "bg-green-600", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Electronic", color: "bg-teal-600", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Fusion", color: "bg-muted", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Indie", color: "bg-orange-300", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      {/* Hero Section */}
      <section className="relative mb-10">
        <div 
          className="h-96 bg-cover bg-center mx-4 lg:mx-8 mt-8 flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${tunisiaDesert})` }}
        >
          <div className="bg-background/50 absolute inset-0 rounded-xl"></div>
          <div className="relative z-10 text-center text-foreground px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Tunisia's Music Scene
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Dive into the vibrant world of Tunisian music. From traditional melodies to modern fusion, discover the artists, venues, and contributors shaping the sound of Tunisia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Explore Categories */}
      <section className="py-20 px-4 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Explore Tunisia's Music Scene</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Navigate through the different aspects of Tunisia's vibrant music ecosystem
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Artists Card */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border shadow-lg bg-card hover:bg-card/80">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary to-accent rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Artists</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Discover talented musicians from across Tunisia, from emerging indie artists to established performers shaping the local scene.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>100+ Featured Artists</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Multiple Genres</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Artist Profiles & Music</span>
                  </div>
                </div>
                <Link to="/artists">
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-primary/90 transition-colors">
                    Explore Artists
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Venues Card */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border shadow-lg bg-card hover:bg-card/80">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-secondary to-accent rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-10 w-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Venues</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Find the best music venues across Tunisia, from intimate clubs to historic theaters where live music comes alive.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Historic & Modern Venues</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Live Event Listings</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Venue Reviews & Info</span>
                  </div>
                </div>
                <Link to="/venues">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 group-hover:bg-secondary/90 transition-colors">
                    Discover Venues
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Scene Contributors Card */}
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border shadow-lg bg-card hover:bg-card/80">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-accent to-primary rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">Scene Contributors</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Meet the professionals behind the scenes - producers, sound engineers, promoters, and other key figures driving Tunisia's music industry.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Industry Professionals</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Behind-the-Scenes Heroes</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Networking Opportunities</span>
                  </div>
                </div>
                <Link to="/scene-contributors">
                  <Button className="w-full bg-accent hover:bg-accent/90 group-hover:bg-accent/90 transition-colors">
                    Meet Contributors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Sections */}
      
      {/* Featured Artists Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Artists</h2>
              <p className="text-gray-400">Discover the voices defining Tunisia's music scene</p>
            </div>
            <Link to="/artists">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-blue-900/20 border-blue-400 text-blue-400 hover:text-blue-300">
                View All Artists
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {featuredArtists.map((artist, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-gray-300 text-center font-medium group-hover:text-blue-400 transition-colors">{artist.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Venues</h2>
              <p className="text-gray-400">Explore the spaces where music comes alive</p>
            </div>
            <Link to="/venues">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-orange-900/20 border-orange-400 text-orange-400 hover:text-orange-300">
                View All Venues
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVenues.map((venue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group bg-gray-700 hover:bg-gray-600">
                <div className="relative overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent/90 text-accent-foreground text-xs backdrop-blur-sm">
                    {venue.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors text-white">{venue.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {venue.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-300">{venue.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Scene Contributors</h2>
              <p className="text-gray-400">Meet the professionals shaping Tunisia's music industry</p>
            </div>
            <Link to="/scene-contributors">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-purple-900/20 border-purple-400 text-purple-400 hover:text-purple-300">
                Meet All Contributors
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContributors.map((contributor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group bg-gray-800 hover:bg-gray-700">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-6 group-hover:scale-105 transition-transform">
                    <AvatarImage src={contributor.image} alt={contributor.name} />
                    <AvatarFallback className="text-lg bg-gray-600 text-white">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors text-white">{contributor.name}</h3>
                  <p className="text-gray-400 mb-4">{contributor.role}</p>
                  <Badge variant="outline" className="bg-purple-900/20 border-purple-400 text-purple-400">
                    {contributor.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Genre */}
      <section className="py-20 px-4 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore by Genre</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover Tunisia's diverse musical landscape through different genres and styles
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {genres.map((genre, index) => (
              <div
                key={index}
                className={`${genre.color} rounded-2xl p-8 h-40 flex items-center justify-center relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
                <span className="relative z-10 text-white font-bold text-xl">{genre.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;
