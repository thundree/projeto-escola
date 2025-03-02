"use client";

import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import PageContent from "../../components/PageContent";
import PageTitle from "../../components/PageTitle";
import { getStudents } from "../../functions";
import ItemsList from "../../components/ItemsList";
import Button from "../../components/Button";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const result = await getStudents();
      setStudents(result);
    };

    fetchStudents();
  }, [setStudents]);

  return (
    <PageContent>
      <PageTitle>
        <span>Página de usuários</span>
      </PageTitle>

      <Button>
        <FaUserPlus />
        <span> Adicionar</span>
      </Button>

      <ItemsList items={students} path="/alunos" />
    </PageContent>
  );
}
