import {Book} from '../../models/book.model'

import * as StoreActions from '../actions/book.actions'

const initialState : Book[] = []

export function bookReducer(state: Book[] = initialState, action: StoreActions.Actions){
  switch (action.type){
    case "[BOOK] Add":
      console.log("hher",[...state, action.payload])
      return [...state, action.payload];
    case "[BOOK] Remove":
      state.splice(action.payload, 1)
      return state
    default:
      return state;
  }

}
