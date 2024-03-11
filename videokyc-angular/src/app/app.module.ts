import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { VkycComponent } from './page/vkyc/vkyc.component';
import { FormsModule } from '@angular/forms';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FlowitemComponent } from './components/flowitem/flowitem.component';
import { DropdowncardComponent } from './components/dropdowncard/dropdowncard.component';
import { InputcardComponent } from './components/inputcard/inputcard.component';
import { OverlayformComponent } from './components/overlayform/overlayform.component';
import { DatacardComponent } from './components/datacard/datacard.component';
import { JourneyComponent } from './page/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VkycComponent,
    HomenavbarComponent,
    FlowitemComponent,
    DropdowncardComponent,
    InputcardComponent,
    OverlayformComponent,
    DatacardComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
