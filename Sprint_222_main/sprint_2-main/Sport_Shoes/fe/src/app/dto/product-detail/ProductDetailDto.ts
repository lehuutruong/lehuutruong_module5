import {Product} from "../../model/product/product";
import {Color} from "../../model/product/color";
import {Age} from "../../model/product/age";
import {Category} from "../../model/product/category";
import {Image} from "../../model/product/image";
import {Oder} from "../../model/order/oder";

export interface ProductDetailDto {
  id?: number;
  quantity?: number;
  deleteStatus?: boolean;
  product?: Product;
  color?: Color;
  age?: Age;
  category?: Category;
  images?: Image[];
  oders?: Oder[];
  colorId?: number;
  ageId?: number;
  productId?: number;
}
