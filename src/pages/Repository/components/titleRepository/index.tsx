import type { OutRepos } from "@/services/Repos/Models";
import { GitBranch } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const TitleRepository = ({ repo }: { repo: OutRepos }) => {
  return (
    <div className="flex flex-col gap-2">
      <GitBranch className="w-30 h-30" />
      <h1 className="text-4xl">
        <b>Nome do repositório: </b>
        {repo.name ?? "Não informado"}
      </h1>
      <p className="text-gray-600 text-md">
        <b>Descrição do projeto: </b>
        {repo.description || "Não informado"}
      </p>
      <p className="text-gray-600 text-md">
        <b>Página do projeto: </b>
        {repo.homepage ? (
          <Link className="font-thin" to={repo.homepage}>
            {repo.homepage}
          </Link>
        ) : (
          "Não informado"
        )}
      </p>
    </div>
  );
};

export default memo(TitleRepository);
