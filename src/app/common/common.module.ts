import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],

})
export class SharedModule {}
