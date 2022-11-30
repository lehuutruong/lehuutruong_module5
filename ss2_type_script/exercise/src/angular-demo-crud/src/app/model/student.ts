import { Class } from "./class";


export interface Student {
  id?: number;
  name?: string;
  point?: number;
  gender?: string;
  class: Class;
}
