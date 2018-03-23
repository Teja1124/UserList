import { NgModule } from '@angular/core';
import { SharedModule } from '../common/common.module';

import { AddUserDetailsComponent } from './add-user-details.component';
import { routing } from './add-user-details.routing';

@NgModule({
  declarations: [
    AddUserDetailsComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class AddUserDetailsModule { }
