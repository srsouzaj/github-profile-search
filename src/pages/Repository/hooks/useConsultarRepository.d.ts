import type { OutRepos } from "@/services/Repos/Models";
interface IUseConsultarRepository {
    username?: string;
    repoName?: string;
}
declare const useConsultarRepository: ({ repoName, username, }: IUseConsultarRepository) => {
    repo: OutRepos;
    isLoadingRepository: boolean;
    isErrorRepository: boolean;
};
export default useConsultarRepository;
