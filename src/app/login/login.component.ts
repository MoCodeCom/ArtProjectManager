
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ILogin } from '../shared/models/ILogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loading=true;
emailSignIn = '';
errorText = null;
loginAllowanceData:boolean = false;


  constructor(private loginService:LoginService,
              private router:Router,
              private loginData:LoginService){}



  onLogin(data:NgForm){
    if(!data.valid){
      return;
    }

    const email_login = data.value.email;
    const password_login = data.value.passwrod as string;

    let othObs:Observable<ILogin> = null;

    othObs = this.loginService.LoginData(email_login, password_login);

    othObs.subscribe(

      (n)=>{

        this.loginAllowanceData = true;
        this.router.navigate(['/','']);
        this.loginData.user.next(true);
        localStorage.setItem('isLoging', JSON.stringify(n));

        this.loginService.Autologin();
      },
      (err)=>{
        console.log(err);
      }
    );

    data.reset();
  }




}
