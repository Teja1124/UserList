import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';

import { routes } from './app.routing';

import { UserListModule } from './user-details/user-list.module';
import { EditUserModule } from './edit-user-details/edit-user.module';
import { AddUserDetailsModule } from './add-user-details/add-user-details.module';


@NgModule({
  imports: [
    BrowserModule,
    UserListModule,
    EditUserModule,
    AddUserDetailsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

