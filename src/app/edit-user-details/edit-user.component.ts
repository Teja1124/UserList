import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { editListService } from './edit-user.service';
import { UserDetails } from './../common/user-list.model';


@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  public user:UserDetails ;

  constructor (private router: Router,private routeParams: ActivatedRoute,private service:editListService){}

  ngOnInit(){
    this.routeParams.params.subscribe(params => {
      if(params) {
        this.service.getUserDetail(+params['id']).subscribe((result: UserDetails) => {
          console.log(JSON.stringify(result));
          this.user = result;
        }, (error: any) => {
        });
      }
    });
  }

  onFormUpdate(){
    this.service.updateUserDetails(this.user).subscribe((result: UserDetails) => {
      //console.log(JSON.stringify(this.user));
      console.table([this.user]);
      console.log("Updated Successfully");
    },(error: any) => {
    });
  }

  onGoBack(){
    this.router.navigate([`/userlist`]);
  }


}
