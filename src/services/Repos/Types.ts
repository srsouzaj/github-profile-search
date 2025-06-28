import type { OutRepos } from "./Models";

export interface IReposApiService {
  consultarRepositorio(userId: string): Promise<OutRepos>;
}
