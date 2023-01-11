import {ProductOrderDetail} from "../order/product_order_detail";
import {Country} from "./country";
import {Category} from "./category";
import {ImgProduct} from "./img_product";

export interface Product {
  id?: number;
  name?: string;
  color?: string;
  age?: string;
  price?: number;
  quantity?: number;
  avatar?: string;
  productOrderDetail?: ProductOrderDetail;
  country?: Country;
  category?: Category;
  imgProduct?: ImgProduct;
}
