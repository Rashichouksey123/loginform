import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveComponent
  ],
  exports: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ReactiveModule { }
