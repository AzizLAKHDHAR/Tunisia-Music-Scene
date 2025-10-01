import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Underground Revolution: Tunisia's Alternative Music Movement",
      excerpt: "Explore how young Tunisian artists are creating a vibrant underground scene that challenges traditional musical boundaries...",
      author: "Sarah Ben Ali",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "From Basements to Stages: Rising Stars of Tunisia's Indie Scene",
      excerpt: "Meet the independent musicians who are redefining what it means to be an alternative artist in Tunisia...",
      author: "Ahmed Mansouri",
      date: "January 10, 2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Electronic Experimentation: The Digital Sound of Modern Tunisia",
      excerpt: "How electronic music producers are blending traditional Tunisian elements with cutting-edge digital production...",
      author: "Leila Trabelsi",
      date: "January 5, 2025",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="tunisia" />
      
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Alternative Music Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and news from Tunisia's underground and alternative music scene
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-primary mb-2">FEATURED POST</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{blogPosts[0].author}</p>
                    <p className="text-sm text-muted-foreground">{blogPosts[0].date}</p>
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
