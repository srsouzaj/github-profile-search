import { Button } from "@/components/ui/button";
import { useUsersContext } from "@/context/users.context";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { memo } from "react";

const Pagination = () => {
  const { user, page, totalPages, hasNextPage, hasPrevPage, changePage } =
    useUsersContext();
  return (
    <div className="flex items-center not-lg:flex-col-reverse not-lg:gap-2 justify-between">
      <span>
        <p className="font-thin text-xs">
          Total de repositórios: {user.public_repos}
        </p>
        <p className="font-thin text-xs">
          Total de páginas: {page}/{totalPages - 1}
        </p>
      </span>
      <div className="flex gap-2">
        <Button onClick={() => changePage("prev")} disabled={!hasPrevPage}>
          <ArrowLeft /> Anterior
        </Button>

        <Button onClick={() => changePage("next")} disabled={!hasNextPage}>
          Próximo <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default memo(Pagination);
