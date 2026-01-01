import { IRepository } from "./repository";
import { IUser, IUserCreate } from "../entities/user.model";

export interface IUserRepository extends IRepository<IUser, IUserCreate> {
  findByEmail(email: string): Promise<IUser | null>;
}
