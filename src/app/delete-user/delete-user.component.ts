import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/Index';
import { IUser } from '../Models/Index';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'delete-user.component.html'
})
export class DeleteUserComponent implements OnInit {
  user: IUser;
  errorMsg: string;
  result: string;
  userid: number;
  username: string;
  emailid: string;
  roletype: string;
  status: string;
  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    console.log("Delete reached")
    this.userid = this.route.snapshot.params['userId'];
    this.username = this.route.snapshot.params['userName'];
    this.emailid = this.route.snapshot.params['emailId'];
    this.roletype = this.route.snapshot.params['role'];
    this.status = this.route.snapshot.params['status'];
    this.user = { UserId: this.userid, UserName: this.username, EmailId: this.emailid, Role: this.roletype, status: this.status };
  }
  yesDelete() {
    this.user = { UserId: this.userid, UserName: this.username, EmailId: this.emailid, Role: this.roletype, status: this.status };
    this._userService.deleteUserinAPI(this.user).subscribe(
      resStatus => this.result = resStatus,
      resError => this.errorMsg = resError,
      () => console.log("Response Received")
    );
    this.router.navigate(['/']);
  }
  noDelete() {
    this.router.navigate(['/']);
  }
}
