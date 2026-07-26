import { CodeXml, CornerRightDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFinderContext } from "../contexts/useFinderContext";
import type { UserRepository } from "../types/User";

const UserRepo = () => {
  const { getRepository } = useFinderContext();
  const navigate = useNavigate();
  const { username } = useParams();
  const [repositories, setRepositories] = useState<UserRepository[]>([]);
  useEffect(() => {
    if (!username) return;
    const loadRepositories = async () => {
      const repos = await getRepository(username);
      if (repos) setRepositories(repos);
    };
    loadRepositories();
  }, [getRepository, username]);
  return (
    <div>
      <h2>
        Explore os repositórios do usuário: {username}
        <CornerRightDown size={15} />
      </h2>
      {repositories.length > 0 ? (
        <div>
          {repositories.map((repo: UserRepository) => (
            <div key={repo.id}>
              <span>Nome do projeto: {repo.name}</span>
              <span>
                <CodeXml size={20} />
                {repo.language}
              </span>
              <div>
                <span>{repo.stargazers_count}</span>
                <span>{repo.forks_count}</span>
              </div>
              <Link to={repo.html_url}>Ver código</Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Nenhum repositorio aqui.</p>
          <button onClick={() => navigate("/github-finder")}>
            Retornar para o inicio.
          </button>
        </div>
      )}
    </div>
  );
};

export default UserRepo;
