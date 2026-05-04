export const stageprojects = [
  {
    id: 1,
    slug: "wesolved",
    title: "Wesolved",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "XML"],
  },
  /*
  {
    id: 2,
    slug: "bikebutler",
    title: "BikeButler",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "GitHub"],
  },
  {
    id: 3,
    slug: "broensbroodbanket",
    title: "BroensBroodBanket",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",

    tags: ["Python", "Odoo"],
  },
  {
    id: 4,
    slug: "impacked",
    title: "Impacked",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Odoo", "XML"],
  },
  {
    id: 5,
    slug: "kilocilo",
    title: "KiloKilo",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Python", "CI/CD"],
  },
  {
    id: 6,
    slug: "scrap-metals",
    title: "Scrap Metals",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["HTML/CSS", "JavaScript"],
  },
  {
    id: 7,
    slug: "timmermans",

    title: "Timmermans",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Git", "DevOps", "CI/CD"],
  },
  {
    id: 8,
    slug: "billa",
    title: "Billa",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Git", "DevOps", "CI/CD"],
  },
  {
    id: 9,
    slug: "cef-en-max",

    title: "CEF en MAX",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["Git", "DevOps", "CI/CD"],
  },
  */
];

export const getStageProjectById = (id) => {
  return stageprojects.find((project) => project.id === parseInt(id));
};
