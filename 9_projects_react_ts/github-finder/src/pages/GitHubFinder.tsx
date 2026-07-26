import { MapIcon, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFinderContext } from "../contexts/useFinderContext";
import type { User } from "../types/User";

const GitHubFinder = () => {
  const navigate = useNavigate();
  const { getUser, isLoading, error, showError, clearError } =
    useFinderContext();
  const [userName, setUserName] = useState<string>("");
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.trim().length <= 0) {
      showError();
      return;
    }
    clearError();
    const user = await getUser(userName);
    if (user) setUserInfo(user);
  };
  const handleRepository = () => {
    navigate(`/repos/${userName}`);
    setUserInfo(null);
  };
  return (
    <div className="flex flex-col items-center gap-4 text-white/90 w-full">
      <h2 className="text-md font-semibold md:text-2xl">
        Busque por algum usuário do GitHub:
      </h2>
      <p className="text-sm md:text-[1.2rem]">
        Conheça seus melhores repositórios
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex pr-3 gap-2 bg-white rounded-xl cursor-pointer"
      >
        <input
          className={`bg-white/90 text-black rounded-xl px-2 h-11 w-60 md:w-80 border-r border-black lg:h-14 placeholder:text-gray-600 ${error && "border-none outline-1 outline-red-500"}`}
          disabled={isLoading}
          type="text"
          id="repo"
          placeholder="Digite o nome do usuário..."
          title="Digite o nome do usuário"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          required
          minLength={1}
        />
        <button className="cursor-pointer" disabled={isLoading} type="submit">
          <Search
            className="text-black transition-colors duration-400 hover:text-gray-500"
            size={20}
          />
        </button>
      </form>
      {error && (
        <p className="text-red-500">Usuário pesquisado não encontrado!</p>
      )}
      {userInfo && (
        <div
          className="flex flex-col justify-center items-center gap-6 rounded-3xl shadow-md shadow-white/5 md:bg-[#0d1117] p-4 md:flex-row"
          key={userInfo.id}
        >
          <img
            className="w-full max-w-50 rounded-full border-2 p-1"
            src={userInfo.avatar_url}
            alt={`Avatar de ${userInfo.login}`}
          />
          <div className="flex flex-col items-center gap-2">
            <span>
              <span className="font-semibold">Usuário(a): </span>
              {userInfo.login}
            </span>
            <div className="flex gap-1">
              <MapIcon className="text-green-500" />
              <span>{userInfo.location}</span>
            </div>
            <div className="flex gap-4">
              <span>
                <span className="font-semibold">Seguidores:</span>{" "}
                {userInfo.followers}
              </span>
              <span>
                <span className="font-semibold">Seguindo:</span>{" "}
                {userInfo.following}
              </span>
            </div>
            <button
              className="bg-green-600 text-white font-bold p-2 mt-2 rounded-lg cursor-pointer transition-all duration-400 hover:scale-[0.99] hover:bg-green-700"
              onClick={handleRepository}
            >
              {isLoading ? "Buscando..." : "Ver os melhores projetos"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubFinder;
