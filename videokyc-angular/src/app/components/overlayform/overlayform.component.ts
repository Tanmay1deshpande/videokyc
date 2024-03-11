import { Component } from '@angular/core';

@Component({
  selector: 'app-overlayform',
  templateUrl: './overlayform.component.html',
  styleUrls: ['./overlayform.component.css']
})
export class OverlayformComponent {

  steps = [
  {step:'Personal Details', stepno:'Step 2',id :'s2'},
  {step:'Location', stepno:'Step 3',id :'s3'},
  {step:'Liveliness', stepno:'Step 4',id :'s4'},
  {step:'PAN Card', stepno:'Step 5',id :'s5'},
  {step:'DigiLocker', stepno:'Step 6',id :'s6'},
  {step:'Face Match', stepno:'Step 7',id :'s7'},
  {step:'NA', id:'s9', stepno:'Step 8'}
]
  someExpression: null;
  constructor(){
    this.someExpression = null;
  }

  
}
