import React from "react";
import { Link } from "react-router-dom";
import { schoolprojects } from "../data/School";

export const School = () => {
  return (
    <section id="school" className=" mt-8 pt-20">
      <h1 className="text-4xl font-bold mb-4">School Projecten</h1>
      <p className="text-lg text-gray-700  text-start">
        Tijdens mijn opleiding als software developer aan het VISTA College heb
        ook aan diverse projecten gewerkt die verdeeld waren in sprints. Deze
        projecten varieerden van kleine opdrachten tot grotere groepsprojecten,
        waarbij ik mijn vaardigheden in zowel frontend als backend ontwikkeling
        heb kunnen toepassen en verder ontwikkelen. Hieronder vind je een
        overzicht van enkele van de meest opvallende projecten waaraan ik heb
        gewerkt tijdens mijn studie.
      </p>

      <div className="mt-6 mb-6 flex items-center gap-3">
        <p className="text-lg italic text-primary/90">Bekijk projecten</p>
        <span className="text-3xl text-primary/90">↓</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {schoolprojects.map((project) => (
          <Link
            key={project.id}
            to={`/school-project/${project.slug}`}
            className="bg-white rounded-lg shadow-md p-4 h-60 w-60 flex flex-col hover:shadow-lg transition-shadow"
          >
            <h3 className="text-md font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 text-center text-sm flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 text-xs font-medium border italic rounded-full text-primary/40"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-primary hover:text-primary/60 font-medium text-sm">
              Bekijk project
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
