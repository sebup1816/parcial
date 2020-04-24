import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
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
          this.router.navigate (['TweetComponent']);
          auth = true;
        }    
      }
      if(!auth)
        alert('Usuario o contraseña incorrecta')
    
  }

  ngOnInit(): void {
  }

}
