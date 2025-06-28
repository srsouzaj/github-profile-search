import type { OutRepos } from "./Models";

export interface IReposApiService {
  consultarRepositorios(usernameId: string): Promise<OutRepos>;
  consultarRepositorioPorNome(
    usernameId: string,
    repoName: string
  ): Promise<OutRepos>;
}
