import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartpageRoutingModule } from './startpage-routing.module';
import { UserpageComponent } from './userpage/userpage.component';


@NgModule({
  declarations: [
    UserpageComponent
  ],
  imports: [
    CommonModule,
    StartpageRoutingModule
  ]
})
export class StartpageModule { }
