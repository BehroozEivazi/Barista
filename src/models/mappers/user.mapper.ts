import { TokenValidator } from "../../validations/token.validator";
import { IUser } from "../entities/user.model";
import { IUserViewModel } from "../view-models/user.viewmodel";

export class UserMapper {
  static toViewModel(user: IUser): IUserViewModel {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: new TokenValidator(process.env.JWT_SECRET || "super secret", 2000).generateToken({ userId: user.id }, Number(process.env.JWT_EXPIRE_TIME)),
    };
  }

  static toViewModelList(users: IUser[]): IUserViewModel[] {
    return users.map(this.toViewModel);
  }
}
