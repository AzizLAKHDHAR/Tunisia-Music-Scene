import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Artists = () => {
  const artists = [
    {
      name: "Amira",
      description: "Emerging star blending traditional melodies with modern pop",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-200"
    },
    {
      name: "Karim",
      description: "Veteran artist known for his soulful voice and poetic lyrics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      color: "bg-slate-600"
    },
    {
      name: "Leila",
      description: "Rising talent in the electronic music scene, experimenting with new sounds",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-200"
    },
    {
      name: "Omar",
      description: "Iconic figure in Tunisian folk music, preserving cultural heritage",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-200"
    },
    {
      name: "Sonia",
      description: "Versatile singer-songwriter with a unique blend of genres",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      color: "bg-gray-600"
    },
    {
      name: "Fares",
      description: "Innovative producer pushing the boundaries of Tunisian hip-hop",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      color: "bg-teal-500"
    },
    {
      name: "Nour",
      description: "Classical musician renowned for her mastery of the oud",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      color: "bg-slate-600"
    },
    {
      name: "Hassan",
      description: "Rock band known for their energetic performances and socially conscious lyrics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      color: "bg-slate-600"
    },
    {
      name: "Rima",
      description: "Indie artist with a dreamy soundscape and introspective lyrics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-400"
    },
    {
      name: "Walid",
      description: "Popular singer known for his catchy tunes and vibrant stage presence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      color: "bg-slate-600"
    },
    {
      name: "Salma",
      description: "Jazz vocalist with a smooth and captivating style",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-200"
    },
    {
      name: "Youssef",
      description: "Experimental musician exploring the intersection of traditional and electronic music",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      color: "bg-orange-300"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="verse" />
      
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-foreground mb-8">Explore Tunisian Artists</h1>
        
        {/* Filters */}
        <div className="flex space-x-4 mb-12">
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Genre</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Region</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Era</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 hover:bg-card/80 transition-colors cursor-pointer"
            >
              <div className={`${artist.color} rounded-xl p-4 mb-4 flex items-center justify-center h-32`}>
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{artist.name}</h3>
              <p className="text-sm text-muted-foreground">{artist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;