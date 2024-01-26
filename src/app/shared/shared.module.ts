import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SectionHeaderComponent,
    SectionFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SectionHeaderComponent,
    SectionFooterComponent
  ]

})
export class SharedModule { }
