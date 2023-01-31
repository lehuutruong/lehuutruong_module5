import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../service/account/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  role: string[] = [];

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenService.isLogged()) {
      this.role = this.tokenService.getRole();
      for (const x of this.role) {
        if (x === 'ROLE_ADMIN') {
          return true
        }
      }
      alert("Không có quyền của Admin");
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['home/login'])
    }
  }

}
