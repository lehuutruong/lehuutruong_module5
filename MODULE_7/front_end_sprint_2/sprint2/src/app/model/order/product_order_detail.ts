import {ProductOrder} from "./product_order";
import {Product} from "../product/product";

export interface ProductOrderDetail {
  id?: number;
  quantity?: number;
  deleteStatus?: boolean;
  productOrder?: ProductOrder;
  product?: Product
}
