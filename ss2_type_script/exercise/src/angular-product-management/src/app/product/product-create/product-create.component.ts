import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from 'src/app/service/product.service';
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] | undefined;

  constructor(private productService: ProductService, private _router: Router, private _builder:FormBuilder,private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      // @ts-ignore
      this.categoryList=data;
      this.productForm = this._builder.group({
        id:[],
        name: [],
        price: [],
        category:[],
        description: []
      });
    })

  }

  submit() {
    if (this.productForm.valid) {
      this.productService.saveProduct(this.productForm.value).subscribe(data => {
        this._router.navigateByUrl("/product/list");
      })
    }
  }
}
