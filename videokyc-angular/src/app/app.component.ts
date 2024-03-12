import { Component, OnInit } from '@angular/core';
import { IpaddressService } from './services/ipaddress.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { }
  
  title = 'videokyc-angular';

  ngOnInit(): void {
    this.router.events.subscribe((event) =>{
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0)
    })
  }
  
}
