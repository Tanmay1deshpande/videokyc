import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostuserService } from 'src/app/services/postuser.service';


@Component({
  selector: 'app-vkyc',
  templateUrl: './vkyc.component.html',
  styleUrls: ['./vkyc.component.css']
})
export class VkycComponent implements AfterViewInit{

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

  constructor(private postuserService: PostuserService, private router: Router){}

  ngOnInit(){
    this.getAllData();
  }

  latestRecord:any=[];

  getAllData(){
    this.postuserService.getUser().subscribe((data)=>{
      console.log(data);
      this.latestRecord = data;
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
  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoPlayer.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }

  }
}

