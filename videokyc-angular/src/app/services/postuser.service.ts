import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL=['https://localhost:8080'];

@Injectable({
  providedIn: 'root'
})
export class PostuserService {

  constructor(private http: HttpClient) { }

  postUser(user:any): Observable<any>{
    return this.http.post(BASE_URL + '/userdata/add',user);
  }

  getUser(): Observable<any>{
    return this.http.get(BASE_URL+'userdata/add')
  }

  
}
