import { Component } from '@angular/core';

@Component({
  selector: 'app-flowitem',
  templateUrl: './flowitem.component.html',
  styleUrls: ['./flowitem.component.css']
})
export class FlowitemComponent {

  flowlist=[ 
    {flowIcon: 'login', flowTitle: 'Login'},
    {flowIcon: 'person', flowTitle: 'Personal Details'},
    {flowIcon: 'location_on', flowTitle: 'Location'},
    {flowIcon: 'credit_card', flowTitle: 'PAN Card'},
    {flowIcon: 'lock', flowTitle: 'DigiLocker'},
    {flowIcon: 'face', flowTitle: 'Facematch'},
    {flowIcon: 'report', flowTitle: 'KYC Report'},
  ]

}
