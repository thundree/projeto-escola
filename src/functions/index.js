import database from "../db";

const localStorageKey = "db";

// Gera um ID aleatório entre 5 e 999
const smallDynamicId = () => Math.floor(Math.random() * (999 - 5 + 1)) + 5;

// Verifica se `localStorage` está disponível antes de tentar acessá-lo
const getLocalStorageDb = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedDb = localStorage.getItem(localStorageKey);
    return storedDb ? JSON.parse(storedDb) : { ...database };
  }
  return { ...database };
};

// Inicializa o banco de dados dinâmico corretamente
const dynamicDatabase = getLocalStorageDb();

// Função auxiliar para atualizar o `localStorage` se estiver no navegador
const updateLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(localStorageKey, JSON.stringify(dynamicDatabase));
  }
};

// Funções de manipulação dos dados
export const getStudents = async () => dynamicDatabase.students;

export const getStudentById = async (id) =>
  dynamicDatabase.students.find((student) => `${student.id}` === `${id}`);

export const addStudent = async (student) => {
  const newStudentId = smallDynamicId();
  const newStudent = { ...student, id: newStudentId };

  dynamicDatabase.students.push(newStudent);
  updateLocalStorage();

  return newStudent;
};

export const updateStudent = async (student) => {
  const index = dynamicDatabase.students.findIndex((s) => s.id === student.id);
  if (index !== -1) {
    dynamicDatabase.students[index] = student;
    updateLocalStorage();
  }
  return student;
};

export const deleteStudent = async (id) => {
  const index = dynamicDatabase.students.findIndex((s) => s.id === id);
  if (index !== -1) {
    const student = dynamicDatabase.students.splice(index, 1)[0];
    updateLocalStorage();
    return student;
  }
  return null;
};

export const getStudentsByCourseId = async (courseId) =>
  dynamicDatabase.students.filter(
    (student) => `${student.courseId}` === `${courseId}`
  );

export const getCourses = async () => dynamicDatabase.courses;

export const getCourseById = async (id) =>
  dynamicDatabase.courses.find((course) => `${course.id}` === `${id}`);

export const addCourse = async (course) => {
  const newCourseId = smallDynamicId();
  const newCourse = { ...course, id: newCourseId };

  dynamicDatabase.courses.push(newCourse);
  updateLocalStorage();

  return newCourse;
};

export const updateCourse = async (course) => {
  const index = dynamicDatabase.courses.findIndex((c) => c.id === course.id);
  if (index !== -1) {
    dynamicDatabase.courses[index] = course;
    updateLocalStorage();
  }
  return course;
};

export const deleteCourse = async (id) => {
  const index = dynamicDatabase.courses.findIndex((c) => c.id === id);
  if (index !== -1) {
    const course = dynamicDatabase.courses.splice(index, 1)[0];
    updateLocalStorage();
    return course;
  }
  return null;
};

export const getTeachers = async () => dynamicDatabase.teachers;

export const getTeacherById = async (id) =>
  dynamicDatabase.teachers.find((teacher) => `${teacher.id}` === `${id}`);

export const getTeacherByCourseId = async (courseId) =>
  dynamicDatabase.teachers.find(
    (teacher) => `${teacher.courseId}` === `${courseId}`
  );

export const addTeacher = async (teacher) => {
  const newTeacherId = smallDynamicId();
  const newTeacher = { ...teacher, id: newTeacherId };

  dynamicDatabase.teachers.push(newTeacher);
  updateLocalStorage();

  return newTeacher;
};

export const updateTeacher = async (teacher) => {
  const index = dynamicDatabase.teachers.findIndex((t) => t.id === teacher.id);
  if (index !== -1) {
    dynamicDatabase.teachers[index] = teacher;
    updateLocalStorage();
  }
  return teacher;
};

export const deleteTeacher = async (id) => {
  const index = dynamicDatabase.teachers.findIndex((t) => t.id === id);
  if (index !== -1) {
    const teacher = dynamicDatabase.teachers.splice(index, 1)[0];
    updateLocalStorage();
    return teacher;
  }
  return null;
};
