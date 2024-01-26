import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BehaviorSubject} from 'rxjs';
import { IItem } from '../shared/models/IItem';





@Injectable({
  providedIn: 'root'
})
export class ApiService {
  courseId:string="";

  subjectWork = new BehaviorSubject<IItem[]>(null);
  subjectWorkById = new BehaviorSubject<IItem[]>(null);
  constructor(private fb:Firestore) {

   }

  async getData(imageClass:string){

    const worksList:IItem[] = [];
    //const getcollection  = collection(this.fb, "works");
    const qureies = query(collection(this.fb, "works"), where("class","==",imageClass));

    const q = getDocs(qureies);
    q.then(val =>{
      val.forEach((element) => {
        worksList.push(element.data() as IItem);
        this.subjectWork = new BehaviorSubject<IItem[]>(worksList);
      });

    })

    return await q;
  }

  async getDataById( Id:string){

    const worksList:IItem[]=[];
    //const getcollection  = collection(this.fb, "works");
    const qureies = query(collection(this.fb, "works"), where("id","==",+Id));

    const q = getDocs(qureies);
    q.then(val =>{


      val.forEach((element) => {
        //console.log(element.data());
        worksList.push(element.data() as IItem);
        //console.log(worksList);
        this.subjectWorkById = new BehaviorSubject<IItem[]>(worksList);
      });

    })
    return q;
  }

  async backPageDetail(){
    //this.subjectWorkById = await new BehaviorSubject<IItem[]>(null);
  }



}
