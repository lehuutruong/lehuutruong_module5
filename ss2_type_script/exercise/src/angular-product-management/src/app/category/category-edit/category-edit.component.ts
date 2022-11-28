import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;
  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private _router: Router, private _builder: FormBuilder) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }
  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = this._builder.group({
        id:[id],
        name: [category.name]
      })
    });
  }
  updateCategory(id: number) {
    const category = this.categoryForm.value;
    console.log(category);
    this.categoryService.updateCategory(id, category).subscribe(data => {
      alert("Edit success !!!!")
    })
  }
}
