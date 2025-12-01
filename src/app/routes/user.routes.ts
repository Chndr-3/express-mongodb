import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserModel } from '../models/user.schema';

const userRouter = Router();
const userController = new UserController(new UserService(UserModel));

userRouter.get("/", userController.retrieveListUser);
userRouter.post("/", userController.createUser);

export default userRouter;
