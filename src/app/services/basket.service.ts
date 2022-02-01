import {delay, of, tap} from "rxjs";
import products from "../products.json";
import {Injectable} from "@angular/core";

export interface product{
  name: string
  price: number
  img: string
  author: string
  inCart: boolean
}

@Injectable(
  {providedIn: 'root',}
)
export class BasketService{


  getBasket(active?: boolean) {
    return of([
      ...products
        .map((product: any) => ({ ...product }))
        .filter((product: { inCart: boolean; }) => active === undefined ?
          true : product.inCart === active )
    ]).pipe(
      tap(() => console.log('Fetching data started')),
      delay(1000),
      tap(() => console.log('Fetching data finished')),
    );
  }
}
