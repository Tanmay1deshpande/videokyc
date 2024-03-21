import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Get service for IP address 
export class IpaddressService {

  constructor(private http: HttpClient) { }

  ipapirurl = "https://ipapi.co/json";

  getIp(): Observable<any>{
    return this.http.get(this.ipapirurl);
  }


}
