import { CornerRightDown, Search } from "lucide-react";
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
    <div>
      <h2>
        Busque por algum usuário do GitHub <CornerRightDown size={15} />
      </h2>
      <p>Conheça seus melhores repositórios</p>
      <form onSubmit={handleSubmit}>
        <input
          disabled={isLoading}
          type="text"
          id="repo"
          placeholder="Digite o nome de um usuário..."
          title="Digite o nome do usuário"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          required
          minLength={1}
        />
        <button disabled={isLoading} type="submit">
          <Search size={20} />
        </button>
      </form>
      {error && <p>Usuário pesquisado não encontrado!</p>}
      {userInfo && (
        <div key={userInfo.id}>
          <img src={userInfo.avatar_url} alt={`Avatar de ${userInfo.login}`} />
          <div>
            <span>{userInfo.login}</span>
            <span>{userInfo.location}</span>
            <div>
              <span>{userInfo.followers}</span>
              <span>{userInfo.following}</span>
            </div>
            <button onClick={handleRepository}>
              {isLoading ? "Buscando..." : "Ver os melhores projetos"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubFinder;
