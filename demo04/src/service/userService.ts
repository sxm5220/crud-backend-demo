import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/userModel";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>) {
    try {
        return await UserModel.create(input)
    } catch (error: any) {
        throw new Error(error)
    }
}