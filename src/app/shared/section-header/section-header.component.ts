import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Component,  ViewChild } from '@angular/core';
import { ChangeLanguagesService } from '../../services/change-languages.service';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent implements OnInit, OnDestroy{

  engLanguage:string[] = ["Home","Works","Blog","About","Login","Logout"]
  arbLanguage:string[] = ["الرئيسية","الاعمال","مدونة","عن الفنان","تسجيل","خروج"];
  nav:string[] = [];
  langBtn = "English";
  ListClass:string = "slideDivDefault";
  isAuth:boolean=false;
  private subscribeAuth:Subscription;


  @ViewChild('slideRef')viewSlide:ElementRef;

  constructor(private serviceLanguage:ChangeLanguagesService,
              private loginDataService:LoginService
              ) {
    this.nav = this.arbLanguage;
  }


  ngOnDestroy(): void {
    this.subscribeAuth.unsubscribe();
  }
  ngOnInit(): void {
    this.subscribeAuth = this.loginDataService.user.subscribe(user =>{
      this.isAuth = user;

    },
    ()=>{
      //console.log(err);
    }
    )
  }


  ChangLanguage(){
    if(this.langBtn == "English"){
      this.langBtn = "Arabic"
      this.nav = [];
      this.nav = this.engLanguage;
      this.serviceLanguage.behaviourSubject.next("Arabic");
    }else{
      this.langBtn = "English"
      this.nav = [];
      this.nav = this.arbLanguage;
      this.serviceLanguage.behaviourSubject.next("English");
    }

  }

  SlideList(){
    const val = this.viewSlide.nativeElement;
    val.style.visibility = 'visible';

  }

  HideList(){

    const val = this.viewSlide.nativeElement;
    val.style.visibility = 'hidden';

  }

  logoutData(){
    this.loginDataService.LogoutData();
  }



}
