import users from "../users.json";
import { Company } from "./company.model";


export class User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  company: Company


  constructor() {
    this.id = 0;
    this.name = ''
    this.username = ''
    this.email = " "
    this.phone = ''
    this.company = new Company
  }

  static get getUsers(): User[] {
    return [...users
    ] as User[];
}
}
