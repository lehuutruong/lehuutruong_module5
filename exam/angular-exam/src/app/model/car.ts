import {Home} from "./home";
export interface Car {
  id?:number;
  price?:number;
  pointStart?:string;
  pointEnd?:string;
  startDate?:string;
  timeDate?:string;
  many?:number;
  homeCar:Home;
}
