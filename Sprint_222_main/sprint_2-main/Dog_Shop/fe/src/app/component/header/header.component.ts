import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../service/security/token.service';
import {Router} from '@angular/router';
import {User} from '../../model/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user?: User;
  checkLogin = false;
  userRole?: string;

  constructor(private _tokenService: TokenService,
              private _router: Router) {
  }

  ngOnInit(): void {
    if (this._tokenService.isLogged()) {
      this.checkLogin = true;
      this.user = JSON.parse(this._tokenService.getUser());
      const roles = this._tokenService.getRole();
      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === "ROLE_ADMIN") {
          this.userRole = "ROLE_ADMIN";
          break;
        }
      }
    }
  }

  logout() {
    this._tokenService.logOut();
    this._router.navigate(['']).then(() => {
      location.reload();
    })
  }

}
