import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/User';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { UserService } from '../Services/Index';
import { Router } from '@angular/router';
@Component({
  selector: 'qk-products',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  constructor(private _userService: UserService, private router: Router) { }
  users: IUser[];
  ngOnInit() {
    this._userService.getUsers().subscribe(
      data => this.users = data);



  }
  editUser(user: IUser) {
    this.router.navigate(['/counter', user.UserId, user.UserName, user.EmailId, user.Role, user.status]);
  }
  deleteUser(user: IUser) {
    this.router.navigate(['/delete-user', user.UserId, user.UserName, user.EmailId, user.Role, user.status]);
  }
}
