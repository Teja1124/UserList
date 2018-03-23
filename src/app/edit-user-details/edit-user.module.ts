import { NgModule } from '@angular/core';
import { SharedModule } from '../common/common.module';

import { routing } from './edit-user.routing';

import { EditUserComponent } from './edit-user.component';
import { editListService } from './edit-user.service';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [editListService],
  bootstrap: [],
  exports:[]
})
export class EditUserModule { }
