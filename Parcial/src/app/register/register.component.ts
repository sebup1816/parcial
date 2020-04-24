import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users;
  passwordInput: String='';
  usernameInput: String='';

  constructor(private UserService: UserServiceService, private router: Router) { 
    this.getData();
  }

  getData(){
    this.Users=this.UserService.getAllUsers ();
  }

  addUser(){
    this.UserService.addUser(this.usernameInput,this.passwordInput);
    console.log(this.UserService.getAllUsers());
  }

  ngOnInit(): void {
  }

}
