import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL=['http://localhost:8080'];


@Injectable({
  providedIn: 'root'
})

//Get and Post Service for partner solution form including business description and steps
export class StepsformService {

  constructor(private http: HttpClient) { }

  getChoice(): Observable<any>{
    return this.http.get(BASE_URL+'/api/form/getall')
  }

  postChoice(choice:any): Observable<any>{
    return this.http.post(BASE_URL+'/api/form/submit',choice);
  }

}
