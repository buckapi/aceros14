import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FirstComponent } from './first/first.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    FirstComponent,
    ContactComponent
  ],
  imports: [
    NgxUsefulSwiperModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
