// src/presentation/controllers/UserController.ts
import { Body, Controller, Get, Post, Route, SuccessResponse } from "tsoa";
import { UserService } from "../../Services/UserService";
import { IUser } from "../../Domain/Interfaces/IUser";

@Route("users") // مسیر پایه
export class UserController extends Controller {
  private userService = new UserService(); // ✅ instantiate داخل خود کنترلر

  @Get()
  public async getUsers(): Promise<IUser[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  @SuccessResponse("200", "Created")
  public async createUser(@Body() body: IUser): Promise<IUser> {
    const user = this.userService.createUser(body);
    this.setStatus(200);
    return user;
  }
}
