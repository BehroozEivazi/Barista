import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";

const router = Router();

const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);

export default router;
