import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookInBasket } from '../models/basket.model';
import { Book } from '../models/book.model';
import { AddToBasket } from '../store/actions/book.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book : Book = new Book();
  router: Router;
  store: Store;
  constructor(book : Book, router: Router, store: Store) { 
    this.book = book
    this.router = router;
    this.store = store
  }

  ngOnInit(): void {
    this.book = JSON.parse(localStorage.getItem("currentBook") as string)
    console.log('book', this.book)
  }

  handleBack():void {
      this.router.navigate(["store"])
  }
  addToCart(selectedBook: Book) : void {
    const newBookInBasket = {
      book: selectedBook
    } as BookInBasket;

    this.store.dispatch(new AddToBasket(newBookInBasket))
    console.log({newBookInBasket})
  }

}
