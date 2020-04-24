import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  ALL_USERSDB: User[]=[
    {
      idUser:1,
      username:"seb",
      password:"123",
    },
    {
      idUser:2,
      username:"jifor",
      password:"ok",
    }
  ]

  ALL_USERS=this.ALL_USERSDB;

  constructor() { }

  getAllUsers(){
    return this.ALL_USERS;
  }

  addUser(username,password){
    let id=Math.floor(Math.random() * (100 - 10 + 1)) + 0;
    this.ALL_USERS.push({
      idUser:id,
      username:username,
      password:password,
    });
  }

  deleteAccount(username){
    for (let i = 0; i < this.ALL_USERS.length; i++) {
      if(username == this.ALL_USERS[i].username){
        delete this.ALL_USERS[i];
      }    
    }
  }
}
