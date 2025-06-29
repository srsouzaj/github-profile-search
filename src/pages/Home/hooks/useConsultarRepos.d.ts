import type { OutRepos } from "@/services/Repos/Models";
type SortOption = "stars" | "updated" | "full_name";
type OrderOption = "asc" | "desc";
export declare const useConsultarRepositorio: (username: string, sort?: SortOption, order?: OrderOption, page?: number, per_page?: number) => {
    repositories: OutRepos[];
    isLoadingRepositories: boolean;
    isErrorRepositories: boolean;
};
export {};
