import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostuserService } from 'src/app/services/postuser.service';
import { AlertmsgComponent } from '../alertmsg/alertmsg.component';
import { MatDialog } from '@angular/material/dialog';

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
  
  constructor(private postuserService: PostuserService, private fb: FormBuilder, private router: Router, private matDialog: MatDialog){}

  postChoiceForm!: FormGroup;

  ngOnInit(){
    this.postChoiceForm = this.fb.group({
      business_Description:[null,[Validators.required]],
      step1:[null,[Validators.required]],
      step2:[null,[Validators.required]],
      step3:[null,[Validators.required]],
      step4:[null,[Validators.required]],
      step5:[null,[Validators.required]],
      step6:[null,[Validators.required]],
      step7:[null,[Validators.required]]
    })
  }

  postChoiceData(){
    console.log(this.postChoiceForm.value);
    this.postuserService.postChoice(this.postChoiceForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  onsubmit(){
    console.log(this.postChoiceForm);
    if(this.postChoiceForm.invalid){
      this.openDialog();
      return;
      
    }else{
      this.router.navigate(['/vkyc'])
    }
  }

  openDialog(){
    this.matDialog.open(AlertmsgComponent,{
      width: '350px'
    })
  }
  
}
