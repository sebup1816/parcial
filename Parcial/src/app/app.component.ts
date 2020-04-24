import { Component } from '@angular/core';
import { SwapiFilmsService } from './services/swapi-films.service';
import {BackService} from './services/back.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  users: [];

  constructor(private backService: BackService){
    console.log("CONSTRUCTOR")
    this.users=[];
    this.getUsers();
  }
  
  getUsers(){
    console.log('get users');
    this.backService.getAllUsers().subscribe(
      (data) =>{
        console.log("data:",data);
        this.users=data['data'];
      }
    );
    console.log("users:",this.users);
  }



}
