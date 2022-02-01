import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import {Book} from '../../models/book.model'
import {BookInBasket} from "../../models/basket.model";



export const ADD_TO_BASKET = '[BOOK] Add'
export const REMOVE_FROM_BASKET = '[BOOK] Remove'

export class AddToBasket implements Action {
  readonly type =  ADD_TO_BASKET;

  constructor(public payload: BookInBasket) {}
}

export class RemoveFromBasket implements Action {
  readonly type =  REMOVE_FROM_BASKET;

  constructor(public payload: number) {}
}


export type Actions = AddToBasket | RemoveFromBasket
