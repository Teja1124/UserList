import { NgModule } from '@angular/core';
import { SharedModule } from '../common/common.module';

import { routing } from './user-list.routing';

import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule,
    routing
  ]
})
export class UserListModule {

}
