import type { OutUsers } from "./Models";
export interface IUsersApiService {
    consultarUsuarioById(userId: string): Promise<OutUsers>;
}
