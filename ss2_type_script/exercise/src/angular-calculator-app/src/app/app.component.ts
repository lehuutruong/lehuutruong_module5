import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  firstNumber: number;
  secondNumber: number;
  result: number;

  addition() {
  this.result = parseFloat(String(this.firstNumber)) + parseFloat(String(this.secondNumber));
  }

  subtraction() {
    this.result = parseFloat(String(this.firstNumber)) - parseFloat(String(this.secondNumber));
  }

  multiplication() {
    this.result = parseFloat(String(this.firstNumber)) * parseFloat(String(this.secondNumber));
  }

  division() {
    this.result = parseFloat(String(this.firstNumber)) / parseFloat(String(this.secondNumber));
  }
}
