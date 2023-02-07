import {ProductDetail} from './product-detail';

export interface Age {
  id?: number;
  age?: number;
  deleteStatus?: boolean;
  productDetails?: ProductDetail[];
}
