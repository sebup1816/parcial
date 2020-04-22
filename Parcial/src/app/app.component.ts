import { Component } from '@angular/core';
import { BackService} from './services/back.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filmsList;
    constructor(private filmsServie: BackService){
      console.log("CONSTRUCTOR");
      this.getFilmsData;
    }

    getFilmsData(){
      console.log("GET FILMS DATA");
      this.filmsServie.getAllFilms;
    }

    

}
