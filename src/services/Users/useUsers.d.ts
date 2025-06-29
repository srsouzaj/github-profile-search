import type { IUsersApiService } from "./Types";
import type { OutUsers } from "./Models";
export declare class useUsers implements IUsersApiService {
    consultarUsuarioById(userId: string): Promise<OutUsers>;
}
