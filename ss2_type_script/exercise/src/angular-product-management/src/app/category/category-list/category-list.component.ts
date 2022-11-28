import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import {CategoryService} from "../../service/category.service";
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data =>{
      // @ts-ignore
      this.category=data
    },error =>{
      console.log("get list category error")
    },()=>{
      console.log("get list category complete")
    })
  }

}
