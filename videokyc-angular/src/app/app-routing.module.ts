import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { VkycComponent } from './page/vkyc/vkyc.component';
import { SignupComponent } from './page/signup/signup.component';
//import { OverlayformComponent } from './components/overlayform/overlayform.component';
import { JourneyComponent } from './page/journey/journey.component';
import { SolutionsComponent } from './page/solutions/solutions.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { BecomepartnerComponent } from './page/becomepartner/becomepartner.component';
import { ContactusComponent } from './page/contactus/contactus.component';
import { FlowinfopageComponent } from './page/flowinfopage/flowinfopage.component';

const routes: Routes = [

  //Routing paths
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vkyc', component: VkycComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'partnersignup', component: BecomepartnerComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'flowinfo', component: FlowinfopageComponent },
  { path: '**', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
