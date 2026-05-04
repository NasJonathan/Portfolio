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
  testData,
  opgeleverd,
} from "../../data/Onlybowling";

export const Onlybowling = () => {
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
      <Navbar title="Onlybowling" />

      <main className="container mx-auto px-30 py-25">
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <section className="mb-12" id="about">
              <h2 className="text-4xl font-bold mb-4 ">Over dit project</h2>
              <p className="text-muted-foreground leading-relaxed text-start">
                De doelstelling van het project is om een reserveringssysteem op
                te leveren waarmee zowel het klantenbestand als het personeel
                tevreden is. Gebruiksvriendelijkheid moet de boventoon voeren.
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
        {/* // TESTING SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Testen</h2>
          <p className="text-muted-foreground leading-relaxed text-start mb-6 font-small italic">
            Tijdens het realiseren van het project heb ik ook verschillende
            tests uitgevoerd om de kwaliteit van de code te waarborgen.
            Hieronder vind je een overzicht van de verschillende tests die ik
            heb uitgevoerd, inclusief unit tests, integratietests en end-to-end
            tests.
          </p>

          <div className="space-y-12">
            {testData.map((test) => (
              <div
                key={test.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-6 bg-card rounded-lg shadow-md border border-border"
              >
                {/* LEFT SIDE: TEXT DESCRIPTION */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary">
                    {test.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {test.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[13px] text-muted-foreground">
                    {test.testItems?.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.label}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT SIDE: TEST EVIDENCE (PHOTOS) */}
                <div className="flex flex-col gap-4">
                  {test.images && test.images.length > 0 && (
                    <div className="relative px-6">
                      <div
                        className="aspect-video bg-card rounded-lg overflow-hidden shadow-md cursor-pointer relative"
                        onClick={() => openGallery(test.images)}
                      >
                        <img
                          src={test.images[0].src}
                          className="w-full h-full object-cover"
                          alt="Test Screenshot"
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
                  )}
                </div>
              </div>
            ))}
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
            <div className="mt-4 grid grid-cols-1 gap-10 items-start p-6 bg-card rounded-lg shadow-md border border-border">
              {opgeleverd?.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4"> Reflectie </h2>
          <div className="p-6 shadow-md  text-muted-foreground leading-relaxed text-start mb-6 text-md font-small italic flex flex-col gap-4">
            <p>
              Allereerst heb ik door dit project veel geleerd over het werken
              met databases. Ik heb hier meer ervaring in opgedaan omdat ik me
              hier binnen de groep voornamelijk op heb gefocust, en daar ben ik
              erg blij mee.
            </p>
            <p>
              Wat betreft het groepswerk had ik echter gehoopt dat het anders
              zou verlopen. We zaten in een groep van 3 en hadden slechts zo'n
              2,5 week de tijd, maar uiteindelijk kwam het grotendeels op mij
              neer om ervoor te zorgen dat we aan het eind van de dag iets
              konden presenteren. Teamgenoten deden vrijwel niets of kwamen niet
              opdagen. Gelukkig ben ik wel blij dat ik uiteindelijk toch een
              werkend resultaat kon laten zien.
            </p>
            <p>
              Er zijn zeker dingen die beter hadden gekund, zoals de
              communicatie binnen de groep. Wat ik van dit project heb geleerd,
              is dat wanneer de communicatie niet goed verloopt, ik sneller een
              docent of leidinggevende moet inschakelen. Ook heb ik geleerd om
              meer van mezelf te laten horen en niet te proberen alles in mijn
              eentje op mijn schouders te dragen. Dit zijn belangrijke
              leerpunten die ik meeneem naar mijn volgende projecten.
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
