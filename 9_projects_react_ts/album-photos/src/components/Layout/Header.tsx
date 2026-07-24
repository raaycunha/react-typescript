import { useState } from "react";

const Header = () => {
  const [barSearch, setBarSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [error, setError] = useState<boolean>(false);
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && (
          <span className="text-red-500">
            Termo de pesquisa ou categoria inválido.
          </span>
        )}
        <input
          type="text"
          id="barSearch"
          placeholder="Pesquisar fotos..."
          title="Pesquise suas fotos"
          onFocus={() => setError(false)}
          value={barSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBarSearch(e.target.value)
          }
          required
          minLength={1}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <select
        id="selectCategory"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value)
        }
      >
        <option value="all">Todas as categorias</option>
        <option value="sports">Esportes</option>
        <option value="animals">Animais</option>
        <option value="people">Pessoas</option>
        <option value="nature">Natureza</option>
        <option value="technology">Tecnologia</option>
      </select>
    </div>
  );
};

export default Header;
