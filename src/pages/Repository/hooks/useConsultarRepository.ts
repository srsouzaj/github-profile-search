import Services from "@/services";
import type { OutRepos } from "@/services/Repos/Models";
import { useQuery } from "@tanstack/react-query";

interface IUseConsultarRepository {
  username?: string;
  repoName?: string;
}

const useConsultarRepository = ({
  repoName,
  username,
}: IUseConsultarRepository) => {
  const { repos } = Services();
  const {
    data,
    isLoading: isLoadingRepository,
    isError: isErrorRepository,
  } = useQuery<OutRepos, Error, OutRepos>({
    queryKey: ["repo", repoName, repoName],
    queryFn: () => repos.consultarRepositorioPorNome(username!, repoName!),
    enabled: !!repoName && !!username,
  });

  return {
    repo: data || ({} as OutRepos),
    isLoadingRepository,
    isErrorRepository,
  };
};

export default useConsultarRepository;
