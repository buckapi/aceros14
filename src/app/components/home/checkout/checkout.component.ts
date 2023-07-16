import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }

  ngOnInit(): void {
  }

}
