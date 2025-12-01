import { Request, Response } from "express";
import { CreateUserDTO } from "../models/create.user.dto";
import { UserService, ServiceError } from "../service/user.service";

export class UserController {
    constructor(private userService: UserService) {}

    retrieveListUser = async (_req: Request, res: Response) => {
        try {
            const users = await this.userService.findAllUser();
            res.json({ count: users.length, data: users });
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch users" });
        }
    };

    createUser = async (req: Request, res: Response) => {
        try {
            const userPayload: CreateUserDTO = req.body;
            const user = await this.userService.createUser(userPayload);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof ServiceError) {
                res.status(error.status).json({ message: error.message });
                return;
            }
            res.status(500).json({ message: "Failed to create user" });
        }
    };
}
