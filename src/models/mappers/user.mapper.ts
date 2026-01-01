import { IUser } from "../entities/user.model";
import { IUserViewModel } from "../view-models/user.viewmodel";

export class UserMapper {
  static toViewModel(user: IUser): IUserViewModel {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  static toViewModelList(users: IUser[]): IUserViewModel[] {
    return users.map(this.toViewModel);
  }
}
