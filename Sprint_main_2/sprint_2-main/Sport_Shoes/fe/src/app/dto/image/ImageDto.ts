export class ImageDto {
  private _productId?: number;
  private _colorId?: number;

  constructor(productId: number, colorId: number) {
    this._productId = productId;
    this._colorId = colorId;
  }

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get colorId(): number {
    return this._colorId;
  }

  set colorId(value: number) {
    this._colorId = value;
  }
}
