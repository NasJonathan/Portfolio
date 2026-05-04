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
    tags: ["Python", "GitHub", "OpenAI API"],
  },
  {
    id: 3,
    slug: "mcarthur-outlet",
    title: "McArthur Outlet",
    description:
      "Beschrijving van het project, de gebruikte technologieën en de resultaten.",
    tags: ["flutter", "Dart"],
  },
];

export const getSchoolProjectById = (id) => {
  return schoolprojects.find((project) => project.id === parseInt(id));
};
