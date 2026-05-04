export const technologies = [
  { name: "Flutter", description: "(UI) & App framework" },
  { name: "Dart", description: "Programmeertaal & App logica" },
  { name: "GitHub", description: "Versiebeheer" },
];

export const tasks = [
  "K1-W1: Wensen en eisen",
  "K1-W2: Plannen en ontwerp",
  "K1-W3: Realiseert software",
  "K2-W6: Overleggen",
  "K2-W7: Presenteert opgeleverd werk",
  "K2-W8: Reflectie",
];

export const documentSets = [
  {
    id: "oulet",
    title: "McArthur Outlet project",
    documents: [
      {
        id: 1,
        label: "Behoefte Analyse",
        file: "/projects/McAuthur/documents/BA-Mca.pdf",
      },

      {
        id: 2,
        label: "Functioneel Ontwerp",
        file: "/projects/McAuthur/documents/FO- Mca.pdf",
      },
    ],
    plans: [
      {
        id: 1,
        label: "Planen trello",
        file: "https://trello.com/b/jchQyh5a/advent-calender-designer-outlet-roermond",
        isExternal: true,
      },
      {
        id: 2,
        label: "Planen trello",
        file: "/projects/McAuthur/documents/MO-planen.png",
        isExternal: false,
      },
      {
        id: 3,
        label: "Werk plan",
        file: "/projects/McAuthur/documents/MCA-overleg1.pdf",
        isExternal: false,
      },
    ],
  },
];

export const wes316Images = [
  {
    src: "/projects/McAuthur/codes/MCA-code1.png",
    title: "log en registratie pagina",
  },
  {
    src: "/projects/McAuthur/codes/MCA-code2.png",
    title: "log en registratie pagina",
  },
];

export const softwareProjects = [
  {
    id: "",
    title: "McArthur Outlet ",
    description:
      "Het doel van dit was om een login en een registratie scherm te realiseren gebruikers zich konden melden of inloggen.",
    solutions: [],
    images: wes316Images,
  },
];

export const testData = [
  {
    id: "onlybowling-test",
    title: "Testen van onlybowling",
    description:
      "Voor onlybowling heb ik verschillende testen uitgevoerd om te zorgen dat de applicatie naar wens werkt.",
    images: [
      {
        src: "/projects/Onlybowling/codes/OB-1.png",
        title: "Test Resultaat 1",
      },
      {
        src: "/projects/Onlybowling/codes/OB-2.png",
        title: "Test Resultaat 2",
      },
      {
        src: "/projects/Onlybowling/codes/OB-3.png",
        title: "Test Resultaat 3",
      },
      {
        src: "/projects/Onlybowling/codes/OB-4.png",
        title: "Test Resultaat 4",
      },
      {
        src: "/projects/Onlybowling/codes/OB-5.png",
        title: "Test Resultaat 5",
      },
      {
        src: "/projects/Onlybowling/codes/OB-6.png",
        title: "Test Resultaat 6",
      },
      {
        src: "/projects/Onlybowling/codes/OB-7.png",
        title: "Test Resultaat 7",
      },
      {
        src: "/projects/Onlybowling/codes/OB-8.png",
        title: "Test Resultaat 8",
      },
    ],
    testItems: [
      {
        label: "Functionaliteit Test",
        desc: "Getest of de belangrijkste functionaliteiten correct werken.",
      },
      {
        label: "Database Test",
        desc: "Gecontroleerd of de gegevens correct worden opgeslagen en opgehaald uit de database.",
      },
    ],
  },
];

export const opgeleverd = [
  {
    video: "/projects/McAuthur/media/Presenteren-MCA.mp4",
    title: "Eerste opgeleverd werk",
  },
];
