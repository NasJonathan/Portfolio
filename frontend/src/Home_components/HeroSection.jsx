import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-18">
            Hallo, Mijn Naam is Nana Ama Jonathan
          </h1>
          <h2 className="text-2xl md:text-2xl"> Software Developer </h2>
          <p className="text-l md:text-1xl">
            Gepassioneerd in het creëren van mooie en functionele webervaringen.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {" "}
            <a href="#projects" className="hero-button">
              Projecten
            </a>
            <a href="#contact" className="hero-button">
              Contact Mij
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 ">
          <div className="py-8 px-4 relative bg-primary/10 rounded-lg">
            <h2 className="text-3xl text-primary text-bold ">1+</h2>
            <p className="text-semibold">Jaren Ervaring</p>
          </div>
          <div className="py-8 px-4 relative bg-primary/10 rounded-lg">
            <h2 className="text-3xl text-primary text-bold ">5+</h2>
            <p className="text-semibold">Projecten Afgerond </p>
          </div>
          <div className="py-8 px-4 relative bg-primary/10 rounded-lg">
            <h2 className="text-3xl text-primary text-bold ">6+</h2>
            <p className="text-semibold">Happy Klanten </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
        <span className="text-sm text-muted-foreground mb-2 ">Scroll</span>
        <a href="#about">
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};
