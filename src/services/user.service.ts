import { IUser, IUserCreate } from "../models/entities/user.model";
import { UserMapper } from "../models/mappers/user.mapper";
import { IUserViewModel } from "../models/view-models/user.viewmodel";
import { IUserRepository } from "../models/repositories/user.repository";
import { IUserService } from "../models/services/user.service";

export class UserService implements IUserService {
  constructor(private readonly userRepo: IUserRepository) {}

  async getUsers(): Promise<IUser[]> {
    return this.userRepo.findAll();
  }

  async getUserById(id: string): Promise<IUserViewModel> {
    const user = await this.userRepo.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const mUser = UserMapper.toViewModel(user);
    return mUser;
  }

  async createUser(name: string, email: string): Promise<IUser> {
    if (!name || !email) {
      throw new Error("Invalid data");
    }

    const exists = await this.userRepo.findByEmail(email);
    if (exists) {
      throw new Error("Email already exists");
    }

    const user: IUserCreate = {
      name,
      email,
    };

    return this.userRepo.create(user);
  }
}
