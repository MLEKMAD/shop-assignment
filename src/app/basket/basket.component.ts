import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BasketService} from "../services/basket.service";
import {Book} from "../models/book.model";
import {BookInBasket} from "../models/basket.model";
import {Store} from "@ngrx/store";
import {appState} from "../store/app.state";
import {RemoveFromBasket} from "../store/actions/book.actions";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  booksInBasket$: Observable<Book[]> | undefined;

  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.store.select("book").subscribe(data => {
      console.log({data})

    })
  }

  removeBookFromBasket(id: number) : void {
    this.store.dispatch(new RemoveFromBasket(id))
  }
}
