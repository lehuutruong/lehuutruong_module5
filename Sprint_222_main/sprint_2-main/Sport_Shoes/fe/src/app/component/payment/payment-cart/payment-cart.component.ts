import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../service/security/token.service";
import {OderService} from "../../../service/order/oder.service";
import {User} from "../../../model/user/user";
import {Oder} from "../../../model/order/oder";
import {ProductDetailService} from "../../../service/product/product-detail.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.css']
})
export class PaymentCartComponent implements OnInit {
  user: User;
  listOder: Oder[];

  constructor(private _tokenService: TokenService,
              private _oderService: OderService,
              private _productDetailService:ProductDetailService,
              private _router:Router) {
    if (this._tokenService.isLogged()) {
      this.user = JSON.parse(this._tokenService.getUser());
    }
  }

  ngOnInit(): void {
    this._oderService.findOderByUserId(this.user.id).subscribe(
      data => {
        this.listOder = data;
      });
  }

  routerChange(id: number) {
    this._router.navigate([id]);
  }
}
