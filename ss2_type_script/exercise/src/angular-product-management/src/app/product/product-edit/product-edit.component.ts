import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from 'src/app/model/category';
import {ProductService} from 'src/app/service/product.service';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categoryList: Category;

  equals(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private _router: Router,
              private _builder: FormBuilder,
              private categoryService:CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    this.categoryService.getAll().subscribe(data=>{
      this.categoryList=data;
      return this.productService.findById(id).subscribe(product => {
        this.productForm = this._builder.group({
          id: [id],
          name: [product.name],
          price: [product.price],
          category: [product.category],
          description: [product.description]
        })
      });
    })

  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    console.log(product);
    this.productService.updateProduct(id, product).subscribe(data => {
      alert("Edit success !!!!")
    })
  }
}
