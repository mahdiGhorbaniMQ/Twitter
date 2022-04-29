import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor() { }

  showMenu!:boolean

  checkScreen(){
    if(window.innerWidth>700) this.showMenu = true
    else this.showMenu = false
  }
}
