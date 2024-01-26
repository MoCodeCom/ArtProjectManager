import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLanguagesService } from '../../services/change-languages.service';
import { SeedsService } from '../../services/seeds.service';
import { IItem } from '../../shared/models/IItem';

@Component({
  selector: 'app-water-color',
  templateUrl: './water-color.component.html',
  styleUrl: './water-color.component.css'
})
export class WaterColorComponent implements OnInit{
  language:string = "";
  items:IItem[] = [];
  constructor(
    private router:Router,
    private serivceLanguage:ChangeLanguagesService,
    private seedsService:SeedsService,
    ) {
      this.serivceLanguage.behaviourSubject.subscribe((val)=>{
        this.language = val;
      });
  }

  ngOnInit(): void {
    this.serivceLanguage.behaviourSubject.subscribe((val)=>{
      this.language = val;
    });
    this.loadSeedData();
  }

  back(){
    this.router.navigate(['/','works']);
  }

  loadSeedData(){
    this.items = this.seedsService.itemList();
  }
}
