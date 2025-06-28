import { AxiosError } from "axios";
import { APIErrorMessage } from "../ApiError";
import apiRoutes from "../routes/apiRoutes";
import { api } from "../api";
import type { IUsersApiService } from "./Types";
import type { OutUsers } from "./Models";

export class useUsers implements IUsersApiService {
  async consultarUsuarioById(userId: string): Promise<OutUsers> {
    try {
      const { data } = await api.get(apiRoutes.users.url(userId));
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
