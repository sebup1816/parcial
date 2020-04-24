import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
<<<<<<< HEAD
import {BackService} from '../services/back.service';
=======
import { Router } from '@angular/router'

>>>>>>> a67906c6168f48450b0396fa09dc4e24fad6afea
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

  constructor(private UserService: UserServiceService, private router: Router) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers ();
  }
>>>>>>> a67906c6168f48450b0396fa09dc4e24fad6afea

  verifyUser(UsernameInput,passwordInput){
      let auth = false;
      for (let i = 0; i < this.Users.length; i++) {
        if(UsernameInput == this.Users[i].username && passwordInput == this.Users[i].password){
          this.router.navigate (['TweetComponent']);
          auth = true;
        }    
      }
      if(!auth)
        alert('Usuario o contraseña incorrecta')
    
  }

  users;

  constructor(private backService: BackService){
    //console.log("CONSTRUCTOR")
    this.getUsers();
  }
  
  getUsers(){
    //this.users=this.backService.getAllUsers();
  }

  ngOnInit(): void {
  }

}
