import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  
 
 title='localStorage';

  myid!:any;
  myform!:any;
  inputbox!:"";

 // name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.email ]),
 // Password:new FormControl('',[Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{4,10}'),Validators.required])
 
 //
 get f()
 {
 return this.myform.controls;
}
//submit(){
  //console.log(this.form.value)
//}


  constructor() { }

  ngOnInit(): void {

    this.myform = new FormGroup({
   name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.email ]),
   Password:new FormControl('',[Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{4,10}'),Validators.required])
   })

 
    
 }
 

 changename(data:any){
    this.inputbox = data.name;
  
 }
   
  Login(){
   const data = localStorage.getItem("name");
    console.log(this.inputbox)
   if(data?.match(this.inputbox)){
   // this.myid= "Login Failed Plz register";
    confirm("data match")
    document.write(`<h1>Welcome To Homepage<h1/>`)
   }else{
    alert("plz register first")
   }
 }

  submit(myform:any){
  localStorage.setItem("name",JSON.stringify(myform.name));
  localStorage.setItem("password",JSON.stringify(myform.Password));
  document.write(`you are registred plz back to login Or refresh the page`)
 }

 
  removeItem(){
    localStorage.clear();
 }
 //removeallItem(){
   // localStorage.clear();
  //}

}
