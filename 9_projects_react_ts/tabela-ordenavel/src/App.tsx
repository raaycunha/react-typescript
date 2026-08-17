import { useState } from "react";
import "./App.css";

interface TableItem {
  id: number;
  name: string;
  age: number;
  profession: string;
}

type OrderItem = "name" | "age" | "profession" | null;

const tableData: TableItem[] = [
  {
    id: 0,
    name: "João",
    age: 30,
    profession: "Desenvolvedor",
  },
  {
    id: 1,
    name: "Ana",
    age: 25,
    profession: "Engenheira",
  },
  {
    id: 2,
    name: "Maria",
    age: 22,
    profession: "Designer",
  },
  {
    id: 3,
    name: "Carlos",
    age: 40,
    profession: "Gerente",
  },
  {
    id: 4,
    name: "Sofia",
    age: 28,
    profession: "Analista",
  },
];

function App() {
  const [search, setSearch] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderItem>(null);

  let tableToRender = tableData.filter((data) =>
    data.name.toLowerCase().startsWith(search.toLowerCase()),
  );

  if (orderBy === "name") {
    tableToRender = [...tableToRender].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  } else if (orderBy === "age") {
    tableToRender = [...tableToRender].sort((a, b) => a.age - b.age);
  } else if (orderBy === "profession") {
    tableToRender = [...tableToRender].sort((a, b) =>
      a.profession.localeCompare(b.profession),
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 px-6">
      <h1 className="text-2xl mt-4 font-bold">Tabela de usuários</h1>
      <input
        className="border border-gray-900 px-2 rounded-md h-9"
        type="text"
        placeholder="Pesquisar..."
        title="Pesquise o usuário"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="min-w-full border-collapse border border-gray-200 text-left text-sm text-gray-700">
        <thead className="bg-gray-100 text-gray-900 font-semibold">
          <tr>
            <th
              onClick={() =>
                setOrderBy((currentOrder) =>
                  currentOrder === "name" ? null : "name",
                )
              }
              className="border border-gray-200 px-4 py-2 cursor-pointer"
            >
              Nome
            </th>
            <th
              onClick={() =>
                setOrderBy((currentOrder) =>
                  currentOrder === "age" ? null : "age",
                )
              }
              className="border border-gray-200 px-4 py-2 cursor-pointer"
            >
              Idade
            </th>
            <th
              onClick={() =>
                setOrderBy((currentOrder) =>
                  currentOrder === "profession" ? null : "profession",
                )
              }
              className="border border-gray-200 px-4 py-2 cursor-pointer"
            >
              Cargo
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableToRender.map((data) => (
            <tr key={data.id}>
              <td className="border border-gray-200 px-4 py-2">{data.name}</td>
              <td className="border border-gray-200 px-4 py-2">{data.age}</td>
              <td className="border border-gray-200 px-4 py-2">
                {data.profession}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
