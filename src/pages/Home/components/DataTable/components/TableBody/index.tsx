import Loading from "@/components/Loading";
import { TableCell, TableRow, TableBody as Body } from "@/components/ui/table";
import { useUsersContext } from "@/context/users.context";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const TableBody = () => {
  const { isLoadingRepositories, sortedRepos } = useUsersContext();
  const navigate = useNavigate();
  return (
    <Body>
      {isLoadingRepositories ? (
        <TableRow>
          <TableCell
            colSpan={3}
            className="text-center py-5 text-muted-foreground"
          >
            <Loading /> Carregando
          </TableCell>
        </TableRow>
      ) : !sortedRepos?.length ? (
        <TableRow>
          <TableCell colSpan={3} className="text-center text-muted-foreground">
            Nenhum repositório encontrado.
          </TableCell>
        </TableRow>
      ) : (
        sortedRepos.map((repo) => (
          <TableRow
            onClick={() =>
              navigate(`/repository/${repo.owner.login}/${repo.name}`)
            }
            key={repo.id}
            className="cursor-pointer hover:bg-gray-200"
          >
            <TableCell>{repo.name}</TableCell>
            <TableCell className="text-center">
              {repo.stargazers_count.toLocaleString("pt-BR")}
            </TableCell>
            <TableCell className="text-right">
              {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
            </TableCell>
          </TableRow>
        ))
      )}
    </Body>
  );
};

export default memo(TableBody);
