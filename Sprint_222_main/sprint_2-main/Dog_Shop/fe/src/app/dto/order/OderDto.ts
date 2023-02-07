import {Payment} from "../../model/payment/payment";
import {User} from "../../model/user/user";

export interface OderDto {
  id?: number;
  oderTime?: string;
  quantity?: number;
  deleteStatus?: number;
  paymentStatus?: number;
  productDetail?: number;
  payment?: Payment;
  user?: User;
  userId?: number;
  productDetailId?:number;
}
