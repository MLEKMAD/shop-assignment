import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Book } from '../models/book.model'
import {BookInBasket} from "../models/basket.model";
import {AddToBasket} from "../store/actions/book.actions";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]= [];
  private router: Router;

  constructor(private store: Store<appState>, router: Router) {
    this.router = router;

  }


  ngOnInit(): void {
    this.books = Book.getBooks;
  }

  addToCart(selectedBook: Book) : void {
    const newBookInBasket = {
      book: selectedBook
    } as BookInBasket;

    this.store.dispatch(new AddToBasket(newBookInBasket))
    console.log({newBookInBasket})
  }
  showInfo(book: Book): void {
    console.log({ book });
    this.router.navigate(["product-details"]);
    localStorage.setItem("currentBook", JSON.stringify(book))
  }
}
