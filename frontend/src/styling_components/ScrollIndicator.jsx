import { useState, useEffect } from "react";

export const ScrollIndicator = ({ sections = [] }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleIndicatorClick = (index) => {
    const section = sections[index];
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  if (sections.length === 0) {
    return null;
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-6 items-center z-40">
      {/* Vertical line connector */}
      <div className="absolute w-0.5 h-full bg-gradient-to-b from-primary/30 to-primary/10 z-0" />

      {/* Indicator buttons */}
      <div className="relative z-10 flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleIndicatorClick(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                : "bg-primary/40 hover:bg-primary/60 hover:scale-110"
            }`}
            title={section.name}
            aria-label={`Go to ${section.name}`}
          />
        ))}
      </div>

      {/* Section label */}
      {sections[activeSection] && (
        <div className="mt-4 text-center">
          <p className="text-xs text-foreground/60 font-medium uppercase tracking-widest whitespace-nowrap">
            {sections[activeSection].name}
          </p>
        </div>
      )}
    </div>
  );
};
