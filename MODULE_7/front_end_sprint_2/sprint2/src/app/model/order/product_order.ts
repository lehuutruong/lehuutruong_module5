import {User} from "../user/user";
import {ProductOrderDetail} from "./product_order_detail";

export interface ProductOrder {
  id?: number;
  orderDate?: string;
  deleteStatus?: boolean;
  user?: User;
  product_detail_order?: ProductOrderDetail;
}
