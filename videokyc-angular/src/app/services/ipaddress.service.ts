import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpaddressService {

  constructor(private http: HttpClient) { }

  getIp(){
    return this.http.get("https://ipapi.co/json")
  }


}
