import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {BasketComponent} from "./basket/basket.component";
import {ContactComponent} from "./contact/contact.component";
import { UsersComponent } from './users/users.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes=[
  {path: '', component:BookListComponent},
  {path: 'store', component: BookListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'users', component: UsersComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'product-details', component:ProductDetailsComponent},
  {path: 'user-details', component:UserDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
