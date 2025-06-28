import { memo } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { useUsersContext } from "@/context/users.context";
import Loading from "@/components/Loading";
import { Link } from "react-router-dom";
import Pagination from "./components/Pagination";
import { TableHeader } from "./components/TableHeader";

const DataTable = () => {
  const { isLoadingRepositories, sortedRepos } = useUsersContext();

  return (
    <div className="w-full space-y-4">
      <div className="border border-gray-500 rounded-md">
        <Table>
          <TableHeader />

          <TableBody>
            {isLoadingRepositories ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center text-muted-foreground"
                >
                  <Loading /> Carregando
                </TableCell>
              </TableRow>
            ) : sortedRepos.length > 0 ? (
              sortedRepos.map((repo) => (
                <TableRow key={repo.id}>
                  <TableCell>
                    <Link to={`/repository/${repo.owner.login}/${repo.name}`}>
                      {repo.name}
                    </Link>
                  </TableCell>
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
      <Pagination />
    </div>
  );
};

export default memo(DataTable);
