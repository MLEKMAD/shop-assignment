import products from "../products.json";

export class Book {
  id: number
  name: string
  description: string
  price: number
  author: string
  type: string
  img: string
  category: string

  constructor() {
    this.id = 0;
    this.name = ''
    this.description = ''
    this.price = 0
    this.author = ''
    this.type = ''
    this.img = ''
    this.category = ''
  }

  static get getBooks(): Book[] {
    return [...products
    ] as Book[];
}
}
