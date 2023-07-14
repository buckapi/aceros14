import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { RestService } from '@app/services/rest.service';
import { CATEGORIES } from '@app/services/categories.services';
import { Category } from '@app/interfaces/category';
import { ScriptService } from '@app/services/script.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
products:any=[];
categories:any;
  constructor(
    public restService:RestService,
    public yeoman:Yeoman,
    public script:ScriptService
  ) 
   
  { this.script.load(
    'popper',
    'bootstrap',
    'select',
    'wow',
    'counterup',
    'fancybox',
    'perfect-scrollbar',
    'slick',
    'particles',
    'particle-int',
    'custom'
         )
    this.categories=CATEGORIES
  }
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  view(id:any){
    this.yeoman.preview=this.yeoman.products[id];
  //  let preview=this.yeoman.products[id];
    // console.log("id: "+id+"preview name: ");
    // console.log(JSON.stringify(preview));
    this.setRoute('detail');
  }

// getProducts(){
//   this.restService.getAllProducts().subscribe(response=>{
//     this.products=[];
//     this.products=response;
//     this.yeoman.products=this.products;
//   });

// }

  ngOnInit(): void {
  }

}
