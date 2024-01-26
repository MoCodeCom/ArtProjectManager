import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLanguagesService } from '../services/change-languages.service';
import { ApiService } from '../services/api.service';
import { DisabledownloadimagesService } from '../services/disabledownloadimages.service';
import { HomeApiService } from '../services/home-api.service';





//import { collection } from 'firebase/firestore';
//import * as firebase from 'firebase/app';
//import { AngularFirestore } from 'angularfire2/firestore';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  @ViewChild('uploadPersonRef') uploadPersonChild:HTMLElement;

  dataStyle :{url:string, id:number, name:string, size:string, class:string};
  language:string="";
  urlHomeImage:string ="";
  valueDb:object;

  /*-----------------------*/
  personalImageUrl:string = '';
  homeImageUrl:string = '';
  content_ar:string = '';
  content_en:string = '';
  /*-----------------------*/

  constructor(private router:Router,
              private serviceLanguage:ChangeLanguagesService,
              private apiService:ApiService,
              private disabledownloadimage:DisabledownloadimagesService,
              private homeApi:HomeApiService,
              ) {

                this.serviceLanguage.behaviourSubject.subscribe((val)=>{
                  this.language= val;
                });
  }
  ngOnInit(): void {
    this.serviceLanguage.behaviourSubject.subscribe((val)=>{
                  this.language= val;
                });
    this.disabledownloadimage.disableDownloadImages();
    this.homeApi.getdata();
    this.getDataFromService();

    console.log(this.personalImageUrl);

  }


  workBtnHome(){
    this.router.navigate(['/','works']);
  }

  async getDataFromService(){
    await this.homeApi.subjectData.subscribe(
      n => {
        /*------ Jasim Image--------*/
        const personal_val = n[0];
        this.personalImageUrl = personal_val['url'];


        /*-------- Image -------------*/
        const image_val = n[1];
        this.homeImageUrl = image_val['url'];

        /*-------- content ar ---------*/
        const content_ar_val = n[2];
        this.content_ar = content_ar_val["content_ar"];

         /*-------- content ng ---------*/

         const content_en_val= n[2];
        this.content_en = content_en_val['content_en'];

      }
    );
  }
  //********************************* personal image ********* */
  uploadPersonalImage(event=null){
    const file:File = event.target.files[0];
    this.homeApi.subjectHomePersonal.next(file);

  }

  updatePsersonalImage(){
    this.homeApi.update_home_personal();
  }

  //********************************* home image ************* */

  uploadImage(event){
    const file:File = event.target.files[0];
    this.homeApi.subjectImage.next(file);

  }

  updateImage(){
    this.homeApi.update_home_img();
  }

  //****************************** Content ******************** */

  onSubmit(data){
    //console.log(data.value);
    this.homeApi.subjectContent.next(data.value);
    this.homeApi.updateHomeContent();
  }






}
