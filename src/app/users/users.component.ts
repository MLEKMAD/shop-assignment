import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []
  router: Router

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.users = User.getUsers;
  }

  showInfo(user: User): void {
    console.log({ user });
    this.router.navigate(["user-details"]);
    localStorage.setItem("currentUser", JSON.stringify(user))
  }

}
