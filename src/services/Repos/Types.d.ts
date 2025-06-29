import type { InRepo, OutRepos } from "./Models";
export interface IReposApiService {
    consultarRepositorios(repo: InRepo): Promise<OutRepos[]>;
    consultarRepositorioPorNome(usernameId: string, repoName: string): Promise<OutRepos>;
}
