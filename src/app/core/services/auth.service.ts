import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get userInfo(){
    return{
      name:"mahdi",
      family:"ghorbani",
      image:"../../../../../assets/profile.jpg"
    }
  }
}
