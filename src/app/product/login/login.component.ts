import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ILogin } from '../ilogin';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: ILogin = { username: 'samar', password: '' }
  constructor() { }
  login(userdata: ILogin) {
    console.log(userdata)
  }
  login2() {
    console.log(this.user)
  }
  ngOnInit(): void {
  }
}
