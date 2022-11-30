import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/model/product';
import {ProductService} from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p: number;
  products: Product[] = [];
  name: any;
  category: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.name = '';
    this.category = '';
    this.productService.getAll().subscribe(data => {
      // @ts-ignore
      this.products = data
    }, error => {
      console.log("get list product error")
    }, () => {
      console.log("get list product complete")
    })
  }

  Search() {
    this.productService.searchByName(this.name).subscribe(data => {
      // @ts-ignore
      this.products = data;
    })
  }

  search() {
    if (this.name == "" && this.category == "") {
      this.ngOnInit()
    }
    this.productService.searchByNameAndCategory(this.name, this.category).subscribe(data => {
      // @ts-ignore
      this.products = data;
    })
  }

}
