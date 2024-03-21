import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL=['http://localhost:8080'];
// const TEST_URL=['http://localhost:'];

@Injectable({
  providedIn: 'root'
})

//Get and Post Service for user login
export class LoginuserService {

  constructor(private http: HttpClient) { }

  postUser(user:any): Observable<any>{
    return this.http.post(BASE_URL + '/userdata/add',user);
  }

  getUser(): Observable<any>{
    return this.http.get(BASE_URL+'/userdata/getall')
  }
  
}

