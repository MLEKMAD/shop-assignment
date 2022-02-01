import {Book} from '../models/book.model'


export interface appState {
  readonly book: Book[];
}
