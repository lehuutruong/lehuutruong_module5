import { ProductListDto} from "./ProductListDto";

export interface PageProduct {
  content: ProductListDto[];
  pageable: {
    sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
    },
    offset: number,
    pageNumber: number,
    pageSize: number,
    unpaged: boolean,
    paged: boolean
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  age: number;
  number: number;
  sort:
    {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
    };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
