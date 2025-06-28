import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { OutRepos } from "@/services/Repos/Models";

type SortOption = "stars" | "updated" | "full_name";
type OrderOption = "asc" | "desc";

export const useConsultarRepositorio = (
  username: string,
  sort: SortOption = "updated",
  order: OrderOption = "desc",
  page: number = 1,
  perPage: number = 10
) => {
  return useQuery({
    queryKey: ["githubRepos", username, sort, order, page, perPage],
    queryFn: async () => {
      if (sort === "stars") {
        // Usa o endpoint de busca para ordenação global por estrelas
        const { data } = await api.get<{
          total_count: number;
          incomplete_results: boolean;
          items: OutRepos[];
        }>(
          `/search/repositories?q=user:${username}&sort=stars&order=${order}&page=${page}&per_page=${perPage}`
        );
        return data.items;
      } else {
        // Usa o endpoint tradicional para outras ordenações
        const { data } = await api.get<OutRepos[]>(
          `/users/${username}/repos?sort=${sort}&direction=${order}&page=${page}&per_page=${perPage}`
        );
        return data;
      }
    },
    enabled: !!username,
  });
};
