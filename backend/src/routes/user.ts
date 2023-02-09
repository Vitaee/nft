import { Router } from 'express';
import {
  currentUser,
  refreshAccessToken,
  updateUser,
} from '../controllers/user';
import { jwtCheck } from '../middleware/checkJwt';
const userRouter = Router();

userRouter.get('/', jwtCheck, currentUser);
userRouter.put('/', jwtCheck, updateUser);
userRouter.get('/newToken', refreshAccessToken);

export default userRouter;
