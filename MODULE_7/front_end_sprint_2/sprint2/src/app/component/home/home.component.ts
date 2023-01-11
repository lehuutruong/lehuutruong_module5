import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Product} from "../../model/product/product";
import {ImgProduct} from "../../model/product/img_product";
import {Category} from "../../model/product/category";
import {Country} from "../../model/product/country";
import {ProductListService} from "../../service/product/product-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rfProduct: FormGroup;
  product: Product[];
  imageProduct: ImgProduct[];
  category: Category[];
  country: Country[];


  constructor(private productService: ProductListService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data) => {
      this.product = data;
      console.log(data);
    })
    this.productService.findAll().subscribe((data) => {
      this.product = data;
    })
  }

}
