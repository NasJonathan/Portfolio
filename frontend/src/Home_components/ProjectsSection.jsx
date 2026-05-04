import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "McArthur Designer Outlet",
    description:
      "Een interactieve kerstkalender-app, waarin gebruikers dagelijks verrassingen zoals kortingen en cadeaus kunnen ontgrendelen. Ontworpen om engagement te verhogen tijdens de kerstperiode.",
    image: "/projects/McAuthur/logo.png",
    tags: ["Flutter", "Dart", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/NasJonathan/Adventskalender-app",
  },
  {
    id: 2,
    title: "Onlybowling",
    description:
      "Eee reservatie- en beheersysteem voor bowlingbanen, ontwikkeld om beschikbaarheid te controleren en te reserveren.",
    image: "/projects/Onlybowling/logo.jpg",
    tags: ["PHP", "HTML/CSS", "MySQL"],
    demoUrl: "/school-project/onlybowling",
  },
  {
    id: 3,
    title: "PDF-CHATBOT",
    description:
      "Een AI-gedreven chatbot die PDF-documenten analyseert en users vragen laat stellen over de inhoud.",
    image: "/projects/PdfChatbot/logo.png",
    tags: ["HTML/CSS", "Python", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/NanaAma035/Python-PDF-Chatbot/tree/main",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Projecten
        </h2>

        <p className="text-center  italic text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hier zijn enkele van mijn recente projecten, klik op de link voor meer
          details of github link om de code te bekijken.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md card hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-80 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className=" text-sm text-muted-foreground text-center">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-center space-x-4 mt-auto pt-4">
                  {project.demoUrl.startsWith("/") ? (
                    <Link
                      to={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            className="hero-button w-fit flex items-center mx-auto gap-2"
            to="/projects"
          >
            Klik voor meer <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
