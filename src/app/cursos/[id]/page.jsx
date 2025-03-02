"use client";

import { use, useEffect, useState } from "react";
import {
  getCourseById,
  getStudentsByCourseId,
  getTeacherByCourseId,
  getTeacherById,
} from "../../../functions";
import PageContent from "../../../components/PageContent";
import PageTitle from "../../../components/PageTitle";
import ItemsList from "../../../components/ItemsList";

export default function CursoPage(props) {
  const [course, setCourse] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState([]);

  const { id } = use(props.params);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await getCourseById(id);
      setCourse(response);
    };

    fetchCourse();
  }, [id]);

  useEffect(() => {
    const fetchTeacher = async () => {
      const response = await getTeacherById(course?.teacherId);
      setTeacher(response);
    };

    if (course?.teacherId) {
      fetchTeacher();
    }
  }, [course]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudentsByCourseId(id);
      setStudents(response);
    };

    fetchStudents();
  }, [id]);

  if (!course) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContent>
      <PageTitle>Curso - {course?.name}</PageTitle>

      <p>{course?.description}</p>

      <p>
        Professor: <b>{teacher?.name}</b>{" "}
      </p>

      <ItemsList items={students} path="/alunos" />
    </PageContent>
  );
}
