import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Navbar } from "../../bewijzen_components/ui/Navbar";
import { Footer } from "../../Home_components/Footer";
import {
  documentSets,
  tasks,
  technologies,
  softwareProjects,
  opgeleverd,
} from "../../data/McautherOutlet";

export const McautherOutlet = () => {
  const [activeTabs, setActiveTabs] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");
  const [activeGallery, setActiveGallery] = useState({ images: [], index: 0 });

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const openGallery = (images, index = 0) => {
    setActiveGallery({ images, index });
    setIsGalleryOpen(true);
  };

  const nextImage = () =>
    setActiveGallery((p) => ({ ...p, index: (p.index + 1) % p.images.length }));
  const prevImage = () =>
    setActiveGallery((p) => ({
      ...p,
      index: (p.index - 1 + p.images.length) % p.images.length,
    }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar title="McArthur Outlet Roermond" />

      <main className="container mx-auto px-30 py-30">
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div className="md:col-span-2">
            <section className="mb-12" id="about">
              <h2 className="text-4xl font-bold mb-4 ">Over dit project</h2>
              <p className="text-muted-foreground leading-relaxed text-start">
                Ontwikkel een mobiele applicatie voor het MC Arthur Outlet in
                Roermond die fungeert als een digitale adventskalender. De app
                moet dagelijks een nieuwe deal tonen in de maand december, die
                gebruikers kunnen bekijken en verzilveren bij deelnemende
                winkels en horecagelegenheden. De app moet beschikbaar zijn voor
                Android en voorzien zijn van een beheerdersdashboard voor het
                beheren van deals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-primary">
                Gebruikte technologieën
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 rounded-xl bg-white/60 shadow-sm"
                  >
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className=" top-24 bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-6">
                Kerntaken & Werkprocessen
              </h3>
              <ul className="space-y-5 italic text-sm text-muted-foreground">
                {tasks.map((task, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <a href="#about">
            <ArrowDown className="h-5 w-5 text-primary" />
          </a>
        </div>

        {/* DOCUMENTS SECTION */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold mb-6">
            Wensen,eisen,plannen en ontwerp
          </h2>
          <p className="text-muted-foreground leading-relaxed text-start mb-6 font-small italic">
            Hieronder vind je een overzicht van de verschillende documenten en
            plannen wat ik per taak heb gemaakt voor de klant. In die document
            staat beschreven wat de wensen en eisen van de klant zijn, hoe ik
            het project heb gepland en ontworpen. Na het documenten werd het ook
            naar de klant verstuurd voor een Klik op een document of plan om een
            meer details te zien.
          </p>

          <div className="space-y-8">
            {documentSets.map((docSet) => {
              const activeTab = activeTabs[docSet.id] || "documents";
              const currentItems =
                activeTab === "documents" ? docSet.documents : docSet.plans;

              return (
                <div key={docSet.id}>
                  <h3 className="text-md font-bold border-b text-primary text-start pb-2 mb-3">
                    {docSet.title}
                  </h3>

                  <div className="flex gap-6 mb-2">
                    <button
                      onClick={() =>
                        setActiveTabs((p) => ({
                          ...p,
                          [docSet.id]: "documents",
                        }))
                      }
                      className={`text-sm pb-1 font-medium ${activeTab === "documents" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                    >
                      Documenten
                    </button>
                    <button
                      onClick={() =>
                        setActiveTabs((p) => ({ ...p, [docSet.id]: "plans" }))
                      }
                      className={`text-sm pb-1 font-medium ${activeTab === "plans" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                    >
                      Plannen
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-card shadow-md w-200">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                      {currentItems.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => openModal(item)}
                          className="p-2 rounded-lg bg-white/60 cursor-pointer hover:shadow-md transition-all"
                        >
                          {activeTab === "documents" ||
                          item.file?.endsWith(".pdf") ? (
                            <div className="group relative h-[100px] bg-background border border-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-all overflow-hidden">
                              <div className="flex flex-col items-center transition-transform group-hover:scale-105 p-2 text-center">
                                <span className="text-red-500 font-bold text-xl">
                                  PDF
                                </span>
                                <span className="text-[10px] font-medium text-muted-foreground mt-1">
                                  {item.label}
                                </span>
                              </div>
                              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 size={20} className="text-primary" />
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="h-[90px] bg-background rounded mb-2 flex items-center justify-center text-[10px] font-bold text-muted-foreground/50 overflow-hidden relative">
                                {item.video ? (
                                  <>
                                    <video
                                      src={item.video}
                                      className="w-full h-full object-cover opacity-60"
                                      preload="metadata"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  "IMG"
                                )}
                              </div>
                              <p className="text-[12px] font-medium truncate text-center">
                                {item.label}
                              </p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* REALISEERT SOFTWARE SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Realiseert software</h2>
          <div className="space-y-24">
            {softwareProjects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
              >
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {project.id} - {project.title}
                  </h3>
                  <div className="prose prose-sm text-muted-foreground leading-snug text-start text-md">
                    <p className="mb-4">{project.description}</p>
                    <h4 className="text-foreground font-semibold text-md mt-4">
                      Hoe het is opgelost:
                    </h4>
                    <ul className="list-disc pl-4 space-y-2 mt-3 text-[14px]">
                      {project.solutions.map((sol, i) => (
                        <li key={i}>
                          <strong>{sol.label}:</strong> {sol.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="relative px-6">
                    <div
                      className="aspect-video bg-card rounded-lg overflow-hidden shadow-md cursor-pointer relative"
                      onClick={() => openGallery(project.images)}
                    >
                      <img
                        src={project.images[0].src}
                        className="w-full h-full object-fit"
                        alt="Code Screenshot"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-80 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white w-6 h-6" />
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-1 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 rounded-full"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 rounded-full"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  {project.video && (
                    <div className="px-6">
                      <h4 className="text-xs font-semibold text-foreground flex items-start">
                        Versiebeheer (GitHub)
                      </h4>
                      <div
                        className="relative aspect-video rounded-lg overflow-hidden border border-border group cursor-pointer bg-slate-950 max-w-[300px]"
                        onClick={() => {
                          setActiveVideoUrl(project.video);
                          setIsVideoOpen(true);
                        }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-10">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                          </div>
                        </div>
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[10px] text-white/40">
                          Preview Video
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* // OVERLEGGEN SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Overleggen </h2>
          <p className="text-muted-foreground leading-relaxed text-start mb-6 font-small italic">
            Tijdens dit project was communicatie met de klant en de rest van de
            betrokkenen cruciaal. Hieronder vind je voorbeelden en
            geluidsopnames van hoe het overleg is verlopen en welke keuzes we op
            basis daarvan hebben gemaakt.
          </p>

          <div className="space-y-12">
            {/* RIJ 1: Tekst Links, Afbeelding Rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 bg-card rounded-lg shadow-md border border-border">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Team overlegmoment
                </h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">
                  Aan het begin van de schooldag hielden we regelmatig een
                  teamoverleg. Hierin schreven we onze doelen voor de dag of de
                  week op een whiteboard. Hierdoor was het voor iedereen altijd
                  duidelijk wat er gedaan moest worden.
                </p>
              </div>
              <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-md border border-border">
                <img
                  src="/projects/McAuthur/media/MCA-overleg2.jpeg"
                  alt="Overleg Foto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIJ 2: Audio Links, Tekst Rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 bg-card rounded-lg shadow-md border border-border">
              <div className="w-full bg-muted/50 rounded-lg p-6 shadow-sm border border-border flex flex-col items-center justify-center gap-4">
                <span className="text-sm font-semibold text-foreground">
                  Geluidsopname overleg 1
                </span>
                <video controls className="w-full h-14 rounded-md bg-white">
                  <source
                    src="/projects/McAuthur/media/MCA-overleg4.mp4"
                    type="video/mp4"
                  />
                  Je browser ondersteunt dit video element niet.
                </video>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Overlegmoment met klanten
                </h3>
                <div className="text-muted-foreground text-[13px] leading-relaxed">
                  <p className="mb-2">
                    Geluidsopname van het overleg tussen klanten en developers.
                    Hierin is mijn inbreng te horen op de volgende momenten:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>00:06 - 00:07</li>
                    <li>01:30 - 02:00</li>
                    <li>03:23 - 03:40</li>
                    <li>04:04 - 04:50</li>
                    <li>08:45 - 09:07</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIJ 3: Audio Links, Tekst Rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 bg-card rounded-lg shadow-md border border-border">
              <div className="w-full bg-muted/50 rounded-lg p-6 shadow-sm border border-border flex flex-col items-center justify-center gap-4">
                <span className="text-sm font-semibold text-foreground">
                  Geluidsopname overleg 2
                </span>
                <video controls className="w-full h-14 rounded-md bg-white">
                  <source
                    src="/projects/McAuthur/media/MCA-overleg3.mp4"
                    type="audio/mpeg"
                  />
                  Je browser ondersteunt dit audio element niet.
                </video>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Groeps overlegmoment
                </h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">
                  Een overlegmoment binnen het groepje om even bij elkaar te
                  komen en na te denke, omadat beetje minder tijd had.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li>00:00 - 03:40</li>
                  <li>04:15- 06:00</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Presenteert opgeleverd werk
          </h2>
          <div className="text-muted-foreground leading-relaxed text-start mb-6 font-small italic">
            <p className="mb-4">
              Na het realiseren van het project moeten wij als groep het bij de
              klant inleveren, laten zien wat wel en niet gelukt is, uitleggen
              wat anders had gekund en feedback ontvangen.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>00:00 - 02:11</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 gap-10 items-start p-6 bg-card rounded-lg shadow-md border border-border">
              {opgeleverd?.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  {item.video ? (
                    <video
                      controls
                      className="w-full aspect-video rounded-lg shadow-md bg-black"
                    >
                      <source src={item.video} type="video/mp4" />
                      Je browser ondersteunt dit video element niet.
                    </video>
                  ) : (
                    <div
                      className="w-full aspect-video bg-card rounded-lg overflow-hidden shadow-md cursor-pointer relative"
                      onClick={() => openGallery(opgeleverd, index)}
                    >
                      <img
                        src={item.src}
                        className="w-full h-full object-cover"
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-80 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4"> Reflectie </h2>
          <div className="p-6 shadow-md  text-muted-foreground leading-relaxed text-start mb-6 text-md font-small italic flex flex-col gap-4">
            <p>
              Hoewel dit project door tijdgebrek niet volledig is afgerond, ben
              ik blij dat we iets nieuws hebben kunnen creëren wat we als team
              nog niet eerder hadden gedaan. Waar onze eerdere projecten
              voornamelijk web-gebaseerd waren, richtten we ons nu op het bouwen
              van een app. Dit betekende dat we aan de slag moesten met nieuwe
              programma's en technologieën, zoals Flutter.
            </p>
            <p>
              Hoewel de samenwerking redelijk verliep en de communicatie binnen
              de groep goed was, had de uitvoering zeker beter gekund. Het
              ontbrak de groepsleden, inclusief mijzelf, af en toe aan de juiste
              motivatie. Als we dit opnieuw zouden doen, zou de focus veel meer
              moeten liggen op het behouden van momentum en het niet verspillen
              van tijd aan bijzaken. Zelfs met onze beperkte kennis van Flutter
              op dat moment, hadden we er als groep harder voor kunnen en moeten
              werken.
            </p>
            <p>
              Daarnaast had het strikter volgen van de vooraf opgestelde
              planning een groot verschil kunnen maken. Desondanks ben ik
              tevreden over andere aspecten: de onderlinge communicatie en de
              bereidheid om goed samen te werken op de momenten dat het écht
              nodig was, verliepen gelukkig wel succesvol.
            </p>
          </div>
        </section>

        {/* --- MODAL STYLING (WHITE BACKGROUND) --- */}

        {/* Document Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white w-[80%] h-[80%] rounded-xl p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{selectedItem.label}</h3>
                <button onClick={closeModal}>X</button>
              </div>
              <div className="flex-1 bg-muted flex items-center justify-center overflow-hidden">
                {selectedItem.isExternal ? (
                  <div className="text-center p-8 bg-white border rounded-lg">
                    <p className="mb-4">Bekijk het Trello bord extern:</p>
                    <a
                      href={selectedItem.file}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded"
                    >
                      Open Trello
                    </a>
                  </div>
                ) : selectedItem.file?.endsWith(".pdf") ? (
                  <iframe
                    src={`${selectedItem.file}#toolbar=0`}
                    className="w-full h-full"
                  />
                ) : selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    controls
                    autoPlay
                    className="max-h-full w-full"
                  />
                ) : (
                  <img
                    src={selectedItem.file || selectedItem.image}
                    className="max-h-full"
                    alt="preview"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
            onClick={() => setIsGalleryOpen(false)}
          >
            <div
              className="bg-white w-[85%] h-[85%] rounded-xl p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">
                  {activeGallery.images[activeGallery.index].title}
                </h3>
                <button onClick={() => setIsGalleryOpen(false)}>X</button>
              </div>
              <div className="flex-1 flex items-center justify-center bg-slate-100 relative overflow-hidden">
                <img
                  src={activeGallery.images[activeGallery.index].src}
                  className="max-h-full object-contain"
                  alt="Code"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 bg-primary text-white p-3 rounded-full"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 bg-primary text-white p-3 rounded-full"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[70]"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="bg-white w-[80%] h-[80%] rounded-xl p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">GitHub Workflow</h3>
                <button onClick={() => setIsVideoOpen(false)}>X</button>
              </div>
              <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="max-h-full"
                />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
