import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./front-office/pages/Home";
import Artists from "./front-office/pages/Artists";
import ArtistProfile from "./front-office/pages/ArtistProfile";
import Blog from "./front-office/pages/Blog";
import Explore from "./front-office/pages/Explore";
import Venues from "./front-office/pages/Venues";
import SceneContributors from "./front-office/pages/SceneContributors";
import ProjectContributors from "./front-office/pages/ProjectContributors";
import ProjectInfos from "./front-office/pages/ProjectInfos";
import About from "./front-office/pages/About";
import FAQ from "./front-office/pages/FAQ";
import NotFound from "./front-office/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/scene-professionals" element={<SceneContributors />} />
          <Route path="/project-contributors" element={<ProjectContributors />} />
          <Route path="/project-infos" element={<ProjectInfos />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
