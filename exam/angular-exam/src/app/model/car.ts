import {Home} from "./home";
export interface Car {
  id?:number;
  price?:number;
  pointStart?:string;
  pointEnd?:string;
  startDate?:string;
  timeDate?:string;
  many?:string;
  homeCar:Home;
}
