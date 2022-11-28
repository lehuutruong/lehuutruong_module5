import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService, private _router: Router, private _builder:FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm = this._builder.group({
      id:[],
      name: []
    });
  }
  submit() {
    if (this.categoryForm.valid) {
      this.categoryService.saveCategory(this.categoryForm.value).subscribe(data => {
        this._router.navigateByUrl("/category/list");
      })
    }
  }
}
