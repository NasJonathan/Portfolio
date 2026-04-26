export const technologies = [
  { name: "Python", description: "Backend logica" },
  { name: "JavaScript", description: "Frontend interactie " },
  { name: "HTML/CSS", description: "Gebruikersinterface" },
  { name: "OpenAI API", description: "AI-model" },
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
    id: "Pdf",
    title: "chatbot project",
    documents: [
      {
        id: 1,
        label: "Plan van aanpak",
        file: "/projects/PdfChatbot.jsx/documents/chatbot.pdf",
      },
      {
        id: 2,
        label: "ontwerp",
        file: "/projects/PdfChatbot.jsx/documents/chatbot7c.png",
      },
    ],
    plans: [
      {
        id: 1,
        label: "Planen Trello",
        file: "https://trello.com/b/1feAPYs0/chatbot",
        isExternal: true,
      },
    ],
  },
];

export const chatbotImages = [
  {
    src: "/projects/PdfChatbot.jsx/codes/chatbot code.png",
    title: "Recieving api reponse",
  },
];

export const softwareProjects = [
  {
    id: "Pdf",
    title: "chatbot project",
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
        label: "Github",
        detail: "Klik hierop voor het github repository van dit project.",
        href: "https://github.com/NanaAma035/Python-PDF-Chatbot/",
        isExternal: true,
      },
    ],
    images: chatbotImages,
  },
];

export const testData = [
  {
    id: "316",
    title: "Testen pdf chatbot",
    reportLabel: "Test chat chatbot",
    reportFile: "/public/projects/PdfChatbot.jsx/documents/chatbottest.pdf", // Ensure this path is correct
    videoLabel: "Test Demonstratie Video",
    videoFile: "/projects/PdfChatbot.jsx/videos/testpdf.mp4", // Ensure this path is correct
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
