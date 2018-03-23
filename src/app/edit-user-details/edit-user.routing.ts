import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from './edit-user.component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    {
      path: 'edituser/:id', component: EditUserComponent
    }
  ]);

