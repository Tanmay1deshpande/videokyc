import { Component } from '@angular/core';

@Component({
  selector: 'app-vkyc',
  templateUrl: './vkyc.component.html',
  styleUrls: ['./vkyc.component.css']
})
export class VkycComponent {

  stepslist = [
    {step:'Login', val:'s1'},
    {step:'Personal Details', val:'s2'},
    {step:'Location', val:'s3'},
    {step:'PAN Card', val:'s4'},
    {step:'DigiLocker', val:'s5'},
    {step:'Face Match', val:'s6'},
    {step:'KYC report', val:'s7'}
  ]


}
