import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prodid?: number = 0;
  product?: IProduct;
  constructor(private activrout: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.activrout.params.subscribe(pram => {
      this.prodid = pram['id'];
      this.product = this.productService.getProductById(this.prodid);
      //console.log(this.userid);
    })
  }

}
