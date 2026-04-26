import { Navbar } from "../bewijzen_components/ui/Navbar";
import { Inleiding } from "../bewijzen_components/Inleiding";
import { Stage } from "../bewijzen_components/Stage";
import { School } from "../bewijzen_components/School";
import { KW } from "../bewijzen_components/KW";
import { Footer } from "../Home_components/Footer";
import { ScrollIndicator } from "../styling_components/ScrollIndicator";
import { useEffect } from "react";

const sections = [
  { id: "inleiding", name: "Inleiding" },
  { id: "stage", name: "Stage" },
  { id: "school", name: "School" },
  { id: "kw", name: "KW" },
];

export const Bewijzen = () => {
  useEffect(() => {
    document.documentElement.classList.add("bewijzen-no-scrollbar");
    return () => {
      document.documentElement.classList.remove("bewijzen-no-scrollbar");
    };
  }, []);

  useEffect(() => {
    // Scroll to anchor if present in URL
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground ">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Indicator */}
      <ScrollIndicator sections={sections} />

      {/* Main Content */}
      <main className="container mx-auto px-30 py-20 bewijzen-snap-container bwijzen-snap-section">
        {/* Inleiding */}
        <Inleiding />
        <Stage />
        <School />
        <KW />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
