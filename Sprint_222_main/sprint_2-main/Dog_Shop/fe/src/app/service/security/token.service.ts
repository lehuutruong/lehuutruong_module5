import {Injectable} from '@angular/core';
import {User} from '../../model/user/user';

const TOKEN_KEY = 'Token_Key';
const USER_KEY = 'User_Key';
const USERNAME_KEY = 'Username_Key';
const LOCKSTATUS_KEY = 'LockStatus_Key';
const ROLE_KEY = 'Role_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];

  constructor() {
  }

  public setTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public setTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getTokenLocal(): string {
    if (localStorage.getItem(TOKEN_KEY) != null) {
      return localStorage.getItem(TOKEN_KEY);
    } else {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }

  public setUserLocal(user: User) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public setUserSession(user: User) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): string {
    if (localStorage.getItem(USER_KEY) != null) {
      return localStorage.getItem(USER_KEY);
    } else {
      return sessionStorage.getItem(USER_KEY);
    }
  }

  public setRoleLocal(roles: string[]) {
    window.localStorage.removeItem(ROLE_KEY);
    window.localStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }

  public setRoleSession(roles: string[]) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }

  public getRole(): string[] {
    this.roles = [];
    if (localStorage.getItem(ROLE_KEY) != null) {
      JSON.parse(localStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority);
      });
    } else {
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority);
      });
    }
    return this.roles;
  }

  public setUsernameLocal(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public setUsernameSession(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsernameLocal(): string {
    if (localStorage.getItem(USERNAME_KEY) != null) {
      return localStorage.getItem(USERNAME_KEY);
    } else {
      return sessionStorage.getItem(USERNAME_KEY);
    }
  }

  public setLockStatusLocal(lockstatus: string) {
    window.localStorage.removeItem(LOCKSTATUS_KEY);
    window.localStorage.setItem(LOCKSTATUS_KEY, lockstatus);
  }

  public setLockStatusSession(lockstatus: string) {
    window.sessionStorage.removeItem(LOCKSTATUS_KEY);
    window.sessionStorage.setItem(LOCKSTATUS_KEY, lockstatus);
  }

  public getLockStatusLocal(): string {
    if (localStorage.getItem(LOCKSTATUS_KEY) != null) {
      return localStorage.getItem(LOCKSTATUS_KEY);
    } else {
      return sessionStorage.getItem(LOCKSTATUS_KEY);
    }
  }

  public logOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public rememberMe(token: string, username: string, lockStatus: string, roles: string[], user: User) {
    this.logOut();
    this.setTokenLocal(token);
    this.setUsernameLocal(username);
    this.setLockStatusLocal(lockStatus);
    this.setRoleLocal(roles);
    this.setUserLocal(user);
  }

  public notRememberMe(token: string, username: string, lockStatus: string, roles: string[], user: User) {
    this.logOut();
    this.setTokenSession(token);
    this.setUsernameSession(username);
    this.setLockStatusSession(lockStatus);
    this.setRoleSession(roles);
    this.setUserSession(user);
  }

  public isLogged(): boolean {
    return !(window.sessionStorage.getItem(TOKEN_KEY) == null && window.localStorage.getItem(TOKEN_KEY) == null);
  }
}
