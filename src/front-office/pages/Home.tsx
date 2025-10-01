import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share, Play, Calendar, MapPin } from "lucide-react";

const Home = () => {
  const musicPosts = [
    {
      id: 1,
      type: "release",
      title: "Desert Dreams - New Single",
      artist: { name: "Amani Tounsi", username: "@amani_music", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
      date: "2 hours ago",
      description: "A fusion of traditional Tunisian melodies with modern electronic beats. This single explores the vastness of the Sahara through sound.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      genre: "Electronic Fusion",
      duration: "3:45",
      hasAudio: true
    },
    {
      id: 2,
      type: "event",
      title: "Live at Carthage Theatre",
      artist: { name: "Leila Fusion", username: "@leila_fusion", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
      date: "Tomorrow 8:00 PM",
      description: "An intimate concert bringing together traditional Tunisian folk with contemporary jazz. Experience live music in the historic Carthage Theatre.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      genre: "Folk Jazz",
      location: "Carthage Theatre, Tunis",
      hasAudio: false
    },
    {
      id: 3,
      type: "article",
      title: "The Underground Revolution",
      artist: { name: "Sarah Ben Ali", username: "@sarah_music", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
      date: "1 day ago",
      description: "Exploring how young Tunisian artists are creating a vibrant underground scene that challenges traditional musical boundaries and creates new sounds.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      genre: "Music Journalism",
      readTime: "5 min read",
      hasAudio: false
    },
    {
      id: 4,
      type: "release",
      title: "Echoes of the Desert - New EP",
      artist: { name: "Sahara Sounds", username: "@sahara_electronic", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
      date: "2 days ago",
      description: "A 5-track EP telling stories of Tunisia's landscapes through electronic soundscapes. Each track represents a different region of our beautiful country.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      genre: "Electronic",
      duration: "18:32",
      hasAudio: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      {/* Hero Image - Cleef Post */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <picture>
            <source 
              media="(min-width: 1024px)" 
              srcSet="/cleef post.png 1024w, /cleef post.png 2048w" 
              sizes="1024px"
            />
            <source 
              media="(min-width: 768px)" 
              srcSet="/cleef post.png 768w, /cleef post.png 1536w" 
              sizes="768px"
            />
            <img 
              src="/cleef post.png" 
              alt="Cleef Post" 
              className="w-full h-auto rounded-xl shadow-lg"
              loading="eager"
            />
          </picture>
        </div>
      </section>
      
      {/* Music Content Feed */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Latest Music Content</h1>
        
        <div className="space-y-8">
          {musicPosts.map((post) => (
            <Card key={post.id} className="w-full overflow-hidden">
              <div className="md:flex">
                {post.image && (
                  <div className="md:w-2/5">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                      {post.hasAudio && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 text-white">
                            <Play className="h-6 w-6 ml-1" />
                          </Button>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.type === 'release' ? 'bg-green-500 text-white' :
                          post.type === 'event' ? 'bg-blue-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {post.type === 'release' ? 'New Release' :
                           post.type === 'event' ? 'Event' : 'Article'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`${post.image ? 'md:w-3/5' : 'w-full'} p-6`}>
                  <div className="flex items-start space-x-3 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.artist.avatar} alt={post.artist.name} />
                      <AvatarFallback>{post.artist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{post.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{post.artist.name}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">{post.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <span className="font-medium">Genre:</span>
                      <span className="ml-1">{post.genre}</span>
                    </span>
                    {post.duration && (
                      <span className="flex items-center">
                        <Play className="h-4 w-4 mr-1" />
                        {post.duration}
                      </span>
                    )}
                    {post.location && (
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {post.location}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      {post.type === 'release' ? 'Listen Now' :
                       post.type === 'event' ? 'Get Tickets' : 'Read More'}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                      <Share className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;