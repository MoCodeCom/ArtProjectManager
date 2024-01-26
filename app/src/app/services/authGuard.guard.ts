
import{
  CanActivate, Router,  UrlTree,
} from '@angular/router';
import {Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  constructor(
    private loginService:LoginService,
    private router:Router
    ){}
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.user.pipe(map(user =>{
      const isExist = localStorage.getItem('isLoging');
      if(isExist){
        return user;
      }
      return this.router.createUrlTree(['/login']);
    }))
  }

}
