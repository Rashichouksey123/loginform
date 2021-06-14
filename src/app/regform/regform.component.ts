import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  loginForm: any;
 
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
   ) { }
   

   ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      map(token => this.router.navigate(['admin']))
    ).subscribe()
    
 

}
}

