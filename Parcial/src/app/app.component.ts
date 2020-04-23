import { Component } from '@angular/core';
import { SwapiFilmsService } from './services/swapi-films.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filmsList;
    
  constructor(private filmsService: SwapiFilmsService){
    console.log("CONSTRUCTOR")
    this.getFilmsData;
  }
   
  getFilmsData(){
    console.log("GET DATA")
    this.filmsList= this.filmsService.getAllFilms();
  }

}
