import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { OilColorComponent } from './works/oil-color/oil-color.component';
import { WaterColorComponent } from './works/water-color/water-color.component';
import { OutlineComponent } from './works/outline/outline.component';
import { OtherWorksComponent } from './works/other-works/other-works.component';
import { ImageDetailComponent } from './works/oil-color/image-detail/image-detail.component';
import { ImageItemComponent } from './works/oil-color/image-item/image-item.component';
import { ImageDetailOtherComponent } from './works/other-works/image-detail-other/image-detail-other.component';
import { ImageItemOtherComponent } from './works/other-works/image-item-other/image-item-other.component';
import { ImageItemOutlineComponent } from './works/outline/image-item-outline/image-item-outline.component';
import { ImageDetailOutlineComponent } from './works/outline/image-detail-outline/image-detail-outline.component';
import { ImageItemWaterComponent } from './works/water-color/image-item-water/image-item-water.component';
import { ImageDetailWaterComponent } from './works/water-color/image-detail-water/image-detail-water.component';

//import { Fire Module } from '@angular/fire';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { getFirestorage, provideStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    OilColorComponent,
    WaterColorComponent,
    OutlineComponent,
    OtherWorksComponent,
    ImageDetailComponent,
    ImageItemComponent,
    ImageDetailComponent,
    ImageDetailOtherComponent,
    ImageItemOtherComponent,
    ImageItemOutlineComponent,
    ImageDetailOutlineComponent,
    ImageItemWaterComponent,
    ImageDetailWaterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    /* Firebase modules */
    //AngularFireAuthModule,
    //AngularFirestoreModule,
    //AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,


    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),



    /**////

   // provideFirebaseApp(() => initializeApp(environment.firebase )),
    ///provideFirestore(() => getFirestore()),

    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuthModule,
    //AngularFirestoreModule,



  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
