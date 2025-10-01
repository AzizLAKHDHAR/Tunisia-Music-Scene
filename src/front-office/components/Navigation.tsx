import { Search, Bell, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  variant?: "tunisia" | "verse";
}

const Navigation = ({ variant = "tunisia" }: NavigationProps) => {
  const logoText = variant === "tunisia" ? "MelodyTunisia" : "MelodyVerse";
  
  const getNavItems = () => {
    if (variant === "tunisia") {
      return ["Home", "Explore", "Artists", "Genres"];
    } else {
      return ["Home", "Explore", "Community"];
    }
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">{logoText}</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10 w-64 bg-card border-border"
              />
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            {/* Profile */}
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;