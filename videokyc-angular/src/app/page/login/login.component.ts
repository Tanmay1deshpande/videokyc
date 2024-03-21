import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertmsgComponent } from 'src/app/components/alertmsg/alertmsg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  postUserForm!: FormGroup;
  
  constructor(private loginuserService: LoginuserService, private fb: FormBuilder, private router: Router, private matDialog: MatDialog){}
 
  ngOnInit(){
    //form validators
    this.postUserForm = this.fb.group({
      username:['', [Validators.required]],
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  //method to post user login details 
  postUserData(){
    this.loginuserService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  //Method to open error dialog or move user to home page
  onsubmit(){
    console.log(this.postUserForm);
    if(this.postUserForm.invalid){
      this.openDialog();
      return;
      
    }else{
      this.router.navigate(['/home'])
    }
  }

  //function to open alert dialog box if user enters wrong details
  openDialog(){
    this.matDialog.open(AlertmsgComponent,{
      width: '350px'
    })
  }

}
