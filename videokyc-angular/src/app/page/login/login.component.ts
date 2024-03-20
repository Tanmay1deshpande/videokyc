import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostuserService } from 'src/app/services/postuser.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertmsgComponent } from 'src/app/components/alertmsg/alertmsg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  postUserForm!: FormGroup;
  showError: boolean = false;
  
  constructor(private postuserService: PostuserService, private fb: FormBuilder, private router: Router, private matDialog: MatDialog){}
 
  ngOnInit(){
    this.postUserForm = this.fb.group({
      username:['', [Validators.required]],
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  postUserData(){
    this.postuserService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

  onsubmit(){
    console.log(this.postUserForm);
    if(this.postUserForm.invalid){
      this.openDialog();
      return;
      
    }else{
      this.router.navigate(['/home'])
    }
  }

  openDialog(){
    this.matDialog.open(AlertmsgComponent,{
      width: '350px'
    })
  }

}
