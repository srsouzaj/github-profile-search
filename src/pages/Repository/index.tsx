import { Link, useParams } from "react-router-dom";
import useConsultarRepository from "./hooks/useConsultarRepository";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import TitleRepository from "./components/titleRepository";
import DetailRepository from "./components/DetailRepository";
import ActionRepository from "./components/ActionRepository";
import { memo } from "react";
import Loading from "@/components/Loading";

const Repository = () => {
  const { repoName, owner: username } = useParams();
  const { repo, isLoadingRepository, isErrorRepository } =
    useConsultarRepository({
      username,
      repoName,
    });

  return (
    <main className="w-screen text-black h-screen flex py-8 items-center bg-black justify-center">
      <section
        aria-label="Container"
        className="
    container
    bg-gray-100 rounded-2xl p-5
    shadow-md shadow-gray-400
    flex flex-col justify-between
    overflow-auto sm:overflow-visible
  "
      >
        <Link className="w-full" to={"/"}>
          <Button className="cursor-pointer">
            <ArrowLeft /> Voltar
          </Button>
        </Link>
        {isErrorRepository ? (
          <div className="h-full flex flex-col text-2xl font-thin items-center gap-2 justify-center">
            <img
              src="https://i.ibb.co/xqNV3JkK/github.png"
              alt="Logo do GitHub Explorer"
              className="block w-40 h-40"
              loading="lazy"
            />
            <p>Não é comum, mas estamos com problemas.</p>
            <p>Tente novamente mais tarde.</p>
          </div>
        ) : !isLoadingRepository ? (
          <>
            <TitleRepository repo={repo} />
            <Separator />
            <DetailRepository repo={repo} />
            <Separator />
            <ActionRepository repo={repo} />
          </>
        ) : (
          <div className="h-full flex flex-col text-2xl font-thin items-center gap-3 justify-center">
            <Loading />
            Carregando
          </div>
        )}
      </section>
    </main>
  );
};

export default memo(Repository);
