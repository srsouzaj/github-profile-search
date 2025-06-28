import { Link, useParams } from "react-router-dom";
import useConsultarRepository from "./hooks/useConsultarRepository";
import {
  ArrowRight,
  Eye,
  Files,
  Star,
  Check,
  GitFork,
  GitBranch,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Tags from "@/components/Tags";
import { Separator } from "@/components/ui/separator";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";

export default function Repository() {
  const { repoName, owner: username } = useParams();
  const { repo } = useConsultarRepository({ username, repoName });
  const { handleCopy, isCopied } = useCopyToClipboard();

  console.log("renderizou");
  return (
    <main className="w-screen text-black h-screen flex py-8 items-center bg-black justify-center">
      <section
        aria-label="Container"
        className="shadow-md shadow-gray-400 container flex flex-col justify-between bg-gray-100 rounded-2xl p-5"
      >
        <div>
          <Link className="w-full" to={"/home"}>
            <Button className="cursor-pointer">
              <ArrowLeft /> Voltar
            </Button>
          </Link>
        </div>
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
        <Separator />
        <div className="flex flex-col gap-2">
          <p className="flex gap-2 text-md">
            <Star className="fill-yellow-500 text-yellow-500" />{" "}
            {repo.stargazers_count || 0} estrelas
          </p>
          <p className="flex gap-2 text-md">
            <GitFork className="w-4 h-4" /> <b>Forks:</b>{" "}
            {repo.forks_count || 0}
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
            <b>Linguagem(ns) principal(is):</b>{" "}
            {repo.language || "Não informado"}
          </p>
          {!!repo.topics?.length && (
            <span className="flex gap-2">
              {repo.topics.map((item, index) => (
                <Tags key={index} description={item} />
              ))}
            </span>
          )}
        </div>
        <Separator />

        <div className="flex w-full gap-2">
          <Link
            className="w-full"
            to={repo.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="w-full cursor-pointer">
              Ver no GitHub <ArrowRight />
            </Button>
          </Link>
          <Button
            onClick={() => handleCopy(repo.clone_url)}
            className=" cursor-pointer"
          >
            {!isCopied ? (
              <>
                Copiar link para clonar <Files />
              </>
            ) : (
              <>
                Copiado <Check />
              </>
            )}
          </Button>
        </div>
      </section>
    </main>
  );
}
