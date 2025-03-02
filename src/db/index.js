const db = {
  students: [
    {
      id: 1,
      name: "João da Silva",
      email: "joao.silva@example.com",
      courseId: 1,
    },
    {
      id: 2,
      name: "José da Silva",
      email: "jose.silva@example.com",
      courseId: 1,
    },
    {
      id: 3,
      name: "Ana Souza",
      email: "ana.souza@example.com",
      courseId: 2,
    },
    {
      id: 4,
      name: "Maria Oliveira",
      email: "maria.oliveira@example.com",
      courseId: 2,
    },
    {
      id: 5,
      name: "Carlos Pereira",
      email: "carlos.pereira@example.com",
      courseId: 3,
    },
    {
      id: 6,
      name: "José Santos",
      email: "jose.santos@example.com",
      courseId: 3,
    },
    {
      id: 7,
      name: "Beatriz Costa",
      email: "beatriz.costa@example.com",
      courseId: 3,
    },
  ],
  courses: [
    {
      id: 1,
      name: "Matemática Básica",
      description: "Curso introdutório de matemática para iniciantes.",
      teacherId: 1,
    },
    {
      id: 2,
      name: "Português Avançado",
      description: "Estudo aprofundado da língua portuguesa.",
      teacherId: 2,
    },
    {
      id: 3,
      name: "História do Brasil",
      description: "Análise dos principais eventos da história brasileira.",
      teacherId: 3,
    },
  ],
  teachers: [
    {
      id: 1,
      name: "Antônio Santos",
      email: "antonio.santos@example.com",
    },
    {
      id: 2,
      name: "Beatriz Costa",
      email: "beatriz.costa@example.com",
    },
    {
      id: 3,
      name: "Carlos Mendes",
      email: "carlos.mendes@example.com",
    },
  ],
};

const database = { ...db };

export default database;
