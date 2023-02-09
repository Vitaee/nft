import { NextFunction, Request, Response } from 'express';
import { verifyRefreshToken } from '../utils/verifyRefreshToken';
import { getDBInstance, Database } from '../database/db';
import { User } from '../database/models/user';

export const jwtCheck = async (
  req: Request<never, never, never, never>,
  res: Response,
  next: NextFunction,
) => {
  const database: Database = await getDBInstance();
  const token = req.headers.authorization?.toString().split(' ')[1];
  const payload: any = await verifyRefreshToken(token?.toString());

  if (payload.message)
    return res.status(403).json({ message: payload.message });

  const user: User = await database.user.findOne({
    where: { id: payload?.id },
  });

  req.currentUser = user;

  next();
};
