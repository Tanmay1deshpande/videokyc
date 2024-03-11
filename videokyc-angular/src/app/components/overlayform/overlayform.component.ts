import { Component } from '@angular/core';

@Component({
  selector: 'app-overlayform',
  templateUrl: './overlayform.component.html',
  styleUrls: ['./overlayform.component.css']
})
export class OverlayformComponent {
  stepsandid =[
    {step:'Step 2',id :'s2'},
    {step:'Step 3',id :'s3'},
    {step:'Step 4',id :'s4'},
    {step:'Step 5',id :'s5'},
    {step:'Step 6',id :'s6'},
  ]

  steps = [
  {step:'Personal Details', val:'s2'},
  {step:'Location', val:'s3'},
  {step:'PAN Card', val:'s4'},
  {step:'DigiLocker', val:'s5'},
  {step:'Face Match', val:'s6'},
  {step:'NA', val:'s7'}
]
}
