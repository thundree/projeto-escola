import { FaHome, FaUsers, FaUserTie } from "react-icons/fa";

import { IoSchool } from "react-icons/io5";

const menuItems = [
  {
    title: "Início",
    icon: <FaHome />,
    href: "/",
  },
  {
    title: "Alunos",
    icon: <FaUsers />,
    href: "/alunos",
  },
  {
    title: "Cursos",
    icon: <IoSchool />,
    href: "/cursos",
  },
  {
    title: "Professores",
    icon: <FaUserTie />,
    href: "/professores",
  },
];

export function Sidebar() {
  return (
    <div className="max-w-full min-h-screen bg-gray-100 p-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className="flex items-center space-x-2 mb-4">
            {item.icon}
            <a
              href={item.href}
              className="text-gray-500 hover:text-gray-900 hover:underline hover:font-bold"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
