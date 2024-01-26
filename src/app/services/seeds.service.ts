import { Injectable } from '@angular/core';
import { IItem } from '../shared/models/IItem';


@Injectable({
  providedIn: 'root'
})
export class SeedsService {

  constructor() { }
  public itemList():IItem[]{

    return  [
      {
        id : 0,
        url:'../../../assets/images/oil_works.JPG',
        name:'imgae 1',
        size:'20',
        class:'oil'
      },
      {
        id : 1,
        url:'../../../assets/images/other_works.JPG',
        name:'image 2',
        size:'20',
        class:'oil'
      },
      {
        id : 2,
        url:'../../../assets/images/IMG_6916.JPG',
        name:'image 3',
        size:'20',
        class:'oil'
      },
      {
        id : 3,
        url:'../../../assets/images/wc_works.JPG',
        name:'image 4',
        size:'20',
        class:'oil'
      }
    ];
  }

  public getItem(id:number) {
    let itemfound:IItem;
    for(const i of this.itemList()){
      if(i.id === +id){
        itemfound = i;
        break;
      }
    }

    return itemfound;

  }
}
