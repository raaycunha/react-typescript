import { CodeXml, GitFork, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const handleSearch = () => {
    navigate("/github-finder", { replace: true });
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-md font-semibold md:text-2xl">
        Explore os repositórios do(a) {username}
      </h2>
      {repositories.length > 0 ? (
        <div className="flex flex-col flex-wrap gap-6 items-left md:flex-row">
          {repositories.map((repo: UserRepository) => (
            <div
              key={repo.id}
              className="flex flex-col gap-2 bg-[#0d1117] p-4 rounded-lg"
            >
              <span className="font-semibold">{repo.name}</span>
              <div className="flex items-center gap-1">
                <CodeXml size={20} />
                <span>{repo.language}</span>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-1">
                  <Star className="text-yellow-500" size={25} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex gap-1">
                  <GitFork className="text-blue-500" size={25} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
              <a
                className="bg-green-600 w-25 text-white font-bold p-2 mt-2 rounded-lg cursor-pointer transition-all duration-400 hover:scale-[0.99] hover:bg-green-700"
                href={repo.html_url}
              >
                Ver código
              </a>
            </div>
          ))}
          <button
            onClick={handleSearch}
            className="bg-cyan-700 w-25 text-white font-bold p-2 mt-2 rounded-lg cursor-pointer transition-all duration-400 hover:scale-[0.99] hover:bg-green-700"
          >
            Buscar outro usuário
          </button>
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
