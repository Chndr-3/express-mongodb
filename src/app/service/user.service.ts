import { Model } from "mongoose";
import { User, UserModel } from "../models/user.schema";
import { CreateUserDTO } from "../models/create.user.dto";

export class ServiceError extends Error {
    status: number;
    constructor(message: string, status = 400) {
        super(message);
        this.status = status;
    }
}

export class UserService {
    constructor(private userModel: Model<User> = UserModel) { }

    async findAllUser() {
        return this.userModel.find().lean();
    }

    async createUser(payload: CreateUserDTO) {
        if (!payload.name || !payload.email) {
            throw new ServiceError("name and email are required", 400);
        }

        // Check if email exists
        const existing = await this.userModel.findOne({ email: payload.email });
        if (existing) {
            throw new ServiceError("Email already exists", 409);
        }

        // Create a new user
        return this.userModel.create(payload);
    }

}
