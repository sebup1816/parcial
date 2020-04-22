import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackService {
  

  constructor(private http: HttpClient) {}

  getAllFilms(){
    console.log("GET ALL FIMS");
    return this.http.get('swapi.py4e.com/api/films/');
  }


}
