import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable <any>{
    return this.http.get('https://reqres.in/api/users?page=2');
   }
}
