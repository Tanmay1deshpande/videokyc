import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostuserService } from 'src/app/services/postuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  postUserForm!: FormGroup;

  constructor(private postuserService: PostuserService, private fb: FormBuilder){}

  ngOnInit(){
    this.postUserForm = this.fb.group({
      username:[null, [Validators.required]],
      email:[null, [Validators.required,Validators.email]],
      password:[null, [Validators.required]]
    })
  }

  postUserData(){
    console.log(this.postUserForm.value);
    this.postuserService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }


}
