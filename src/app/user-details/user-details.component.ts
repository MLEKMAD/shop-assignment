import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user : User = new User();
  router: Router;
  constructor(user : User, router: Router) { 
    this.user = user
    this.router = router;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser") as string)
    console.log('user', this.user)
  }

  handleBack():void {
      this.router.navigate(["store"])
  }
}
