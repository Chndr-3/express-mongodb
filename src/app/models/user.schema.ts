// src/app/models/user.schema.ts
import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
}

const UserSchema = new Schema<User>(
    { name: { type: String, required: true }, email: { type: String, required: true, unique: true } },
    { timestamps: true }
);

export const UserModel = model<User>('User', UserSchema);
