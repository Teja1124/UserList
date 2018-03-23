import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'userlist', pathMatch: 'full'},
  {path: '**', redirectTo: 'userlist', pathMatch: 'full'}

];
export const routing = RouterModule.forRoot(routes);
