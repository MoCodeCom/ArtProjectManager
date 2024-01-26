import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILogin } from '../shared/models/ILogin';
import { HttpClient } from '@angular/common/http';
import { userToken } from '../shared/models/userToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new BehaviorSubject<boolean>(false);
  UserToken = userToken;
  constructor(private http:HttpClient) {}

  LoginData(email:string, password:string){
    return this.http.post<ILogin>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAx04gJz_2kmf9wjlzW2uIkNe869Ru6Rgg',
    {
       email:email,
       password:password,
       returnSecureToken:true
    })
    }

    LogoutData(){
      this.user.next(false);
      localStorage.removeItem('isLoging');
    }

    Autologin(){

      const local = JSON.parse(localStorage.getItem('isLoging'));
      if(local){
        this.user.next(true);
      }
    }
}
