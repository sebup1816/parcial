import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {BackService} from '../services/back.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users;

  UsernameInput: String='';
  passwordInput: String='';
  

  verifyUser(UsernameInput,passwordInput){
    if(UsernameInput=="seb" && passwordInput=="123"){
      console.log("true");
    }else{
      console.log("false");
    }
    //this.verifyUser(UsernameInput,passwordInput);
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
