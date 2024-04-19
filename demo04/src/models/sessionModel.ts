import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserDocument } from "./userModel";

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument["_id"]

    createdAt: Date
    updatedAt: Date
    comparePassword(candidatePassword:string): Promise<Boolean>
}

const sessionSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

const sessionModel = mongoose.model("Session04", sessionSchema)
export default sessionModel