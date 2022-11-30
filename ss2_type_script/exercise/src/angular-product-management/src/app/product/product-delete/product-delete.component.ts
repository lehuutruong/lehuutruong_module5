import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categoryList:Category;
  equals(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }
  constructor(private productService: ProductService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,private _builder:FormBuilder,
              private categoryService:CategoryService) {

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  deleteProduct(id: number) {
    const product = this.productForm.value;
    console.log(product);
    this.productService.deleteProduct(id).subscribe(data => {
      this._router.navigateByUrl("product/list")
    })
  }

  private getProduct(id: number) {
    this.categoryService.getAll().subscribe(data=>{
      this.categoryList=data;
    })
    return this.productService.findById(id).subscribe(product => {
      this.productForm = this._builder.group({
        id:[product.id],
        name: [product.name],
        price: [product.price],
        category: [product.category],
        description: [product.description]
      })
    });
  }
}
