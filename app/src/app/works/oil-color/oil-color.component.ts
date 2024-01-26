import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLanguagesService } from '../../services/change-languages.service';
import { IItem } from '../../shared/models/IItem';
import { SeedsService } from '../../services/seeds.service';
import { ApiService } from '../../services/api.service';
import { DisabledownloadimagesService } from '../../services/disabledownloadimages.service';


@Component({
  selector: 'app-oil-color',
  templateUrl: './oil-color.component.html',
  styleUrl: './oil-color.component.css'
})
export class OilColorComponent implements OnInit{
  language:string = "";
  items:IItem[] = [];
  spinnerEle = false;


  constructor(
    private router:Router,
    private serivceLanguage:ChangeLanguagesService,
    private seedsService:SeedsService,
    private apiService:ApiService,
    private disabledownloadimage:DisabledownloadimagesService,
    ) {
      this.serivceLanguage.behaviourSubject.subscribe((val)=>{
        this.language = val;
      });
  }
  ngOnInit(): void {
    this.serivceLanguage.behaviourSubject.subscribe((val)=>{
      this.language = val;
    });
    this.loadOilImages();
    this.disabledownloadimage.disableDownloadImages();
  }

  back(){
    this.router.navigate(['/','works']);
  }

  loadSeedData(){
    this.items = this.seedsService.itemList();
  }

  async loadOilImages(){
    this.spinnerEle = true;
    await this.apiService.getData("water");
    await this.apiService.subjectWork.subscribe(val =>{
      this.items = val;
    });
    this.spinnerEle = false;
  }

  Add(){

  }
}
