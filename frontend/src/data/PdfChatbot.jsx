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
];

export const documentSets = [
  {
    id: "Pdf",
    title: "chatbot project",
    documents: [
      {
        id: 1,
        label: "Plan van aanpak",
        file: "/projects/PdfChatbot/documents/chatbot.pdf",
      },
      {
        id: 2,
        label: "ontwerp",
        file: "/projects/PdfChatbot/documents/chatbot7c.png",
      },
    ],
    plans: [
      {
        id: 1,
        label: "Planen trello 2",
        file: "https://trello.com/b/1feAPYs0/chatbot",
        isExternal: true,
      },
      {
        id: 2,
        label: "Planen trello 1",
        file: "https://trello.com/b/s4PgDIoA/personal-ai",
        isExternal: true,
      },
    ],
  },
];

export const chatbotImages = [
  {
    src: "/projects/PdfChatbot/codes/chatbot code.png",
  },
];

export const softwareProjects = [
  {
    id: "Pdf",
    title: "PDF Chatbot",
    description:
      "Het doel van dit project was het ontwikkelen van een AI-chatbot waarmee gebruikers vragen kunnen stellen over de inhoud van geüploade PDF-documenten.",
    solutions: [
      {
        label: "Tekst Extractie",
        detail:
          "Implementatie van een Python-backend die de tekst uit PDF-bestanden leest en verwerkt.",
      },
      {
        label: "AI Integratie",
        detail:
          "Koppeling met de OpenAI API gemaakt zodat de chatbot contextuele en nauwkeurige antwoorden kan genereren op basis van de geüploade tekst.",
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
    id: "pdf-chatbot-test",
    title: "Testen pdf chatbot",
    reportLabel: "Test chat chatbot",
    reportFile: "/projects/PdfChatbot/documents/chatbottest.pdf", // Ensure this path is correct
    videoLabel: "Test Demonstratie Video",
    videoFile: "/projects/PdfChatbot/videos/testpdf.mp4", // Ensure this path is correct
    description:
      "Voor dit project heb ik de functionaliteit van de chatbot grondig getest om te verzekeren dat PDF-documenten correct worden verwerkt en de AI nauwkeurige antwoorden levert.",
    testItems: [
      {
        label: "Unit Tests",
        desc: "Ik heb tests uitgevoerd op de Python backend om te verifiëren of de tekstextractie uit PDF-bestanden foutloos verloopt.",
      },
      {
        label: "Integratietests",
        desc: "Gecontroleerd of de frontend correct communiceert met de backend en of de OpenAI API de juiste antwoorden retourneert.",
      },
      {
        label: "End-to-End Tests",
        desc: "Het volledige proces doorlopen: van het uploaden van een PDF-document en het stellen van een vraag, tot het succesvol ontvangen van het juiste antwoord in de chat.",
      },
    ],
  },
];
