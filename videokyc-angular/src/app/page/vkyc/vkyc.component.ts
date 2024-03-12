import { Component } from '@angular/core';
import { PostuserService } from 'src/app/services/postuser.service';

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

  data: any[] = [];

  constructor(private postuserService: PostuserService){}

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.postuserService.getUser().subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }

}
