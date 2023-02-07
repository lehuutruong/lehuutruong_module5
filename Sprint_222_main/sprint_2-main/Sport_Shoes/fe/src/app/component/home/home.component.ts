import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {PageProduct} from "../../dto/product/PageProduct";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ColorService} from "../../service/product/color.service";
import {Color} from "../../model/product/color";
import {ImageService} from "../../service/product/image.service";
import {Product} from "../../model/product/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brand: boolean = false;
  percent: boolean = false;
  rfSearch: FormGroup;
  pageProduct: PageProduct | undefined;



  constructor(private _productService: ProductService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfSearch = this._formBuilder.group({
      name: [''],
      rangePrice: ['99999999999999999999999'],
      brandId: [''],
      discountId: ['']
    });
    this.getPageProduct();
  }

  checkBrand() {
    this.brand = !this.brand;
  }

  checkPercent() {
    this.percent = !this.percent;
  }

  getPageProduct() {
    this._productService.getAllProduct(0, this.rfSearch.value).subscribe(data => {
      this.pageProduct = data;
      console.log(data);
    });
  }

  goToPage(i: number) {
    this._productService.getAllProduct(i, this.rfSearch.value).subscribe(
      data => {
        this.pageProduct = data;
      });
  }


  getAllProduct() {
    this.rfSearch.setValue({
      name: '',
      rangePrice: '99999999999999999999999',
      brandId: '',
      discountId: ''
    });
    this.ngOnInit();
  }

  getProductByAdidas() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: '1',
      discountId: this.rfSearch.value['discountId']
    });
    this.getPageProduct();
  }

  getProductByNike() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: '2',
      discountId: this.rfSearch.value['discountId']
    });
    this.getPageProduct();
  }

  getProductByLevis() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: '3',
      discountId: this.rfSearch.value['discountId']
    });
    this.getPageProduct();
  }

  getProductByHAndM() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: '4',
      discountId: this.rfSearch.value['discountId']
    });
    this.getPageProduct();
  }

  getDiscount5() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: this.rfSearch.value['brandId'],
      discountId: '2'
    });
    this.getPageProduct();
  }

  getDiscount10() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: this.rfSearch.value['brandId'],
      discountId: '4'
    });
    this.getPageProduct();
  }

  getDiscount50() {
    this.rfSearch.setValue({
      name: this.rfSearch.value['name'],
      rangePrice: this.rfSearch.value['rangePrice'],
      brandId: this.rfSearch.value['brandId'],
      discountId: '5'
    });
    this.getPageProduct();
  }
}
