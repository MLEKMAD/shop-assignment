import {Injectable} from "@angular/core";
import products from '../products.json'
import {Book} from "../models/book.model";


@Injectable(
  {providedIn: 'root',}
)
export class BookListService {

  constructor() {}

  getBooks(): Book[] {
    return [products
    ] as Book[];
  }
}
