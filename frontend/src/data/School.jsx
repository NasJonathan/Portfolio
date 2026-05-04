export const schoolprojects = [
  {
    id: 1,
    slug: "onlybowling",
    title: "Onlybowling",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["PHP", "HTML/CSS", "MySql"],
  },
  {
    id: 2,
    slug: "pdf-chatbot",
    title: "PDF Chatbot",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "GitHub"],
  },
  {
    id: 3,
    slug: "mcauther-outlet",
    title: "McAuther Outlet",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "Odoo"],
  },

  {
    id: 4,
    slug: "bollen-broodjes",
    title: "BollenBroodjes",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "CI/CD"],
  },
];

export const getSchoolProjectById = (id) => {
  return schoolprojects.find((project) => project.id === parseInt(id));
};
