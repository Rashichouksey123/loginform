import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deriven-component',
  templateUrl: './deriven-component.component.html',
  styleUrls: ['./deriven-component.component.css']
})
export class DerivenComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myName="rashi";
  onSubmit(value:any){
     console.log(value)
   }

}
