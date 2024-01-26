import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../../shared/models/IItem';
import { Router } from '@angular/router';
import { DisabledownloadimagesService } from '../../../services/disabledownloadimages.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrl: './image-item.component.css'
})
export class ImageItemComponent implements OnInit{
  constructor(
    private router:Router,
    private disabledownloadimage:DisabledownloadimagesService
    ){}
  ngOnInit(): void {
    this.disabledownloadimage.disableDownloadImages();
  }
@Input()workItem?:IItem;


goToView(){
  this.router.navigate(['/works/oilworks/',this.workItem]);
}


}
