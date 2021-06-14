import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegformComponent } from './regform.component';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'



@NgModule({
  declarations: [
    RegformComponent
  ],
  exports:[
    RegformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegformModule { }
