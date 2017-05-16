import { User } from './user';

export class Token {
  token: string;
  expireDate: string;
  user: User;
}
