import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap, switchMap } from "rxjs/operators";
//import { JwtHelperService } from "@auth0/angular-jwt";

export interface LoginForm {
  email: string;
  password: string;
};

export const JWT_NAME = 'blog-token';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient,) { }

  login(loginForm: LoginForm) {  

    return this.http.post<any>('/api/users/login', {email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      })
    )
  }
}
