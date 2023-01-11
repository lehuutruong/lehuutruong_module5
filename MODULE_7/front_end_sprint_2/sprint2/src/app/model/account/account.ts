import {User} from "../user/user";

export interface Account {
  id?: number;
  username?: string;
  password?: string;
  enabled?: number;
  user ?:User
}
