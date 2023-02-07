import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/security/token.service';
import {AuthService} from '../../../service/security/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {MessageReponse} from '../../../model/security/MessageReponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rfLogin: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _tokenService: TokenService,
              private _authService: AuthService,
              private _router: Router,
              private _toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getFormLogin();
  }

  getFormLogin() {
    this.rfLogin = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      rememberMe: [false]
    });
  }

  login() {
    this._authService.loginForm(this.rfLogin.value).subscribe(data => {

      if (data.token != undefined) {
        if (this.rfLogin.value.rememberMe) {
          this._tokenService.rememberMe(data.token, data.username, data.lockStatus, data.roles, data.user);
        } else {
          this._tokenService.notRememberMe(data.token, data.username, data.lockStatus, data.roles, data.user);
        }
        this._router.navigate(['']).then(() => {
          window.location.reload();
        });
      }
    }, error => {
      const messageReponse: MessageReponse = error;
      if (messageReponse.message) {
        this._toast.error('Không tìm thấy người dùng');
        this._router.navigateByUrl('/login');
      } else {
        this._toast.error('Đăng nhập thất bại');
        this._router.navigateByUrl('/login');
      }
    });
  }

}
