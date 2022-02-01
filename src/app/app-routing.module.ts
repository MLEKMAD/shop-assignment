import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {BasketComponent} from "./basket/basket.component";
import {ContactComponent} from "./contact/contact.component";
import {WelcomeComponent} from "./welcome/welcome.component";


const routes: Routes=[
  {path: '', component:WelcomeComponent},
  {path: 'store', component: BookListComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
