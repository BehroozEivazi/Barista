import { IUser } from "../entities/user.model";
import { IUserViewModel } from "../view-models/user.viewmodel";

export interface IUserService {
  getUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUserViewModel>;
  createUser(name: string, email: string): Promise<IUser>;
}
