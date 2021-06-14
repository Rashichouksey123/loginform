import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Userinterface {
  name:any;
  age:any;
  id:any;
  userobj:any;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:Userinterface;

  @Output() userEvent: EventEmitter<Userinterface>;

  constructor() {
  
    this.userEvent= new EventEmitter<Userinterface>();

    this.user ={} as Userinterface;
   }
 
  ngOnInit(): void {
  }
 sendUserEvent() : void
 {
   this.userEvent.emit(this.user);
 }  

}
