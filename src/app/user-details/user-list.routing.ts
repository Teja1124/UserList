import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    {
      path: 'userlist', component: UserListComponent
    }
  ]);
