import {User} from '../user/user';

export interface JwtResponse {
  token?: string;
  username?: string;
  lockStatus?: string;
  roles?: any;
  user?: User;
}
