import { Search, Bell, Music2, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface NavbarProps {
  variant?: "tunisia" | "verse";
}

const Navbar = ({ variant = "tunisia" }: NavbarProps) => {
  const logoText = "AltScene TN";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getNavItems = () => {
    if (variant === "tunisia") {
      return ["Home", "Blog"];
    } else {
      return ["Home", "Community"];
    }
  };

  const exploreItems = [
    { name: "Artists", path: "/artists" },
    { name: "Venues", path: "/venues" },
    { name: "Scene Professionals", path: "/scene-professionals" }
  ];

  const projectInfoItems = [
    { name: "About the Project", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Project Contributors", path: "/project-contributors" }
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/alt scene 2.png" alt="AltScene TN" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">{logoText}</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => {
              const getPath = (item: string) => {
                if (item === "Home") return "/";
                return `/${item.toLowerCase()}`;
              };
              
              return (
                <Link
                  key={item}
                  to={getPath(item)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              );
            })}
            
            {/* Explore Dropdown */}
            {variant === "tunisia" && (
              <div className="relative group">
                <Link
                  to="/explore"
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                >
                  Explore
                  <ChevronDown className="h-4 w-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-md last:rounded-b-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Project Infos Dropdown */}
            {variant === "tunisia" && (
              <div className="relative group">
                <Link
                  to="/project-infos"
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                >
                  Project Infos
                  <ChevronDown className="h-4 w-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-52 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {projectInfoItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-md last:rounded-b-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
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

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {getNavItems().map((item) => {
                const getPath = (item: string) => {
                  if (item === "Home") return "/";
                  return `/${item.toLowerCase()}`;
                };
                
                return (
                  <Link
                    key={item}
                    to={getPath(item)}
                    className="block text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
              
              {/* Mobile Explore Section */}
              {variant === "tunisia" && (
                <>
                  <Link
                    to="/explore"
                    className="block text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Explore
                  </Link>
                  <div className="pl-4 space-y-2">
                    {exploreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block text-sm text-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Project Infos Section */}
                  <Link
                    to="/project-infos"
                    className="block text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Project Infos
                  </Link>
                  <div className="pl-4 space-y-2">
                    {projectInfoItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block text-sm text-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
