import { Component } from '@angular/core';

@Component({
  selector: 'app-growbusiness',
  templateUrl: './growbusiness.component.html',
  styleUrl: './growbusiness.component.css'
})
export class GrowbusinessComponent {

  growbusinesssteps=[
    {rank:'1',title:'Sign Up', desc:'Join Jio VCIP at no cost to build, market, sell and grow your business'},
    {rank:'2',title:'Choose Your Path', desc:'Customize VCIP flow as per your needs'},
    {rank:'3',title:'Help Millions', desc:'Let our product help millions of people through you'},
    {rank:'4',title:'Achieve Recognition', desc:'Establish yourself globally as one of the best in the business'}
  ]

}
