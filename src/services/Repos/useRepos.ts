import { AxiosError } from "axios";
import { APIErrorMessage } from "../ApiError";
import apiRoutes from "../routes/apiRoutes";
import { api } from "../api";
import type { IReposApiService } from "./Types";
import type { OutRepos } from "./Models";

export class useRepos implements IReposApiService {
  async consultarRepositorio(usernameId: string): Promise<OutRepos> {
    try {
      const { data } = await api.get(apiRoutes.users.repos.url(usernameId));
      return data;
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
