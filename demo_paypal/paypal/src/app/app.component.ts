import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paypal';

  constructor() {
    render(
      {
        id: "#myPaypal",
        value: "10",
        currency: "USD",
        onApprove: (details) => {
          alert("Thanh toán thành công");
        }
      }
    );
  }
}
