import { Component } from '@angular/core';
import { IpaddressService } from 'src/app/services/ipaddress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  ip='';
  constructor(private ipaddressService: IpaddressService){
    this.ipaddressService.getIp().subscribe((data:any) =>{
      console.log(data)
      this.ip = data.ip;
    })
  }

  
}
