import { Link, useParams } from "react-router-dom";
import useConsultarRepository from "./hooks/useConsultarRepository";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import TitleRepository from "./components/titleRepository";
import DetailRepository from "./components/DetailRepository";
import ActionRepository from "./components/ActionRepository";

export default function Repository() {
  const { repoName, owner: username } = useParams();
  const { repo } = useConsultarRepository({ username, repoName });

  console.log("renderizou");
  return (
    <main className="w-screen text-black h-screen flex py-8 items-center bg-black justify-center">
      <section
        aria-label="Container"
        className="shadow-md shadow-gray-400 container flex flex-col justify-between bg-gray-100 rounded-2xl p-5"
      >
        <Link className="w-full" to={"/"}>
          <Button className="cursor-pointer">
            <ArrowLeft /> Voltar
          </Button>
        </Link>

        <TitleRepository repo={repo} />
        <Separator />
        <DetailRepository repo={repo} />
        <Separator />
        <ActionRepository repo={repo} />
      </section>
    </main>
  );
}
