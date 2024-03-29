import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { StepsformService } from 'src/app/services/stepsform.service';


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

  constructor(private stepsformService: StepsformService, private router: Router){}

  ngOnInit(){
    this.getAllData();
  }

  latestRecord:any=[];

  //method to fetch all data from database of partner solution form
  getAllData(){
    this.stepsformService.getChoice().subscribe((records)=>{
      console.log(records);
      this.latestRecord = records;
    });

  //     let latestTimestamp = 0;
  //       let latestRecordIndex = -1;
 
  //       for (let i = 0; i < records.length; i++) {
  //         const record = records[i];
  //         if (record.timestamp > latestTimestamp) {
  //           latestTimestamp = record.timestamp;
  //           latestRecordIndex = i;
  //         }
  //       }
 
  //       if (latestRecordIndex !== -1) {
  //         this.latestRecord = records[latestRecordIndex];
  //       } else {
  //         console.error('No records found or invalid response:', records);
  //       }
  // })
  }

  //Camera output
  // @ViewChild('videoPlayer')
  // videoPlayer!: ElementRef;

  // async ngAfterViewInit() {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //     this.videoPlayer.nativeElement.srcObject = stream;
  //   } catch (error) {
  //     console.error('Error accessing camera:', error);
  //   }

  // }
}

