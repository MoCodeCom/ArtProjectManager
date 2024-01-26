import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';
import { collection, doc,getDocs, updateDoc} from 'firebase/firestore';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  /*---------------Subject Behavoir -------------*/
  subjectData = new BehaviorSubject<object[]>(null);
  subjectHomePersonal = new BehaviorSubject<File>(null);
  subjectImage = new BehaviorSubject<File>(null);
  subjectContent = new BehaviorSubject<{ar:string, en:string}>(null);

  /*----------------------------------------------*/
  constructor(
    private fs:Firestore,
    private http:HttpClient,
    private fbs : AngularFireStorage
    ) { }
  async getdata(){
    const listData:object[] = [];
    const collectionData = await getDocs(collection(this.fs, "home")).then(
      n => {n.forEach(
        ele => listData.push(ele.data())
      );

      this.subjectData.next(listData);
      }
    );
    /*just used to remove red line a restriction*/
    collectionData;
    return listData;

  }

  /********************** home personal service **********/
  update_home_personal(){
    this.subjectHomePersonal.subscribe(val =>{
      if(val === null){
        alert('No data exist!');
      }else{
        this.subjectHomePersonal.subscribe(val =>{
           const path = 'jasim_image_home.jpg';
           this.fbs.upload(path, val);
        })
      }
    });
  }
  /******************** home image service **************/
  update_home_img(){
    this.subjectImage.subscribe(val =>{
      if(val === null){
        alert('No data exist!');
      }else{
        this.subjectImage.subscribe(val =>{

           const path = 'work1_image_home.jpg';
           this.fbs.upload(path, val);
        })
      }
    });
  }

  /******************* home content service **************/
  async updateHomeContent(){
    /*
    const col = collection(this.fs,'home');
    const q = query(col, where("id","==",1));
    const snap = onSnapshot(q, (sn)=>{
      sn.docs.forEach(ele =>{
        console.log(ele)
      })
    });*/

    const data = doc(this.fs, 'home', '/XBdVN36oQN1Soahqkyum');
    this.subjectContent.subscribe(val =>{
      //console.log(val.ar);
      updateDoc(data,{id:1, content_ar:val.ar, content_en:val.en});
    })



  }
}
