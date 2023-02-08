/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { currentUser } from "../controllers/user";
const userRouter = Router();

userRouter.get('/', currentUser);

export default userRouter;