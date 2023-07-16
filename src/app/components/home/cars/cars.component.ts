import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

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
