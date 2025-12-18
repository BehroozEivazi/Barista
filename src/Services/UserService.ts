// src/application/services/UserService.ts

import User from "../Domain/Entities/User";
import { IUser } from "../Domain/Interfaces/IUser";

export class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(data: IUser): User {
    const user = new User(data);
    this.users.push(user);
    return user;
  }
}
