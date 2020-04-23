import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  ALL_USERS: User[]=[
    {
      idUser:1,
      username:"seb",
      password:"123",
    },
    {
      idUser:2,
      username:"jifor",
      password:"gay",
    }
  ]

  
  constructor() { }
  getAllUsers(){
    return this.ALL_USERS;
  }

  findUser(username,password){
    if(username=="seb" && password=="123"){
      return true;
    }
  }

}
