import { IUser } from "../Interfaces/IUser";
import BaseEntities from "./BaseEntities";

class User extends BaseEntities {
  constructor({ id, name, email }: IUser) {
    super(id, name, email);
  }
}

export default User;
