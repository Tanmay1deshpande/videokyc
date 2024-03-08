import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { VkycComponent } from './page/vkyc/vkyc.component';
import { SignupComponent } from './page/signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo:'signup', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vkyc', component: VkycComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
