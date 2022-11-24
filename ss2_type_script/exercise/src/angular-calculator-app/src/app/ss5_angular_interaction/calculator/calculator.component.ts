import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

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
