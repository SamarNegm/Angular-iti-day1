import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './product/login/login.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addUser', component: AddUserComponent },
  {
    path: 'productDetails/:id', component: ProductDetailComponent,

  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
