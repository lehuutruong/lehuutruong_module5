import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor( private _productService:ProductService,
  private _activatedRoute: ActivatedRoute,
  private _router: Router) {  this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    this.id = +paramMap.get('id');
    const product = this.getProduct(this.id);
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    });
  });}

  ngOnInit(): void {
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id);
    this._router.navigate(['/product/list']);
  }

  private getProduct(id: number) {
    return this._productService.findById(id);
  }
}
