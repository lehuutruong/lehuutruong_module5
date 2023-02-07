import {BrowserModule} from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {UserCreateComponent} from './component/user/user-create/user-create.component';
import {LoginComponent} from './component/security/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {ProductDetailComponent} from './component/product/product-detail/product-detail.component';
import {PaymentCartComponent} from './component/payment/payment-cart/payment-cart.component';
import {FooterComponent} from './component/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxCurrencyModule} from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserCreateComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailComponent,
    PaymentCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCurrencyModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'đ'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
