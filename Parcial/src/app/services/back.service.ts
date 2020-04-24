import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get('http://localhost:3000/users');
  }
}
