import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguagesService {

  constructor() { }

  behaviourSubject = new BehaviorSubject<string>("English");


}
