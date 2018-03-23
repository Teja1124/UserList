import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserDetailsComponent} from './add-user-details.component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    {
      path: 'adduser', component: AddUserDetailsComponent
    }
  ]);

