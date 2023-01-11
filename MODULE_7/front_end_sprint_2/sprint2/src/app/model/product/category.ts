import {Product} from "./product";

export interface Category {
  id?: number;
  name?: string;
  deleteStatus?: boolean;
  product?: Product
}
