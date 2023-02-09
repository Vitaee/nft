import { User } from '../../database/models/user';
export {};

declare global {
  namespace Express {
    export interface Request {
      currentUser?: User;
    }
  }
}
