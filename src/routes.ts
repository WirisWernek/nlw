import { Router } from 'express';
import { UserController } from "./controllers/UserController";

const router = Router();

const usersController = new UserController();

router.post("/users", usersController.create);

export { router };