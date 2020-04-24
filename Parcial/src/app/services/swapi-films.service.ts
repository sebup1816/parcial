import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiFilmsService {

  constructor(private http: HttpClient ) { }

  getAllFilms(){
    //https://swapi.py4e.com/api/films/
    return this.http.get('https://swapi.py4e.com/api/films/');
  }
}
