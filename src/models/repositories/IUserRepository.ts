import { IRepository } from "./IRepository";
import { IUser, IUserCreate } from "../entities/user.model";

export interface IUserRepository extends IRepository<IUser, IUserCreate> {
  findByEmail(email: string): Promise<IUser | null>;
}
