import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";
import { TokenValidator } from "../validations/token.validator";
import { authMiddleware } from "../middlewares/auth.middleware";
const container = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  return controller;
};
const tokenValidator = new TokenValidator(process.env.JWT_SECRET!);

const router = Router();
const controller = container();
router.get("/", authMiddleware(tokenValidator), controller.getUsers);
router.get("/:id", authMiddleware(tokenValidator), controller.getUserById);
router.post("/", controller.createUser);

export default router;
