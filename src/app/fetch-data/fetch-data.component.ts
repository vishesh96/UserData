import { Component, NgModule } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../Services/Index';
import { IUser } from '../Models/Index';
@Component({
  templateUrl: 'fetch-data.component.html',
  styles: [`input.ng-invalid.ng-touched{border-left:5px solid red;}
              input.ng-valid{border-left:5px solid green;}
            `]
})
export class AddUserComponent {
  user: IUser;
  errorMsg: string;
  result: string;
  flag: boolean = false;
  ToggleButton: boolean = false;
  constructor(private _userService: UserService, private router: Router) { }
  addUser(userId: number, username: string, emailid: string, role: string, Status: string) {
    this.user = { UserId: userId, UserName: username, EmailId: emailid, Role: role, status: Status };
    this._userService.addUserinAPI(this.user).subscribe(
      resStatus => { this.result = resStatus, this.ToggleButton = true, this.flag = true },
      resError => this.errorMsg = resError, // code for error message
      () => console.log("Response Received")
    );
    this.router.navigate(['/']);
  }
  cancel() {
    this.router.navigate(['/']);
  }
}
