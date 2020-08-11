import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './counter/counter.component';
import { AddUserComponent } from './fetch-data/fetch-data.component';
import { UserService } from './Services/Index';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EditUserComponent,
    AddUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter/:userId/:userName/:emailId/:role/:status', component: EditUserComponent },
      { path: 'delete-user/:userId/:userName/:emailId/:role/:status', component: DeleteUserComponent },
      { path: 'fetch-data', component: AddUserComponent },
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
