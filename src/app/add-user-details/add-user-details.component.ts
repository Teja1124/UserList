import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.css']
})
export class AddUserDetailsComponent implements OnInit {

  constructor (private router: Router){}

  ngOnInit() {
  }

  onFormSave(){

  }

  onGoBack(){
    this.router.navigate([`/userlist`]);
  }

}
