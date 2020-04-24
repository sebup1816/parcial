import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users;

  UsernameInput: String='';
  passwordInput: String='';
  constructor(private UserService: UserServiceService) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers;
  }

  verifyUser(UsernameInput,passwordInput){
    if(UsernameInput=="seb" && passwordInput=="123"){
      console.log("true");
    }else{
      console.log("false");
    }
    //this.verifyUser(UsernameInput,passwordInput);
  }

  ngOnInit(): void {
  }

}
