import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchArtistsFromCSV, convertToDisplayArtist, Artist } from "@/utils/csvParser";

interface DisplayArtist {
  name: string;
  genre: string;
  image: string;
  spotify: string;
  youtube: string;
  color: string;
  description: string;
  location: string;
  yearActive: string;
  albumsCount: number;
  socialLinks: {
    spotify: string;
    youtube: string;
    instagram: string;
  };
}

const Artists = () => {
  const [artists, setArtists] = useState<DisplayArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArtists = async () => {
      try {
        const csvArtists = await fetchArtistsFromCSV();
        const displayArtists = csvArtists.map((artist, index) => convertToDisplayArtist(artist, index));
        setArtists(displayArtists);
      } catch (err) {
        setError('Failed to load artists');
        console.error('Error loading artists:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArtists();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation variant="verse" />
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="text-center text-foreground">Loading artists...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation variant="verse" />
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

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