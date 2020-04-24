import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';

import {BackService} from '../services/back.service';

import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users;

  UsernameInput: String='';
  passwordInput: String='';

  


  constructor(private UserService: UserServiceService, private router: Router) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers ();
  }


  verifyUser(UsernameInput,passwordInput){
      let auth = false;
      for (let i = 0; i < this.Users.length; i++) {
        if(UsernameInput == this.Users[i].username && passwordInput == this.Users[i].password){
          this.router.navigate (['index']);
          auth = true;
        }    
      }
      if(!auth)
        alert('Usuario o contraseña incorrecta')
    
  }

  users;

  /*constructor(private backService: BackService){
    //console.log("CONSTRUCTOR")
    this.getUsers();
  }
  
  getUsers(){
    //this.users=this.backService.getAllUsers();
  }*/

  ngOnInit(): void {
  }

}
