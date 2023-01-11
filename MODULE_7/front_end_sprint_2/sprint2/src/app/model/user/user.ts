import {Address} from "./address";
import {UserType} from "./user-type";
import {Account} from "../account/account";

export interface User {
  id?: number;
  avatar?:string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  birthDay?: string;
  idCard?: string;
  deleteStatus?: boolean;
  address?: Address;
  userType?: UserType;
  account?: Account;
}
