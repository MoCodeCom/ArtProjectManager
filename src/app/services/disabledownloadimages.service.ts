import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisabledownloadimagesService {

  constructor() { }

  disableDownloadImages(){
    document.querySelectorAll('img').forEach(value => {
      value.oncontextmenu = (e)=>{
        e.preventDefault();
      }
    });
  }
}
