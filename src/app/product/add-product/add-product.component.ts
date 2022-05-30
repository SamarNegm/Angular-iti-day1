import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { IProduct } from './../iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: IProduct = { id: 0, title: '', description: '', image: '', price: 0, category: '', rating: { count: 0, rate: 0 } };
  productForm = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)

    }

  )

  get title() {
    return this.productForm.get('title') as FormControl;
  }
  get price() {
    return this.productForm.get('price') as FormControl;

  }
  get description() {
    return this.productForm.get('description') as FormControl;
  }
  get category() {
    return this.productForm.get('category') as FormControl;
  }
  get image() {
    return this.productForm.get('image') as FormControl;
  }
  add(data: any) {
    console.log(data);
  }
  constructor(private fb: FormBuilder, private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.productForm.patchValue({ sname: "mido", fname: "hamda", address: { city: 'cairo', street: "ramsis" } })
    this.productForm.setValue({ title: "testttt", price: "299", description: "some dumy data", category: "genral", image: "https://picsum.photos/200/300?random=19" })
  }
  onSubmit() {
    this.newProduct.title = this.productForm.value.title;
    this.newProduct.price = this.productForm.value.price;
    this.newProduct.description = this.productForm.value.description;
    this.newProduct.category = this.productForm.value.category;
    this.newProduct.image = this.productForm.value.image;
    this.newProduct.id = this.productService.getNextId();
    this.productService.addProductItem(this.newProduct);
    console.log(this.productForm.value);
    this.router.navigateByUrl('/home');
  }
}
