import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { OilColorComponent } from './works/oil-color/oil-color.component';
import { WaterColorComponent } from './works/water-color/water-color.component';
import { OutlineComponent } from './works/outline/outline.component';
import { OtherWorksComponent } from './works/other-works/other-works.component';
import { ImageDetailComponent } from './works/oil-color/image-detail/image-detail.component';
import { ImageDetailWaterComponent } from './works/water-color/image-detail-water/image-detail-water.component';
import { ImageDetailOutlineComponent } from './works/outline/image-detail-outline/image-detail-outline.component';
import { ImageDetailOtherComponent } from './works/other-works/image-detail-other/image-detail-other.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/authGuard.guard';


const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'works', component:WorksComponent, canActivate:[AuthGuard]},

  {path:'works/oilworks',component:OilColorComponent, canActivate:[AuthGuard]},
  {path:'works/oilworks/:id',component:ImageDetailComponent, canActivate:[AuthGuard]},

  {path:'works/waterworks',component:WaterColorComponent, canActivate:[AuthGuard]},
  {path: 'works/waterworks/:id', component:ImageDetailWaterComponent, canActivate:[AuthGuard]},


  {path:'works/outlineworks', component:OutlineComponent, canActivate:[AuthGuard]},
  {path: 'works/outlineworks/:id', component:ImageDetailOutlineComponent, canActivate:[AuthGuard]},

  {path:'works/otherworks',component:OtherWorksComponent, canActivate:[AuthGuard]},
  {path: 'works/otherworks/:id', component:ImageDetailOtherComponent, canActivate:[AuthGuard]},



  {path:'blog', component:BlogComponent, canActivate:[AuthGuard]},
  {path:'about', component:AboutComponent, canActivate:[AuthGuard]},

  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
