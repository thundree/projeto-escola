"use client";

import { useCallback, useEffect, useState } from "react";
import PageContent from "../../components/PageContent";
import PageTitle from "../../components/PageTitle";
import { addCourse, getCourses, getTeachers } from "../../functions";
import ItemsList from "../../components/ItemsList";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const [teachers, setTeachers] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCourses = useCallback(async () => {
    const result = await getCourses();
    setCourses(result);
  }, [setCourses]);

  useEffect(() => {
    fetchCourses();
  }, [setCourses]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const result = await getTeachers();
      setTeachers(result);
    };

    fetchTeachers();
  }, [setTeachers]);

  const handleAddItem = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    const course = {
      name: data.get("name"),
      description: data.get("description"),
    };

    addCourse(course);

    fetchCourses();
    setIsModalOpen(false);
  };

  return (
    <PageContent>
      <PageTitle>Cursos</PageTitle>

      {isModalOpen ? (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form
            onSubmit={handleAddItem}
            className="w-full sm:min-w-sm flex flex-col gap-4"
          >
            <h3 className="text-xl text-center font-semibold text-gray-800 border-b border-gray-100 pb-2">
              Adicionar Curso
            </h3>

            <label className="flex flex-col gap-1" htmlFor="name">
              <span>Nome</span>

              <input
                required
                className="border border-gray-200 p-2 rounded-md"
                id="name"
                name="name"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-1" htmlFor="description">
              <span>Descrição</span>

              <textarea
                required
                className="border border-gray-200 p-2 rounded-md"
                id="description"
                name="description"
              />
            </label>

            <label className="flex flex-col gap-1" htmlFor="description">
              <span>Professor</span>

              <select
                required
                className="border border-gray-200 p-2 rounded-md"
                name="teacherId"
                id="teacherId"
              >
                <option disabled selected value="">
                  Selecione um professor
                </option>
                {teachers?.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </label>

            <Button type="submit" className="mx-auto" variant="primary">
              Salvar
            </Button>
          </form>
        </Modal>
      ) : null}

      <Button onClick={() => setIsModalOpen(true)}>
        +<span> Adicionar</span>
      </Button>

      <ItemsList items={courses} path="/cursos" />
    </PageContent>
  );
}
