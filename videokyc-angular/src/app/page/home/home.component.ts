import { Component, OnInit } from '@angular/core';
import { IpaddressService } from 'src/app/services/ipaddress.service';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ip='';
  constructor(private ipaddressService: IpaddressService, private postuserService: PostuserService){
    this.ipaddressService.getIp().subscribe((data:any) =>{
      console.log(data.ip,data.country)
      this.ip = data.ip;
    })
  }
  ngOnInit(): void {
    this.getLoginInfo();
  }

  logininfo: any = [];
  getLoginInfo() {
    this.postuserService.getUser().subscribe(data => {
      console.log(data);
      this.logininfo = data;
    });
  }

}
