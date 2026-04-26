import React from "react";
import { Link } from "react-router-dom";
import { stageprojects } from "../data/Stage";

export const Stage = () => {
  return (
    <section id="stage" className="mt-8 pt-20">
      <h1 className="text-4xl font-bold mb-4">WeSolved</h1>
      <p className="text-lg text-gray-700  text-start">
        Tijdens mijn stage bij WeSolved heb ik de kans gehad om te werken aan
        verschillende taken, maar ook het testen, debuggen en migreren van
        software. Projecten werden in taken verdeeld waarbij elke developer een
        taak toegewezen kreeg. Mijn bijdrage aan het team bestond uit het
        oplossen van problemen, het implementeren van nieuwe functies en het
        verbeteren van bestaande code.
      </p>

      <div className="mt-6 mb-6 flex items-center gap-3">
        <p className="text-lg italic text-primary/90">Bekijk projecten</p>
        <span className="text-3xl text-primary/90">↓</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stageprojects.map((project) => (
          <Link
            key={project.id}
            to={`/stage-project/${project.slug}`}
            className="bg-white rounded-lg shadow-md p-4 h-60 w-50 flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
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
