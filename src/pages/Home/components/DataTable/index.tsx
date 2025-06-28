import { memo, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

import { useConsultarRepositorio } from "../../hooks/useConsultarRepos";
import { useUsersContext } from "@/context/users.context";

const perPage = 10;

const DataTable = () => {
  const [sort, setSort] = useState<"stars" | "updated" | "full_name">("stars");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const { user } = useUsersContext();

  const { data: repos = [] } = useConsultarRepositorio(
    user.login,
    sort,
    order,
    page,
    perPage
  );

  const sortedRepos = useMemo(() => {
    if (sort === "stars") {
      return [...repos].sort((a, b) => {
        return order === "asc"
          ? a.stargazers_count - b.stargazers_count
          : b.stargazers_count - a.stargazers_count;
      });
    }
    return repos;
  }, [repos, sort, order]);

  const handleSort = (column: typeof sort) => {
    if (sort === column) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSort(column);
      setOrder("desc");
      setPage(1);
    }
  };

  const hasNextPage = repos.length === perPage;
  const hasPrevPage = page > 1;

  return (
    <div className="w-full space-y-4">
      <div className="border border-gray-500 rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-300">
              <TableHead
                onClick={() => handleSort("full_name")}
                className="cursor-pointer select-none rounded-tl-md"
              >
                Nome{" "}
                <ArrowUpDown
                  className={`inline w-4 h-4 ${
                    sort === "full_name" ? "text-red-500" : "text-black"
                  }`}
                />
              </TableHead>

              <TableHead
                onClick={() => handleSort("stars")}
                className="cursor-pointer w-20 text-center select-none"
              >
                Estrelas{" "}
                <ArrowUpDown
                  className={`inline w-4 h-4 ${
                    sort === "stars" ? "text-red-500" : "text-black"
                  }`}
                />
              </TableHead>

              <TableHead
                onClick={() => handleSort("updated")}
                className="cursor-pointer text-right w-28 select-none rounded-tr-md"
              >
                Atualizado{" "}
                <ArrowUpDown
                  className={`inline w-4 h-4 ${
                    sort === "updated" ? "text-red-500" : "text-black"
                  }`}
                />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedRepos.length > 0 ? (
              sortedRepos.map((repo) => (
                <TableRow key={repo.id}>
                  <TableCell>{repo.name}</TableCell>
                  <TableCell className="text-center">
                    {repo.stargazers_count}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center text-muted-foreground"
                >
                  Nenhum repositório encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* BOTÕES DE PAGINAÇÃO */}
      <div className="flex gap-5 justify-end">
        <Button onClick={() => setPage((p) => p - 1)} disabled={!hasPrevPage}>
          ← Anterior
        </Button>

        <Button onClick={() => setPage((p) => p + 1)} disabled={!hasNextPage}>
          Próximo →
        </Button>
      </div>
    </div>
  );
};

export default memo(DataTable);
