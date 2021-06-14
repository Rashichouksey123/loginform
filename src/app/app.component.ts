import { Component } from '@angular/core';
import { InterectionService } from './interection.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginform';

  userObject :any ={  // user  component
     name:"",
     age:null
       
      };
      msg="";// user  component
      msg1="";// user  component
  
  constructor(private _interectionService:InterectionService ){}
  
  
  handleEvent(event:any):void // user  component
  {
   // alert(this.userObject.name +"    "+ this.userObject.age);
   this.userObject.msg=this.userObject.name;
   this.userObject.msg1=this.userObject.age;
  }
 

  onChangeEvent(event: any){ // user  component
    this.userObject.name=event.target.value;
  
  }
  onChangeEven(event: any){ // user  component
    this.userObject.age=event.target.value;
  
  }
  
  loginpage(){       // ligin page component
    this._interectionService.sandMassage("login the form"); 
  }
  
}
