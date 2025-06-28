import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Files } from "lucide-react";
import { Link } from "react-router-dom";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import type { OutRepos } from "@/services/Repos/Models";
import { memo } from "react";

const ActionRepository = ({ repo }: { repo: OutRepos }) => {
  const { handleCopy, isCopied } = useCopyToClipboard();
  return (
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
  );
};

export default memo(ActionRepository);
