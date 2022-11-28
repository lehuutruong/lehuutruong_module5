import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;
  constructor(private categoryService: CategoryService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,private _builder:FormBuilder) {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }
  deleteCategory(id: number) {
    const category = this.categoryForm.value;
    console.log(category);
    this.categoryService.deleteCategory(id).subscribe(data => {
      this._router.navigateByUrl("product/list")
    })
  }
  private getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = this._builder.group({
        id:[id],
        name: [category.name]
      })
    });
  }
}
