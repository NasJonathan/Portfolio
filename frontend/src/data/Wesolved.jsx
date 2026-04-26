export const technologies = [
  { name: "Python", description: "Backend logica" },
  { name: "XML", description: "Data structuur" },
  { name: "GitHub", description: "Versiebeheer" },
  { name: "Odoo", description: "ERP systeem" },
  { name: "Canva", description: "Design tool" },
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
    id: "312 + 335",
    title: "Assign Technical Lead",
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
      {
        id: 2,
        label: "Requirements 312",
        video: "/projects/wesolved/videos/Taak(312).mp4",
        isExternal: true,
      },
      {
        id: 3,
        label: "Requirements 335",
        video: "/projects/wesolved/videos/Taak(335).mp4",
        isExternal: true,
      },
    ],
  },
  {
    id: "316",
    title: "Deadline Email Notifications",
    documents: [
      {
        id: 5,
        label: "Behoefte Analyse 316",
        file: "/projects/wesolved/documents/BA_WES[316].pdf",
      },
      {
        id: 6,
        label: "Functioneel Ontwerp",
        file: "/projects/wesolved/documents/FO_WES[316].pdf",
      },
      {
        id: 7,
        label: "Technisch Ontwerp",
        file: "/projects/wesolved/documents/TO_WES(316).pdf",
      },
    ],
    plans: [
      {
        id: 4,
        label: "Requirements",
        video: "/projects/wesolved/videos/Taak(316).mp4",
      },
    ],
  },
  {
    id: "325",
    title: "Logging pull request actions",
    documents: [
      { id: 8, label: "Behoefte Analyse" },
      { id: 9, label: "Functioneel Ontwerp" },
    ],
    plans: [
      { id: 5, label: "Plan 5" },
      { id: 6, label: "Plan 6" },
    ],
  },
  {
    id: "368",
    title: "Create problem desk",
    documents: [
      { id: 10, label: "Behoefte Analyse" },
      { id: 11, label: "Functioneel Ontwerp" },
      { id: 12, label: "Technisch Ontwerp" },
    ],
    plans: [
      { id: 7, label: "Plan 9" },
      { id: 8, label: "Plan 10" },
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
  {
    id: "325",
    title: "Logging Pull Request Actions",
    description:
      "In dit project heb ik een logging mechanisme geïmplementeerd voor pull request acties in Odoo...",
    solutions: [
      {
        label: "Database Schema",
        detail: "Ontwerp van een nieuw model 'pull.request.log'...",
      },
      {
        label: "Event Listeners",
        detail: "Toevoegen van listeners op pull request events...",
      },
    ],
    images: wes316Images, // Add specific images for 325 here later
  },
  {
    id: "310+315+334",
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

  {
    id: "312",
    title: "Testen van WES-312 ",
    reportLabel: "Testplan Rapport WES-312",
    reportFile: "/projects/wesolved/documents/Testplan_Wes[312].pdf", // Ensure this path is correct
    videoLabel: "Test Demonstratie Video",
    videoFile: "/projects/wesolved/videos/Test(312).mp4", // Ensure this path is correct
    d: "312",
    title: "Testen van WES-312",
    reportLabel: "Testplan Rapport WES-312",
    reportFile: "/projects/wesolved/documents/Testplan_Wes[312].pdf",
    videoLabel: "Test Demonstratie Video",
    videoFile: "/projects/wesolved/videos/Test(312).mp4",

    description:
      "Voor WES-312 heb ik de nieuwe functionaliteit rondom het Technical Lead veld uitgebreid getest. Deze testen zorgen ervoor dat het veld correct werkt in alle relevante views (form, tree en kanban) en dat gebruikers de Technical Lead intuïtief kunnen toewijzen en beheren.",

    testItems: [
      {
        label: "Functionele Testen",
        desc: "Getest of het Technical Lead veld correct kan worden toegevoegd, gewijzigd en verwijderd in de form view.",
      },
      {
        label: "UI/UX Testen",
        desc: "Gecontroleerd of het veld logisch is geplaatst en zichtbaar is in de tree en kanban views, inclusief naam en avatar.",
      },
      {
        label: "Scenario Testen",
        desc: "Volledige scenario’s getest zoals het toewijzen van een Technical Lead, het verwijderen ervan en het controleren van de weergave in alle views.",
      },
    ],
  },
];
