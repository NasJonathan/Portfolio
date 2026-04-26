export const technologies = [
  { name: "PHP", description: "Backend logica" },
  { name: "XAMMP", description: "Data structuur" },
  { name: "Html/css", description: "Versiebeheer" },
  { name: "SQL", description: "ERP systeem" },
];

export const tasks = [
  "K1-W1: Wensen en eisen",
  "K1-W2: Plannen en ontwerp",
  "K1-W3: Realiseert software",
  "K1-W4: Testen",
  "K1-W5: Verbeter voorstellen",
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
        file: "/projects/wesolved/documents/BA1_WES[312].pdf",
      },
      {
        id: 2,
        label: "Behoefte Analyse V2",
        file: "/projects/wesolved/documents/BA[312+335].pdf",
      },

      {
        id: 3,
        label: "Functioneel Ontwerp",
        file: "/projects/wesolved/documents/FO_Wes[312+335].pdf",
      },
      {
        id: 4,
        label: "Technisch Ontwerp",
        file: "/projects/wesolved/documents/TO WES[312+355].pdf",
      },
    ],
    plans: [
      {
        id: 1,
        label: "Planen Trello",
        file: "https://trello.com/b/ntTZOiC2/user-stories-wes312",
        isExternal: true,
      },
    ],
  },
];

export const wes316Images = [
  { src: "/projects/wesolved/codes/316_code1.png", title: "Model Inheritance" },
  {
    src: "/projects/wesolved/codes/316_code2.png",
    title: "Multiplication Factor Field",
  },
  {
    src: "/projects/wesolved/codes/316_code3.png",
    title: "Validation Logic (Multiple Tasks)",
  },
  {
    src: "/projects/wesolved/codes/316_code4.png",
    title: "Validation Logic (Single Task)",
  },
  {
    src: "/projects/wesolved/codes/316_code5.png",
    title: "Email Template XML",
  },
];

export const softwareProjects = [
  {
    id: "316",
    title: "Deadline Email Notifications",
    description:
      "Voor dit project was het doel om een automatische notificatie te sturen wanneer een taak over de gealloceerde tijd gaat. De uitdaging was de correctie met een multiplication_factor per project. [cite: 1, 2, 3]",
    solutions: [
      {
        label: "Odoo Models",
        detail:
          "Uitbreiding project.task met een Many2one relatie naar project om de factor op te halen[cite: 4, 5].",
      },
      {
        label: "Logic Fix",
        detail:
          "Herschrijven _validate_allocated_time met een for task in self loop voor batch-verwerking[cite: 1, 2].",
      },
      {
        label: "Dynamic Logic",
        detail:
          "Trigger zodra effective_hours > allocated_hours * factor[cite: 2, 3].",
      },
    ],
    images: wes316Images,
    video: "/projects/wesolved/Github 316.mp4",
  },
];

export const testData = [
  {
    id: "316",
    title: "Testen van WES-316",
    reportLabel: "Testplan Rapport WES-316",
    reportFile: "/document/wesolved/Testplan_316.pdf", // Ensure this path is correct
    videoLabel: "Test Demonstratie Video",
    videoFile: "/projects/wesolved/Testvideo_316.mp4", // Ensure this path is correct
    description:
      "Voor WES-316 heb ik unit tests geschreven voor de nieuwe functionaliteit die ik heb toegevoegd. Deze tests zorgen ervoor dat de code correct werkt en dat toekomstige wijzigingen geen bestaande functionaliteit breken.",
    testItems: [
      {
        label: "Unit Tests",
        desc: "Ik heb unit tests geschreven voor de nieuwe methoden in de Odoo models, waarbij ik scenario's heb getest zoals het valideren van allocated time met verschillende multiplication factors.",
      },
      {
        label: "Integratietests",
        desc: "Uitgevoerd om te controleren of de nieuwe functionaliteit goed samenwerkt met het triggeren van notificaties.",
      },
      {
        label: "End-to-End Tests",
        desc: "Het volledige proces getest, van het aanmaken van een taak tot het ontvangen van de notificatie.",
      },
    ],
  },
];
