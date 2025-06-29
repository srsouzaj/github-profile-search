import { AxiosError } from "axios";
import { APIErrorMessage } from "../ApiError";
import apiRoutes from "../routes/apiRoutes";
import { api } from "../api";
import type { IReposApiService } from "./Types";
import type { InRepo, OutRepos, OutRepoStars } from "./Models";

export class useRepos implements IReposApiService {
  async consultarRepositorios(repo: InRepo): Promise<OutRepos[]> {
    try {
      if (repo.sort === "stars") {
        const { data } = await api.get<OutRepoStars>(apiRoutes.repo.url(), {
          params: {
            ...repo,
            q: `user:${repo.username}`,
          },
        });
        return data.items || ([] as OutRepos[]);
      } else {
        const { data } = await api.get<OutRepos[]>(
          apiRoutes.users.repos.url(repo.username),
          {
            params: {
              ...repo,
              direction: repo.order,
            },
          }
        );
        return data || ([] as OutRepos[]);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        const msg =
          e.response?.status && APIErrorMessage[e.response.status]
            ? APIErrorMessage[e.response.status]
            : e.message;

        return Promise.reject(new Error(msg));
      }

      return Promise.reject(e);
    }
  }
  async consultarRepositorioPorNome(
    usernameId: string,
    repoName: string
  ): Promise<OutRepos> {
    try {
      const { data } = await api.get<OutRepos>(
        apiRoutes.users.repos.byName.url(usernameId, repoName)
      );
      return data || ({} as OutRepos);
    } catch (e) {
      if (e instanceof AxiosError) {
        const msg =
          e.response?.status && APIErrorMessage[e.response.status]
            ? APIErrorMessage[e.response.status]
            : e.message;

        return Promise.reject(new Error(msg));
      }

      return Promise.reject(e);
    }
  }
}
