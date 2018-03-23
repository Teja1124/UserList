import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userListService } from './user-list.service';
import { UserListModel } from './../common/user-list.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [userListService]
})
export class UserListComponent implements OnInit {

  data:UserListModel;

  constructor(private service:userListService,private router:Router) {}

    ngOnInit() {
      this.service.getUserDetails().subscribe((result: UserListModel) => {
        //console.log(JSON.stringify(result));
      this.data = result;
    }, (error: any) => {

    });
  }

  onEditUser(id:number) {
    this.router.navigate([`/edituser/${id}`]);
  }

  onAddUser(){
    this.router.navigate(['/adduser']);
  }

}


