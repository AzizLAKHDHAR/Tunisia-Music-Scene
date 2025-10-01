import { Music2, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={process.env.NODE_ENV === 'production' ? '/Tunisia-Music-Scene/alt%20scene%202.png' : '/alt scene 2.png'} alt="AltScene TN" className="h-6 w-6" />
              <span className="text-xl font-bold text-foreground">AltScene TN</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Explore the alternative music scene of Tunisia. Discover underground artists, indie bands, and the evolving sounds that define Tunisia's alternative culture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-muted-foreground hover:text-primary transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AltScene TN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
