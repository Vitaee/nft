/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { currentUser } from "../controllers/user";
import { jwtCheck } from "../middleware/checkJwt";
const userRouter = Router();

userRouter.get('/', jwtCheck, currentUser);

export default userRouter;