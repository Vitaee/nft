/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { userLogin, userRegister } from "../controllers/auth";
const authRouter = Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', userLogin);

export default authRouter;