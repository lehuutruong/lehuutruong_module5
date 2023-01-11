import {Product} from "./product";

export interface Country {
  id?: number;
  name?: string;
  deleteStatus?: boolean;
  product?: Product
}
