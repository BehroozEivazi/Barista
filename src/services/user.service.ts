import { randomUUID } from "crypto";
import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.model";

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async getUsers(): Promise<IUser[]> {
    return this.userRepo.findAll();
  }

  async getUserById(id: string): Promise<IUser> {
    const user = await this.userRepo.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async createUser(name: string, email: string): Promise<IUser> {
    if (!name || !email) {
      throw new Error("Invalid data");
    }

    const exists = await this.userRepo.findByEmail(email);
    if (exists) {
      throw new Error("Email already exists");
    }

    const user: IUser = {
      id: randomUUID(),
      name,
      email,
    };

    return this.userRepo.create(user);
  }
}
