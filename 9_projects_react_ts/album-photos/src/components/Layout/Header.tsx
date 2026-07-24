import { useEffect, useState } from "react";
import { useAlbumContext } from "../../contexts/AlbumProvider";

const Header = () => {
  const { requestApi, error, setError } = useAlbumContext();
  const [barSearch, setBarSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("nature");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    requestApi("nature");
  }, []);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (barSearch.trim().length <= 0) {
      setError(true);
      return;
    }
    setIsLoading(true);
    await requestApi(barSearch);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setBarSearch("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && (
          <span className="text-red-500">Termo de pesquisa inválido.</span>
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
        <button disabled={isLoading} type="submit">
          {isLoading ? "Buscando imagens..." : "Pesquisar"}
        </button>
      </form>
      <select
        id="selectCategory"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setCategory(e.target.value);
          requestApi(e.target.value);
        }}
      >
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
