"use client";

import { useEffect, useState } from "react";
import PageContent from "../../components/PageContent";
import PageTitle from "../../components/PageTitle";
import { getTeachers } from "../../functions";
import ItemsList from "../../components/ItemsList";
import Button from "../../components/Button";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const result = await getTeachers();
      setTeachers(result);
    };

    fetchTeachers();
  }, [setTeachers]);

  return (
    <PageContent>
      <PageTitle>Professores</PageTitle>

      <Button>
        +<span> Adicionar</span>
      </Button>

      <ItemsList items={teachers} path="/professores" />
    </PageContent>
  );
}
