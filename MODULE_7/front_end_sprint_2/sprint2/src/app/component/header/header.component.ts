import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user/user";
import {TokenService} from "../../service/account/token.service";
import {Router} from "@angular/router";
import {Account} from "../../model/account/account";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;
  nameAccount: any;
  currentUser: Account;
  accountRole: string;
  constructor(private _tokenService: TokenService,
              private _router: Router) { }

  ngOnInit(): void {
    if (this._tokenService.isLogged()) {
      this.checkLogin = true;

      this.currentUser = JSON.parse(this._tokenService.getUser());
      console.log("hehhe"+this.currentUser)

      this.nameAccount =  this.currentUser.user.firstName + ' ' + this.currentUser.user.lastName;
      console.log("tên"+this.nameAccount)
      const roles = this._tokenService.getRole();

      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === "ROLE_ADMIN") {
          this.accountRole = "ROLE_ADMIN"
        }
      }
    }
  }

  logOut() {
    this._tokenService.logOut();
    this._router.navigateByUrl('home').then(() => {
      location.reload();
    })
  }
}
