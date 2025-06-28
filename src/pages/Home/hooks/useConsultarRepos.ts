import { useQuery } from "@tanstack/react-query";
import Services from "@/services";
import type { OutRepos } from "@/services/Repos/Models";

type SortOption = "stars" | "updated" | "full_name";
type OrderOption = "asc" | "desc";

export const useConsultarRepositorio = (
  username: string,
  sort: SortOption = "updated",
  order: OrderOption = "desc",
  page: number = 1,
  per_page: number = 10
) => {
  const { repos } = Services();
  const params = { username, sort, order, page, per_page };

  const {
    data,
    isLoading: isLoadingRepositories,
    isError: isErrorRepositories,
  } = useQuery({
    queryKey: ["githubRepos", username, sort, order, page, per_page],
    queryFn: async () => repos.consultarRepositorios(params),
    enabled: !!username,
  });

  return {
    repositories: data ?? ([] as OutRepos[]),
    isLoadingRepositories,
    isErrorRepositories,
  };
};
