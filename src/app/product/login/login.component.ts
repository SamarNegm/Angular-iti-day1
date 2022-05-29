import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IexUser } from 'src/app/user/iex-user';
import { UsersService } from 'src/app/user/user.service';
import { ILogin } from '../ilogin';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: ILogin = { username: 'jimmie_k', password: 'klein*#%*', status: 'initial' };
  alluser: IexUser[] = [];
  loginFaild = false;
  constructor(private userService: UsersService, private router: Router) { }

  login(userdata: ILogin) {
    console.log(userdata)
  }
  login2() {
    console.log(this.user, "login2")
    this.userService.getExUser().subscribe(x => {
      this.alluser = x;
      const res = this.alluser.find(user => user.username == this.user.username && user.password == this.user.password);
      console.log(res, "result");
      if (res != undefined) {

        this.loginFaild = false;
        this.router.navigateByUrl('/home');
      }
      else {
        this.loginFaild = true;
      }

    })


  }
  ngOnInit(): void {
  }
}
