import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Instagram, Youtube } from "lucide-react";

const ArtistProfile = () => {
  const songs = [
    { title: "Nour", artist: "Amani" },
    { title: "Layali", artist: "Amani" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Artist Header */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=128&h=128&fit=crop&crop=face"
              alt="Amani"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Amani</h1>
          <p className="text-muted-foreground mb-1">Musician | Tunis, Tunisia</p>
          <p className="text-muted-foreground">Joined 2021</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-8 mb-8 border-b border-border">
          <button className="pb-4 text-foreground border-b-2 border-foreground">Overview</button>
          <button className="pb-4 text-muted-foreground hover:text-foreground">Music</button>
          <button className="pb-4 text-muted-foreground hover:text-foreground font-semibold">About</button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
            <p className="text-foreground leading-relaxed">
              Amani is a rising star in the Tunisian music scene, known for her unique blend of traditional Tunisian melodies with modern pop influences. Her music often explores themes of love, identity, and social change, resonating with a diverse audience both locally and internationally.
            </p>
          </section>

          {/* Media Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Media</h2>
            <div className="space-y-4">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-card rounded-lg p-4 hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                    <div>
                      <h3 className="font-semibold text-foreground">{song.title}</h3>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>
                  </div>
                  <Button size="icon" className="bg-primary hover:bg-primary/90">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Region */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Region</h2>
              <p className="text-foreground">Tunis, Tunisia</p>
            </section>

            {/* Era */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Era</h2>
              <p className="text-foreground">2020s</p>
            </section>
          </div>

          {/* External Links */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">External Links</h2>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" className="mb-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" className="mb-2">
                  <Youtube className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">YouTube</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArtistProfile;