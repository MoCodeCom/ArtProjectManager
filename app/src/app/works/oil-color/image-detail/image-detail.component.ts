import { Component, OnInit } from '@angular/core';
import { IItem } from '../../../shared/models/IItem';
import { SeedsService } from '../../../services/seeds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeLanguagesService } from '../../../services/change-languages.service';
import { ApiService } from '../../../services/api.service';
import { DisabledownloadimagesService } from '../../../services/disabledownloadimages.service';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.css'
})
export class ImageDetailComponent implements OnInit{
  language:string= "";
  itemShow:IItem = {id:0,name:'', url:'', size:'20', class:'any', };
  spinnerEle = false;

  constructor(
    private seedService:SeedsService,
    private activeRouter:ActivatedRoute,
    private languageService:ChangeLanguagesService,
    private router:Router,
    private apiService:ApiService,
    private disabledownloadimage:DisabledownloadimagesService
  ) {}

  ngOnInit(): void {
    this.loadItem();
    this.languageService.behaviourSubject.subscribe((val) =>{
      this.language = val;
    });

    this.disabledownloadimage.disableDownloadImages();
  }



  async loadItem(){
    this.spinnerEle = true;
    const id = this.activeRouter.snapshot.paramMap.get('id');
    //if(id) this.itemShow = this.seedService.getItem(+id);
    await this.apiService.getDataById(id);

    this.apiService.subjectWorkById.subscribe(val =>{
      if(val != null)this.itemShow = val[0];

    });

    this.spinnerEle = false;

  }

  back(){
    this.router.navigate(['/works','oilworks']);

  }
}
