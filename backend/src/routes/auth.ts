/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { userRegister } from "../controllers/auth";
const authRouter = Router();

authRouter.post('/register', userRegister);

export default authRouter;