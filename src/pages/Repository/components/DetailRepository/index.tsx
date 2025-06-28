import Tags from "@/components/Tags";
import type { OutRepos } from "@/services/Repos/Models";
import { Eye, GitFork, Star } from "lucide-react";
import { memo } from "react";

const DetailRepository = ({ repo }: { repo: OutRepos }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="flex gap-2 text-md">
        <Star className="fill-yellow-500 text-yellow-500" />{" "}
        {repo.stargazers_count || 0} estrela(s)
      </p>
      <p className="flex gap-2 text-md">
        <GitFork className="w-4 h-4" /> <b>Fork(s):</b> {repo.forks_count || 0}
      </p>
      <p className="flex gap-2 text-md">
        <Eye className="w-4 h-4" /> {repo.stargazers_count || 0} watch(es)
      </p>
      <p>
        <b>Criado em:</b>{" "}
        {repo.created_at
          ? new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(repo.created_at))
          : "Não informado"}
      </p>

      <p>
        <b>Linguagem(ns) principal(is):</b> {repo.language || "Não informado"}
      </p>
      {!!repo.topics?.length && (
        <span className="flex gap-2">
          {repo.topics.map((item, index) => (
            <Tags key={index} description={item} />
          ))}
        </span>
      )}
    </div>
  );
};

export default memo(DetailRepository);
