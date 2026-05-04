export const technologies = [
  { name: "PHP", description: "Backend logica" },
  { name: "XAMPP", description: "Lokale serveromgeving" },
  { name: "HTML/CSS", description: "Gebruikersinterface" },
  { name: "SQL", description: "Databasebeheer" },
];

export const tasks = [
  "K1-W1: Wensen en eisen",
  "K1-W2: Plannen en ontwerp",
  "K1-W3: Realiseert software",
  "K1-W4: Testen",
  "K2-W7: Presenteert opgeleverd werk",
  "K2-W8: Reflectie",
];

export const documentSets = [
  {
    id: "onlybowling",
    title: "Onlybowling project",
    documents: [
      {
        id: 1,
        label: "Behoefte Analyse",
        file: "/projects/Onlybowling/documents/Onlybowling-BA.pdf",
      },

      {
        id: 2,
        label: "Functioneel Ontwerp",
        file: "/projects/Onlybowling/documents/Onlybowling-FO.pdf",
      },
      {
        id: 3,
        label: "Technisch Ontwerp",
        file: "/projects/Onlybowling/documents/Onlybowling-TO.pdf",
      },
      {
        id: 4,
        label: "Goedkeuring",
        file: "/projects/Onlybowling/documents/Onlybowling-GO.png",
      },
    ],
    plans: [
      {
        id: 1,
        label: "Planen Trello",
        file: "https://trello.com/b/t86jMVou/sp10-onlybowling",
        isExternal: true,
      },
      {
        id: 2,
        label: "Planen Trello",
        file: "/projects/Onlybowling/documents/plannen-OB.png",
        isExternal: false,
      },
    ],
  },
];

export const wes316Images = [
  {
    src: "/projects/Onlybowling/codes/OBcode-connectie.png",
    title: "Connectie",
  },
  {
    src: "/projects/Onlybowling/codes/OBcode-login.png",
    title: "login frontend",
  },
  {
    src: "/projects/Onlybowling/codes/OBcode-logindata.png",
    title: "login conectie",
  },
  {
    src: "/projects/Onlybowling/codes/OBcode-sql.png",
    title: "sql query",
  },
];

export const softwareProjects = [
  {
    id: "Reserveren",
    title: "Onlybowling",
    description:
      "Voor dit project was het doel om een reserveringssysteem op te leveren waarmee klanten een bowling baan konden reseveren",
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
    src: "/projects/Onlybowling/codes/OB-goed.png",
    title: "Feedback na het presenteren van project.",
  },
];
