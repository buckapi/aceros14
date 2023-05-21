import { Component ,AfterViewInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aceros';
  constructor(
 
    public script:ScriptService
  ){
  
  this.script.load(
    'jquery',
    'popper',
    'bootstrap',
    'wow',
    'counterup',
    'fancybox',
    'perfect-scrollbar',
    'slick',
    'particles',
    'particle-int',
    'custom'

         )
         .then(data => {
         })
         .catch(error => console.log(error));
  
  
  }
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  
  ngAfterViewInit(): void {}
}
