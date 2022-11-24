import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  red: string = "#FF0000";
  blue: string = "#0000FF"
  gray: string = "#808080";
  yellow: string = "#FFFF00";
  black: string = "#000000";
  navy: string = "#000080"
  color: string = 'red';
  colorChange: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(s: string) {
    this.color = s;
  }

}
