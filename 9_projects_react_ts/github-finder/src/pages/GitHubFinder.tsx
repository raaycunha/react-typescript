import { CornerRightDown, Search } from "lucide-react";
import { useState } from "react";

const GitHubFinder = () => {
  const [userName, setUserName] = useState<string>("");
  const handleSubmit = () => {};
  const handleRepoUser = (userName: string) => {
    console.log(userName);
  };
  return (
    <div>
      <h2>
        Busque por algum usuário do GitHub <CornerRightDown size={15} />
      </h2>
      <p>Conheça seus melhores repositórios</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="repo"
          placeholder="Digite o nome de um usuário..."
          title="Digite o nome do usuário"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          minLength={1}
        />
        <button type="submit">
          <Search size={20} />
        </button>
      </form>
      <div>
        {/* Info user */}
        <button onClick={() => handleRepoUser(userName)}>
          Ver mais informações do usuário
        </button>
      </div>
    </div>
  );
};

export default GitHubFinder;
