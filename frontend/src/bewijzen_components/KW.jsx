import React, { useState } from "react";
import { Kerntaak1, Kerntaak2 } from "../data/KW";

// Reusable component for project cards in Kerntaak sections */ }
const ProjectCard = ({ title, description, links = [], onOpenGallery }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white-100 rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold flex-1">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
          aria-expanded={isExpanded}
        >
          <svg
            className={`w-6 h-6 text-gray-600 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
      {/* // Description */}
      <p className="text-gray-700 mb-4 flex-grow text-md">{description}</p>
      {/* // Links Section */}
      {isExpanded && links.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 mt-4 border border-gray-200 overflow-y-scroll h-40">
          <div className="space-y-2">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                {(link.images || link.files || link.video || link.audio) && (
                  <button
                    onClick={() =>
                      onOpenGallery([
                        ...(link.images || []),
                        ...(link.files || []),
                        ...(link.video || []),
                        ...(link.audio || []),
                      ])
                    }
                    className="w-full text-left flex items-center text-primary hover:text-blue-700 font-medium text-sm py-2 px-3 hover:bg-white rounded transition-colors cursor-pointer"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </button>
                )}
                {!link.images && !link.files && !link.video && !link.audio && (
                  <a
                    href={link.url || "#"}
                    target={link.target || "_self"}
                    className="flex items-center text-primary hover:text-blue-700 font-medium text-sm py-2 px-3 hover:bg-white rounded transition-colors"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const KW = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section id="kw" className="mt-8  pt-20 ">
      <h1 className="text-4xl font-semibold mb-4">Kerntaken-Werkprocessen</h1>

      <h3 className="text-xl font-semibold mb-4 text-left">
        Kerntaak 1: Realiseert Software
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Kerntaak1.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
            onOpenGallery={(images) => {
              setGalleryImages(images);
              setCurrentImageIndex(0);
            }}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4 mt-15 text-left">
        Kerntaak 2: Werkt in een ontwikkelteam
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Kerntaak2.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
            onOpenGallery={(images) => {
              setGalleryImages(images);
              setCurrentImageIndex(0);
            }}
          />
        ))}
      </div>

      {/* Image Gallery Modal (Lightbox) */}
      {galleryImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* Close button */}
            <button
              onClick={() => setGalleryImages(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold cursor-pointer"
            >
              &times;
            </button>

            {/* Current Media */}
            {galleryImages[currentImageIndex]?.endsWith(".pdf") ? (
              <iframe
                src={`${galleryImages[currentImageIndex]}#toolbar=0`}
                className="w-full h-[80vh] rounded-md shadow-lg bg-white"
                title={`Slide ${currentImageIndex + 1}`}
              />
            ) : galleryImages[currentImageIndex]?.endsWith(".mp4") ? (
              <video
                controls
                className="max-h-[80vh] w-full rounded-md shadow-lg bg-black"
                src={galleryImages[currentImageIndex]}
              >
                Je browser ondersteunt dit video element niet.
              </video>
            ) : (
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="max-h-[80vh] object-contain rounded-md shadow-lg bg-white"
              />
            )}

            {/* Navigation Controls */}
            <div className="flex justify-between items-center w-full mt-6">
              <button
                onClick={handlePrevImage}
                className="text-white hover:text-gray-300 px-6 py-2 bg-gray-800/60 hover:bg-gray-700/80 rounded-lg transition-colors cursor-pointer"
              >
                Vorige
              </button>
              <span className="text-white font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
              <button
                onClick={handleNextImage}
                className="text-white hover:text-gray-300 px-6 py-2 bg-gray-800/60 hover:bg-gray-700/80 rounded-lg transition-colors cursor-pointer"
              >
                Volgende
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
