import {Payment} from "../payment/payment";
import {User} from "../user/user";
import {ProductDetail} from "../product/product-detail";

export interface Oder {
  id?: number;
  orderTime?: string;
  deleteStatus?: boolean;
  productDetail?: ProductDetail;
  payment?: Payment;
  user?: User;
  quantity?:number;
}
