import { Express, Request, Response } from "express";
import { createUserHander } from "./controller/userController";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/userSchema";

function routes(app: Express) {
    app.get('/healhcheck', (req: Request, res: Response) => res.sendStatus(200))
    app.post('/api/users', validateResource(createUserSchema), createUserHander)
}

export default routes