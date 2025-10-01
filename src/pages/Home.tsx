import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import tunisiaDesert from "@/assets/tunisia-desert.jpg";
import { useState, useEffect } from "react";
import { fetchArtistsFromCSV, Artist } from "@/utils/csvParser";

const Home = () => {
  const [featuredArtists, setFeaturedArtists] = useState<{ name: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedArtists = async () => {
      try {
        const csvArtists = await fetchArtistsFromCSV();
        // Take first 5 artists from CSV for featured section
        const featured = csvArtists.slice(0, 5).map(artist => ({
          name: artist.Name,
          image: artist.Image || '/placeholder.svg'
        }));
        setFeaturedArtists(featured);
      } catch (err) {
        console.error('Error loading featured artists:', err);
        // Fallback to original hardcoded artists if CSV fails
        setFeaturedArtists([
          { name: "Omar Souleyman", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face" },
          { name: "Emel Mathlouthi", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
          { name: "Dhafer Youssef", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
          { name: "Mounira Hamdi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
          { name: "Lotfi Bouchnak", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedArtists();
  }, []);

  const genres = [
    { name: "Traditional", color: "bg-orange-200", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Pop", color: "bg-teal-500", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Hip Hop", color: "bg-green-600", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Electronic", color: "bg-teal-600", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Fusion", color: "bg-gray-700", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
    { name: "Indie", color: "bg-orange-300", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="tunisia" />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center rounded-xl mx-4 lg:mx-8 mt-8 flex items-center justify-center"
          style={{ backgroundImage: `url(${tunisiaDesert})` }}
        >
          <div className="bg-black/40 absolute inset-0 rounded-xl"></div>
          <div className="relative z-10 text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover the Soul of Tunisia Through Music
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Explore the rich tapestry of Tunisian musical heritage, from traditional melodies to contemporary beats. Immerse yourself in the sounds that define a nation.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-8">Featured Artists</h2>
        {loading ? (
          <div className="text-center text-foreground">Loading featured artists...</div>
        ) : (
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {featuredArtists.map((artist, index) => (
              <div key={index} className="flex flex-col items-center min-w-0">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-foreground text-center">{artist.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Explore by Genre */}
      <section className="py-16 px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-8">Explore by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`${genre.color} rounded-xl p-6 h-32 flex items-center justify-center relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <span className="relative z-10 text-white font-semibold text-lg">{genre.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;