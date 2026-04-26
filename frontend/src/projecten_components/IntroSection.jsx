import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const sections = [
  {
    type: "hero",
    title: "Ontdek mijn reis als Software Developer",
    content: (
      <>
        <p className="mt-6 text-lg/8 text-gray-700">
          Dit portfolio is niet zomaar een verzameling van projecten,
          <br />
          het is een weergave van mijn reis, mijn groei, en de vaardigheden die
          ik heb ontwikkeld tijdens mijn stage en opleiding.
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          Hier neem ik je mee door alle kerntaken en werkprocessen, waarmee ik
          aantoon dat ik niet alleen de technische vaardigheden beheers, maar
          ook de mindset en professionaliteit heb om een succesvolle Software
          Developer te zijn.
        </p>
        <p className="mt-6 text-lg/8 text-gray-700 font-bold italic">
          Ontdek mijn reis als Software Developer.
        </p>
      </>
    ),
    image: "/projects/me6.jpeg",
  },
  {
    type: "projects type",
    cards: [
      {
        title: "Stage projecten",
        description:
          "Het stageprojecten omvatten de belangrijkste projecten waaraan ik heb gewerkt tijdens mijn stage bij Wesolved.",
        image: "/projects/wesld.png",
        href: "/bewijzen",
      },
      {
        title: "School projecten",
        description:
          "Deze projecten omvatten werk dat ik heb gedaan tijdens mijn opleiding.",
        image: "/projects/eigen.png",
        href: "/bewijzen#school",
      },
    ],
  },
];

export default function IntroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm p-3 z-20">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Nana Ama Jonathan
          </a>
          <button
            type="button"
            aria-label="Back"
            onClick={() => window.history.back()}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="overflow-hidden bg-white min-h-screen flex flex-col pt-20">
        <div className="flex-1 mx-auto max-w-6xl px-6 lg:px-8 w-full flex flex-col relative min-h-[80vh]">
          {/* hero type section slide */}
          {sections[currentSlide].type === "hero" ? (
            <div className="flex-1 grid grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
              <div>
                <div className="lg:max-w-lg">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {sections[currentSlide].title}
                  </h2>
                  <div className="text-sm sm:text-base ">
                    {sections[currentSlide].content}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Portfolio showcase"
                  src={sections[currentSlide].image}
                  width={2432}
                  height={1442}
                  className="h-100 w-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 border-2 border-gray-200/50 mt-20"
                />
              </div>
            </div>
          ) : (
            // school projecten type section slide
            <div className="flex-1 flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {sections[currentSlide].cards.map((card, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-bold text-gray-600 mb-3">
                      {card.title}
                    </h2>
                    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-3">
                      <a href={card.href} className="block">
                        <div className="h-80 overflow-hidden mt-8">
                          <img
                            alt={card.title}
                            src={card.image}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </div>
                    <p className="text-gray-600 text-md italic leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-3 pb-6">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
