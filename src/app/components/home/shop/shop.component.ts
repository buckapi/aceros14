import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  view(id:any){
   let preview=this.yeoman.products[id];
    console.log("id: "+id+"preview name: ");
    console.log(JSON.stringify(preview));
    this.setRoute('detail');
  }
  ngOnInit(): void {
  }

}
