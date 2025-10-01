import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar, Music, Instagram, Youtube, X } from "lucide-react";
import { Navbar, Footer } from '../index';

// Custom SVG Icons
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const BandcampIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 18.75L7.437 5.25h16.563v13.5H0z"/>
  </svg>
);

const SoundCloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 17.939h-1v-8.068c0-.308-.252-.56-.56-.56s-.56.252-.56.56v8.068h-1v-7.18c0-.308-.252-.56-.56-.56s-.56.252-.56.56v7.18h-.813c-.252 0-.457-.205-.457-.457V12.8c0-.252.205-.457.457-.457h.813c.252 0 .457.205.457.457v4.682c0 .252.205.457.457.457H7c.252 0 .457-.205.457-.457V10.482c0-.252.205-.457.457-.457s.457.205.457.457v7c0 .252.205.457.457.457zm8.648-12c-2.761 0-5 2.239-5 5 0 .34.043.672.125.992L12 17.939h11c.896 0 1.618-.722 1.618-1.618v-8.703c0-.896-.722-1.618-1.618-1.618H15.648z"/>
  </svg>
);

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setSelectedArtist(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArtist(null);
  };

  const artists = [
    {
      name: "Amina Fakhet",  
      genre: "Electronic Folk",
      description: "Blending traditional Tunisian melodies with modern electronic beats",
      image: "/placeholder.svg",
      color: "bg-gradient-to-br from-purple-400 to-blue-500",
      location: "Tunis, Tunisia",
      yearActive: "2015",
      albumsCount: 3,
      bio: "Amina Fakhet is a pioneering artist in the Tunisian electronic folk scene. She masterfully combines traditional oud melodies with contemporary electronic production, creating a unique sound that bridges generations. Her work has been featured in international festivals and she's considered one of the most innovative artists in North African music today.",
      socialLinks: {
        spotify: "https://spotify.com",
        bandcamp: "https://bandcamp.com",
        youtube: "https://youtube.com",
        soundcloud: "https://soundcloud.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Karim Ouesslati",
      genre: "Jazz Fusion",
      description: "Innovative jazz compositions with Middle Eastern influences",
      image: "/placeholder.svg", 
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      location: "Sfax, Tunisia",
      yearActive: "2012",
      albumsCount: 4,
      bio: "Karim Ouesslati is a virtuoso pianist and composer who has revolutionized the jazz scene in Tunisia. His compositions seamlessly blend bebop jazz with traditional Arabic maqam scales, creating a distinctive sound that has earned him recognition across the MENA region. He has collaborated with numerous international artists and continues to push the boundaries of jazz fusion.",
      socialLinks: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Leila Ben Ahmed",
      genre: "Indie Rock",
      description: "Powerful vocals and introspective lyrics in Arabic and French",
      image: "/placeholder.svg",
      color: "bg-gradient-to-br from-green-400 to-teal-500",
      location: "Sousse, Tunisia",
      yearActive: "2018",
      albumsCount: 2,
      bio: "Leila Ben Ahmed emerged as a powerful voice in the Tunisian indie rock scene with her bilingual approach to songwriting. Her music explores themes of identity, social change, and personal growth, resonating with young audiences across the Maghreb. Her debut album received critical acclaim for its raw authenticity and emotional depth.",
      socialLinks: {
        spotify: "https://spotify.com",
        bandcamp: "https://bandcamp.com",
        soundcloud: "https://soundcloud.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Mehdi Trabelsi",
      genre: "Hip Hop",
      description: "Conscious rap addressing social issues in Tunisia",
      image: "/placeholder.svg",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      location: "Bizerte, Tunisia",
      yearActive: "2016",
      albumsCount: 5,
      bio: "Mehdi Trabelsi is one of Tunisia's most socially conscious rappers, using his platform to address issues ranging from youth unemployment to political corruption. His lyrics, delivered in Tunisian dialect, have made him a voice for his generation. Despite facing censorship challenges, he continues to produce music that reflects the struggles and hopes of modern Tunisia.",
      socialLinks: {
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
        soundcloud: "https://soundcloud.com"
      }
    },
    {
      name: "Yasmine Hamdan",
      genre: "Alternative Pop",
      description: "Dreamy soundscapes with poetic Arabic lyrics",
      image: "/placeholder.svg",
      color: "bg-gradient-to-br from-pink-400 to-purple-500",
      location: "Monastir, Tunisia",
      yearActive: "2014",
      albumsCount: 3,
      bio: "Yasmine Hamdan creates ethereal alternative pop music that transports listeners to otherworldly realms. Her haunting vocals and atmospheric production style have earned her a dedicated following in the alternative music scene. She draws inspiration from both Western indie pop and traditional Arabic poetry, creating a sound that's uniquely her own.",
      socialLinks: {
        spotify: "https://spotify.com",
        bandcamp: "https://bandcamp.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Omar Zribi",
      genre: "World Music",
      description: "Master of traditional oud with contemporary arrangements",
      image: "/placeholder.svg",
      color: "bg-gradient-to-br from-indigo-400 to-cyan-500",
      location: "Kairouan, Tunisia",
      yearActive: "2010",
      albumsCount: 6,
      bio: "Omar Zribi is a master oud player who has dedicated his career to preserving and modernizing traditional Tunisian music. Trained in classical Arabic music from a young age, he has developed a unique style that honors traditional techniques while incorporating contemporary elements. His performances have graced stages from Carthage to Carnegie Hall.",
      socialLinks: {
        youtube: "https://youtube.com",
        soundcloud: "https://soundcloud.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Tunisia Music Scene
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Discover the vibrant and diverse music scene of Tunisia. From traditional oud masters to electronic innovators, 
          explore the artists shaping the soundscape of North Africa.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="outline" className="flex items-center gap-2">
            <span>Genre</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <span>Location</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <span>Era</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div key={index} className="group">
              <div className="flip-card-container h-80">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div 
                      className="bg-card rounded-xl p-6 hover:bg-card/80 transition-all cursor-pointer border border-border hover:shadow-lg h-80 flex flex-col justify-between"
                      onClick={() => openModal(index)}
                    >
                      {/* Artist Image */}
                      <div className={`${artist.color} rounded-xl p-4 mb-4 flex items-center justify-center h-32`}>
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      
                      {/* Artist Name and Genre */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{artist.name}</h3>
                        <Badge variant="outline" className="mb-4">{artist.genre}</Badge>
                        <p className="text-sm text-muted-foreground">{artist.description}</p>
                      </div>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-center gap-3 mt-4">
                        {artist.socialLinks.spotify && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-10 w-10 rounded-full hover:bg-green-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(artist.socialLinks.spotify, '_blank');
                            }}
                            title="Listen on Spotify"
                          >
                            <SpotifyIcon className="h-5 w-5 text-green-500" />
                          </Button>
                        )}
                        {artist.socialLinks.bandcamp && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-10 w-10 rounded-full hover:bg-blue-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(artist.socialLinks.bandcamp, '_blank');
                            }}
                            title="Visit Bandcamp"
                          >
                            <BandcampIcon className="h-5 w-5 text-blue-500" />
                          </Button>
                        )}
                        {artist.socialLinks.youtube && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-10 w-10 rounded-full hover:bg-red-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(artist.socialLinks.youtube, '_blank');
                            }}
                            title="Watch on YouTube"
                          >
                            <Youtube className="h-5 w-5 text-red-500" />
                          </Button>
                        )}
                        {artist.socialLinks.soundcloud && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-10 w-10 rounded-full hover:bg-orange-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(artist.socialLinks.soundcloud, '_blank');
                            }}
                            title="Listen on SoundCloud"
                          >
                            <SoundCloudIcon className="h-5 w-5 text-orange-500" />
                          </Button>
                        )}
                        {artist.socialLinks.instagram && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-10 w-10 rounded-full hover:bg-pink-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(artist.socialLinks.instagram, '_blank');
                            }}
                            title="Follow on Instagram"
                          >
                            <Instagram className="h-5 w-5 text-pink-500" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div 
                      className="bg-card rounded-xl p-6 hover:bg-card/80 transition-all cursor-pointer border border-border hover:shadow-lg h-80 flex flex-col justify-between"
                      onClick={() => openModal(index)}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{artist.name}</h3>
                          <Badge variant="secondary" className="mt-1">{artist.genre}</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{artist.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Active since {artist.yearActive}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Music className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{artist.albumsCount} albums</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{artist.bio}</p>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Button variant="outline" size="sm">
                          Click for details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Artist Details */}
        {showModal && selectedArtist !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="relative z-10 bg-card rounded-xl p-8 border border-border shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${artists[selectedArtist].color} rounded-xl p-4 flex items-center justify-center`}>
                    <img
                      src={artists[selectedArtist].image}
                      alt={artists[selectedArtist].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{artists[selectedArtist].name}</h2>
                    <Badge variant="secondary" className="mt-1">{artists[selectedArtist].genre}</Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Artist Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{artists[selectedArtist].location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Active since {artists[selectedArtist].yearActive}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{artists[selectedArtist].albumsCount} albums</span>
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground">{artists[selectedArtist].description}</p>
                </div>
                
                {/* Biography */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">About {artists[selectedArtist].name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{artists[selectedArtist].bio}</p>
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Connect with {artists[selectedArtist].name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {artists[selectedArtist].socialLinks.spotify && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-green-500/10 hover:border-green-500"
                        onClick={() => window.open(artists[selectedArtist].socialLinks.spotify, '_blank')}
                      >
                        <SpotifyIcon className="h-4 w-4 text-green-500" />
                        Spotify
                      </Button>
                    )}
                    {artists[selectedArtist].socialLinks.bandcamp && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-blue-500/10 hover:border-blue-500"
                        onClick={() => window.open(artists[selectedArtist].socialLinks.bandcamp, '_blank')}
                      >
                        <BandcampIcon className="h-4 w-4 text-blue-500" />
                        Bandcamp
                      </Button>
                    )}
                    {artists[selectedArtist].socialLinks.youtube && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-red-500/10 hover:border-red-500"
                        onClick={() => window.open(artists[selectedArtist].socialLinks.youtube, '_blank')}
                      >
                        <Youtube className="h-4 w-4 text-red-500" />
                        YouTube
                      </Button>
                    )}
                    {artists[selectedArtist].socialLinks.soundcloud && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-orange-500/10 hover:border-orange-500"
                        onClick={() => window.open(artists[selectedArtist].socialLinks.soundcloud, '_blank')}
                      >
                        <SoundCloudIcon className="h-4 w-4 text-orange-500" />
                        SoundCloud
                      </Button>
                    )}
                    {artists[selectedArtist].socialLinks.instagram && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-pink-500/10 hover:border-pink-500"
                        onClick={() => window.open(artists[selectedArtist].socialLinks.instagram, '_blank')}
                      >
                        <Instagram className="h-4 w-4 text-pink-500" />
                        Instagram
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Artists;