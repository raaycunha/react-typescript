import { useEffect, useState } from "react";
import { useAlbumContext } from "../../contexts/AlbumProvider";

const Header = () => {
  const { requestApi, error, setError, isActive, isLoading } =
    useAlbumContext();
  const [barSearch, setBarSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("nature");
  useEffect(() => {
    requestApi("nature");
  }, []);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (barSearch.trim().length <= 0) {
      setError(true);
      setBarSearch("");
      return;
    }
    await requestApi(barSearch);
    setBarSearch("");
  };
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 px-2 py-4 bg-[#0A0A0A] shadow-xl shadow-black/15 md:flex-row md:gap-4`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-2"
      >
        {error && (
          <span className="text-red-500 mr-4">Termo de pesquisa inválido.</span>
        )}
        <input
          disabled={isLoading || isActive}
          className="bg-[#fafafa] px-2 h-10 rounded-lg placeholder:text-[#383D3B]"
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
        <button
          className="bg-[#08605F] text-[#fafafa] px-4 h-10 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#097372] hover:scale-[0.98]"
          disabled={isLoading || isActive}
          type="submit"
        >
          {isLoading ? "Buscando imagens..." : "Pesquisar"}
        </button>
      </form>
      <div className="hidden border-1 border-solid border-white/50 rounded-xl py-2 md:block"></div>
      <select
        disabled={isLoading || isActive}
        className="bg-[#fafafa] text-[#0A0A0A] h-10 rounded-lg px-4"
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
