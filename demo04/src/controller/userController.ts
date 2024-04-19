import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../service/userService";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/userSchema";
import UserModel from '../models/userModel'

export async function createUserHander(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        // const { email } = req.body
        // logger.info('Email=>',email)
        // const existingUser = await UserModel.findOne({ email })
        // if (existingUser) return res.sendStatus(400).json({ message: "该用户已存在！" })
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"))
    } catch (error: any) {
        logger.error(error)
        return res.status(409).send(error.message)
    }
}