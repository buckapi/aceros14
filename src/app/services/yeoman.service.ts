import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  isLoaded:Boolean=false;
  virtualRoute:string="first";
  constructor() { }
}