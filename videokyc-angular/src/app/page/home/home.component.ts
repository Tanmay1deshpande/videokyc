import { Component, OnInit } from '@angular/core';
import { IpaddressService } from 'src/app/services/ipaddress.service';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ip!: string;
  constructor(private ipaddressService: IpaddressService, private postuserService: PostuserService){
    this.ipaddressService.getIp().subscribe((data:any) =>{
      console.log(data.ip,data.country)
      this.ip = data.ip;
    })
  }
  ngOnInit(): void {
    this.getLoginInfo();
  }

  logininfo:[]=[];

  latestRecord:any;

  
  getLoginInfo() {
    this.postuserService.getUser().subscribe(records => {
      let latestTimestamp = 0;
        let latestRecordIndex = -1;
 
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          if (record.timestamp > latestTimestamp) {
            latestTimestamp = record.timestamp;
            latestRecordIndex = i;
          }
        }
 
        if (latestRecordIndex !== -1) {
          this.latestRecord = records[latestRecordIndex];
        } else {
          console.error('No records found or invalid response:', records);
        }
  })
}
}
