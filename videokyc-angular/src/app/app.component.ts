import { Component } from '@angular/core';
import { IpaddressService } from './services/ipaddress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videokyc-angular';

  ip='';
  constructor(private ipaddressService: IpaddressService){
    this.ipaddressService.getIp().subscribe((data:any) =>{
      console.log(data)
      this.ip = data.ip;
    })
  }
}
