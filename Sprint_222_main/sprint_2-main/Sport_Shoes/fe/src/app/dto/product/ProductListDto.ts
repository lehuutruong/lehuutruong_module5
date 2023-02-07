import {Discount} from "../../model/product/discount";
import {Brand} from "../../model/product/brand";

export interface ProductListDto {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  dateSubmitted?: string;
  deleteStatus?: boolean;
  disCount?: Discount;
  brand?: Brand;
  url?: string;
  currentPrice?:number;
}
