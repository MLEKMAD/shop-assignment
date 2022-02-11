import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule} from "@ngrx/store";
import {bookReducer} from "./store/reducers/book.reducer";

import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component'
import { UsersComponent } from './users/users.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Book } from './models/book.model';
import { UserDetailsComponent } from './user-details/user-details.component';
import { User } from './models/user.model';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BasketComponent,
    NavbarComponent,
    ContactComponent,
    UsersComponent,
    ProductDetailsComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({book: bookReducer} as ActionReducerMap<any,any> ),
  ],
  providers: [Book, User],
  bootstrap: [AppComponent]
})

export class AppModule { }
