import type { IReposApiService } from "./Types";
import type { InRepo, OutRepos } from "./Models";
export declare class useRepos implements IReposApiService {
    consultarRepositorios(repo: InRepo): Promise<OutRepos[]>;
    consultarRepositorioPorNome(usernameId: string, repoName: string): Promise<OutRepos>;
}
