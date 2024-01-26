import { IItem } from "../shared/models/IItem";



export class data{
  public itemList():IItem[]{

    return  [
      {
        id : 0,
        url:'../../assets/images/oil_works.jpg',
        name:'imgae 1',
        size:'20',
        class:'oil'
      },
      {
        id : 1,
        url:'../../assets/images/oil_works.jpg',
        name:'image 2',
        size:'20',
        class:'water'
      },
      {
        id : 2,
        url:'../../assets/images/oil_works.jpg',
        name:'image 3',
        size:'20',
        class:'oil'
      },
      {
        id : 3,
        url:'../../assets/images/oil_works.jpg',
        name:'image 4',
        size:'20',
        class:'oil'
      }
    ];
  }
}
