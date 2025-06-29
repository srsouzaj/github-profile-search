import type { OutRepos } from "@/services/Repos/Models";
import { GitBranch } from "lucide-react";

import { memo } from "react";

const safeText = (text?: string | null) => {
  console.log("safeText recebido:", text);
  if (!text || (typeof text === "string" && text.trim() === ""))
    return "Não informado";
  return text;
};

const TitleRepository = ({ repo }: { repo: OutRepos }) => {
  return (
    <div className="flex flex-col gap-2">
      <GitBranch className="w-[30px] h-[30px] md:w-10 md:h-10" />
      <h1 data-testid="repo-name" className="text-xl md:text-2xl lg:text-4xl">
        <b>Nome do repositório: </b>
        {safeText(repo.name)}
      </h1>
      <p
        data-testid="repo-description"
        className="text-gray-600 text-sm md:text-md lg:text-lg"
      >
        <b>Descrição do projeto: </b>
        {safeText(repo.description)}
      </p>
      <p
        data-testid="repo-homepage"
        className="text-gray-600 text-sm md:text-md lg:text-lg"
      >
        <b>Página do projeto: </b>
        {repo.homepage && repo.homepage.trim() !== "" ? (
          <a
            className="font-thin underline hover:text-blue-600"
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.homepage}
          </a>
        ) : (
          "Não informado"
        )}
      </p>
    </div>
  );
};

export default memo(TitleRepository);
