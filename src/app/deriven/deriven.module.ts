import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerivenComponentComponent } from './deriven-component/deriven-component.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DerivenComponentComponent
  ],
  exports: [
    DerivenComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DerivenModule { }
