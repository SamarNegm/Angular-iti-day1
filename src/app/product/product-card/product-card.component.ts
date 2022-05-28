import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('singleProductData')
  productData?: IProduct;
  @Output() productClicked = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
  }
  setProductDetails() {
    return this.productClicked.emit(this.productData);
  }
}
