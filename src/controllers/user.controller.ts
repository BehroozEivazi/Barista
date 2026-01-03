import { Request, Response, NextFunction } from "express";
import { IUserService } from "../models/services/user.service";
import { getIO } from "../socket/socket.server";

export class UserController {
  constructor(private readonly userService: IUserService) {}

  getUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getUsers();

    res.json(users);
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    // getIO().emit("broadcast:data", {
    //   value: "Triggered from REST API",
    //   at: new Date().toISOString(),
    // });
    try {
      const user = await this.userService.getUserById(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email } = req.body;
      const user = await this.userService.createUser(name, email);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
}
