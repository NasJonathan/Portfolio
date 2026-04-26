export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 relative items-center"
    >
      <div className="container mx-auto max-w-6xl ">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Over mij
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-6 text-start">
            <h2 className="text-l md:text-xl font-bold tracking-tight pt-8">
              Ontdek wie Nana Ama Jonathan is en wat mijn motivatie drijft.
            </h2>
            <p className="text-base md:text-base ">
              Ik ben een gepassioneerde software developer met een sterke focus
              op het creëren van mooie en functionele webervaringen. Momenteel
              studeer ik Software Development aan VISTA College waar ik aan mijn
              professionele identiteit werk. Mijn expertise ligt in het bouwen
              van responsieve, gebruiksvriendelijke websites en applicaties die
              niet alleen visueel aantrekkelijk zijn, maar ook naadloos
              presteren op verschillende apparaten en platforms.
            </p>
            <p className="text-l md:text-base">
              Wat mij drijft is de kracht van technologie om mensen te verbinden
              en ideeën tot leven te brengen. Of ik nu werk aan een strak
              vormgegeven portfolio, een interactieve webapp of een backend met
              Flask — ik streef altijd naar eenvoud, functionaliteit en impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="hero-button">
                Neem Contact Op
              </a>
              <a href="projects/cv.pdf" className="cv-button">
                Download CV
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="projects/me3.jpeg"
              alt="Nana Ama Jonathan"
              className="rounded-lg shadow-lg max-w-full h-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
