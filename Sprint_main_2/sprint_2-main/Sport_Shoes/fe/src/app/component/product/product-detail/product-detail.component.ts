import {Component, OnInit} from '@angular/core';
import {ProductDetailService} from "../../../service/product/product-detail.service";
import {ProductDetailDto} from "../../../dto/product-detail/ProductDetailDto";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product/product.service";
import {PageProduct} from "../../../dto/product/PageProduct";
import {AgeService} from "../../../service/product/age.service";
import {Age} from "../../../model/product/age";
import {ColorService} from "../../../service/product/color.service";
import {Color} from "../../../model/product/color";
import {ImageService} from "../../../service/product/image.service";
import {TokenService} from "../../../service/security/token.service";
import {OderService} from "../../../service/order/oder.service";
import {User} from "../../../model/user/user";
import {Oder} from "../../../model/order/oder";
import {ProductDetail} from "../../../model/product/product-detail";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: ProductDetailDto;
  idProductDetail: number;
  rfOder: FormGroup;
  productByBrand: PageProduct | undefined;
  brandId: number;
  ageList: Age[];
  ProductDetailList: ProductDetailDto[];
  colorList: Color[];
  imageList?: any;
  rfImage: FormGroup;
  rfProductDetail: FormGroup;
  user: User;
  productDetailFormSearch: ProductDetailDto;
  newOder: Oder;
  rfColor: FormGroup;
  productDetailResult: ProductDetail;
  checkQuantity: boolean = false;
  a:number =10;

  constructor(private _productDetailService: ProductDetailService,
              private _activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _productService: ProductService,
              private _router: Router,
              private _ageService: AgeService,
              private _colorService: ColorService,
              private _imageService: ImageService,
              private _tokenService: TokenService,
              private _oderService: OderService) {
    this._activatedRoute.params.subscribe(
      (params: Params) => {
        this.idProductDetail = params['productId'];
      });

    if (this._tokenService.isLogged()) {
      this.user = JSON.parse(this._tokenService.getUser());
    }
  }

  ngOnInit(): void {
    this._productDetailService.getProductDetail(this.idProductDetail).subscribe(
      data => {
        this.productDetail = data;

        this.rfImage = this._formBuilder.group({
          productId: this.idProductDetail,
          colorId: this.productDetail.color.id
        });

        this.rfColor = this._formBuilder.group({
          productId: this.idProductDetail,
          ageId: this.productDetail.age.id
        });

        this.rfProductDetail = this._formBuilder.group({
          productId: this.idProductDetail,
          colorId: this.productDetail.color.id,
          ageId: this.rfColor.controls['ageId'].value
        });

        this.getImage(this.productDetail.color.id);
        this.ProductDetailList = this.productDetail?.product?.productDetails
        this.brandId = this.productDetail?.product?.brand?.id;
        this.getProductByBrandId();

        this._colorService.getAllColorByProductDetail(this.rfColor.value).subscribe(
          data => {
            this.colorList = data;
          });


        this.rfOder = this._formBuilder.group({
          userId: this.user?.id,
          quantity: [0,[Validators.required, Validators.min(0), Validators.max(this.productDetailResult?.quantity)]],
          productDetailId: ''
        }, {validator: [this.checkQuantityOder]});

      });

    this.selectedChangImage();
  }

  getProductDetail(colorId: number) {
    this.rfProductDetail.setValue({
      productId: this.idProductDetail,
      colorId: colorId,
      ageId: this.rfProductDetail.controls['ageId'].value
    });
    this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
      data => {
        this.productDetailResult = data;
      });
  }

  getAllColorByProductDetail(ageId: number) {
    this.rfProductDetail.setValue({
      productId: this.idProductDetail,
      colorId: this.rfProductDetail.controls['colorId'].value,
      ageId: ageId
    });

    this.rfColor.setValue({
      productId: this.idProductDetail,
      ageId: ageId
    });

    this._colorService.getAllColorByProductDetail(this.rfColor.value).subscribe(
      data => {
        this.colorList = data;
      });

    this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
      data => {
        this.productDetailResult = data;
        if (this.rfOder?.value?.quantity > this.productDetailResult?.quantity) {
          this.rfOder.setValue({
            userId: this.user?.id,
            quantity: this.productDetailResult?.quantity,
            productDetailId: this.productDetailResult?.id
          });
          this.checkQuantity = false;
        }else {
          this.checkQuantity = false;
        }
      });

  }

  getImage(colorId: number) {
    this.rfImage.setValue(
      {
        productId: this.idProductDetail,
        colorId: colorId
      });


    this._imageService.getImageOfProductDetail(this.rfImage.value).subscribe(
      data => {
        this.imageList = data;
        this.selectedChangImage();
      });
    this.getAllSizeDtos();
    this.getProductDetail(colorId);
  }

  changeImage(event: any, i: any, j: number) {
    const src = event.target.src;
    const imgs = document.querySelectorAll('.img-selected' + i);
    document.getElementById('image__main' + i).setAttribute('src', src);
    imgs.forEach(value => {
      if (value.getAttribute('value') == j + '') {
        value.classList?.add('actived');
      } else {
        value.classList.remove('actived');
      }
    });
  }

  selectedChangImage() {
    setTimeout(() => {
      const imgF = document.querySelectorAll('.carousel__images');
      imgF.forEach(value => {
        value?.children[0]?.classList?.add('actived');
      });
    }, 100)
  }

  getProductByBrandId() {
    this._productService.getAllProductByBrandId(this.brandId).subscribe(
      data => {
        this.productByBrand = data;
      });
  }

  onClick(id: number) {
    this._router.navigate([id]);
    this.idProductDetail = id;
    this.ngOnInit();
  }

  getAllSizeDtos() {
    this._ageService.getAllAgeDto(this.rfImage.value).subscribe(
      data => {
        this.ageList = data;

        if (this.rfOder?.value?.quantity > this.productDetailResult?.quantity) {

          this.rfOder.setValue({
            userId: this.user?.id,
            quantity: this.productDetailResult?.quantity,
            productDetailId: this.productDetailResult?.id
          });
          this.checkQuantity = false;
        }else {
        }
      });
  }

  addNewOder() {
    this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
      data => {
        this.productDetailFormSearch = data;
        this.rfOder?.setValue({
          userId: this.user?.id,
          quantity: this.rfOder.controls['quantity'].value,
          productDetailId: this.productDetailFormSearch.id
        });
        this._oderService.addNewOder(this.rfOder.value).subscribe(
          oder => {
            this.newOder = oder;
            this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
              data => {
                this.productDetailResult = data;
              });
          });

      });
  }

  plusOne() {
    this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
      data => {
        this.productDetailFormSearch = data;
        if (this.rfOder.value.quantity < this.productDetailResult.quantity) {
          this.rfOder.value.quantity = Number(Number(this.rfOder.value.quantity) + 1);
          this.rfOder.setValue({
            userId: this.user?.id,
            quantity: this.rfOder.value.quantity,
            productDetailId: this.productDetailFormSearch.id
          });
        }
      });
    this.checkQuantityOder(this.rfOder);
  }

  minusOne() {
    this.checkQuantity = false;
    this._productDetailService.findProductDetail(this.rfProductDetail?.value).subscribe(
      data => {
        this.productDetailFormSearch = data;
        if (this.rfOder.value.quantity > 0) {
          this.rfOder.value.quantity = Number(Number(this.rfOder.value.quantity) - 1);
          this.rfOder.setValue({
            userId: this.user?.id,
            quantity: this.rfOder.value.quantity,
            productDetailId: this.productDetailFormSearch.id
          });
        }
      });
    this.checkQuantityOder(this.rfOder);
  }

  checkQuantityOder: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const quantity = control.get('quantity').value;
    if (quantity <= 0 || quantity > this.productDetailResult?.quantity || quantity == null) {
      return {"checkQuantityOder": true};
    }
    return null;
  }
}
