import {Class} from "./class";

export interface Teacher {
  id?:number;
  name?:string;
  point?:number;
  dayOfBirth:string;
  class:Class;

}
