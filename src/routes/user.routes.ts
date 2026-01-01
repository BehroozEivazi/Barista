import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";
import { UserMapper } from "../models/mappers/user.mapper";
const container = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  return controller;
};
const router = Router();
const controller = container();
router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);

export default router;
