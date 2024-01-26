import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from '../../../shared/models/IItem';

@Component({
  selector: 'app-image-item-water',
  templateUrl: './image-item-water.component.html',
  styleUrl: './image-item-water.component.css'
})
export class ImageItemWaterComponent {
  constructor(private router:Router){}
@Input()workItem?:IItem;


goToView(){
  this.router.navigate(['/works/oilworks/',this.workItem]);
}
}
