import {Product} from "./product";
import {Oder} from "../order/oder";
import {Color} from "./color";
import {Age} from "./age";
import {Category} from "./category";
import {Image} from "./image";

export interface ProductDetail {
  id?: number;
  quantity?: number;
  deleteStatus?: boolean;
  product?: Product;
  color?: Color;
  size?: Age;
  category?: Category;
  images?: Image[];
  oders: Oder[];
}
