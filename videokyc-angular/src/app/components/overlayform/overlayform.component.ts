import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostuserService } from 'src/app/services/postuser.service';

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
  constructor(private postuserService: PostuserService, private fb: FormBuilder){
    this.someExpression = null;
  }


  postChoiceForm!: FormGroup;

  ngOnInit(){
    this.postChoiceForm = this.fb.group({
      businessdesc : [null,Validators.required],
      step1 : [null,Validators.required],
      step2 : [null,Validators.required],
      step3 : [null,Validators.required],
      step4 : [null,Validators.required],
      step5 : [null,Validators.required],
      step6 : [null,Validators.required],
      step7 : [null,Validators.required],
      step8 : [null,Validators.required]
    })
  }

  postChoiceData(){
    console.log(this.postChoiceForm.value);
    this.postuserService.postChoice(this.postChoiceForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
  
}
