import { Navbar } from "../Home_components/Navbar";
import { HeroSection } from "../Home_components/HeroSection";
import { AboutSection } from "../Home_components/AboutSection";
import SkillsSection from "../Home_components/SkillsSection";
import { ProjectsSection } from "../Home_components/ProjectsSection";
import { ContactSection } from "../Home_components/ContactSection";
import { Footer } from "../Home_components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Navbar*/}
      <Navbar />
      {/* Main Content */}

      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Skills Section */}
        <SkillsSection />
        {/* Projects Section */}
        <ProjectsSection />
        {/* Contact Section */}
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
