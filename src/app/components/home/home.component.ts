import { Component, AfterViewInit ,OnInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    public script:ScriptService,
    public yeoman:Yeoman
  ){
    this.script.load(

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
            this.yeoman.isLoaded=true;
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

loadScripts(){
  this.script.load(

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
          this.yeoman.isLoaded=true;
        })
        .catch(error => console.log(error));  
}

  ngAfterViewInit(): void {
    if(this.yeoman.isLoaded){
      console.log("se vuleven a cargar");
      this.loadScripts();
    }
  } 

}
