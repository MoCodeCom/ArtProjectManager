import { Component } from '@angular/core';
import { IItem } from '../../../shared/models/IItem';
import { SeedsService } from '../../../services/seeds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeLanguagesService } from '../../../services/change-languages.service';

@Component({
  selector: 'app-image-detail-water',
  templateUrl: './image-detail-water.component.html',
  styleUrl: './image-detail-water.component.css'
})
export class ImageDetailWaterComponent {
  language:string= "";
  itemShow:IItem;
  constructor(
    private seedService:SeedsService,
    private activeRouter:ActivatedRoute,
    private languageService:ChangeLanguagesService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadItem();
    this.languageService.behaviourSubject.subscribe((val) =>{
      this.language = val;
    })
  }



  loadItem(){
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if(id) this.itemShow = this.seedService.getItem(+id);
  }

  back(){
    this.router.navigate(['/works','waterworks']);

  }
}
