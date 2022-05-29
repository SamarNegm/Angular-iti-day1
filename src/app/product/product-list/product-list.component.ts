import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: any;
  productClicked?: IProduct;
  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {

    this.allProducts = this.productService.getAllProducts();
  }

  printProd(e: any): void {
    console.log(e);
    this.productClicked = e.productData;
  }
  print() {
    console.log("hi from user list")
  }
}
