import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
<<<<<<< HEAD
import { Router } from '@angular/router'

=======

import {BackService} from '../services/back.service';

import { Router } from '@angular/router'


>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users;

  UsernameInput: String='';
  passwordInput: String='';
<<<<<<< HEAD
=======

  

>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6

  constructor(private UserService: UserServiceService, private router: Router) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers ();
  }
<<<<<<< HEAD
=======

>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6

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

<<<<<<< HEAD
=======
  users;

  /*constructor(private backService: BackService){
    //console.log("CONSTRUCTOR")
    this.getUsers();
  }
>>>>>>> bcc6d7ccac56f3f9318ce353fd8afaeb98bdfcd6
  
  getUsers(){
    //this.users=this.backService.getAllUsers();
  }*/

  ngOnInit(): void {
  }

}
