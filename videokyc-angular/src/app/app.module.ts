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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FlowitemComponent } from './components/flowitem/flowitem.component';
import { DropdowncardComponent } from './components/dropdowncard/dropdowncard.component';
import { InputcardComponent } from './components/inputcard/inputcard.component';
import { OverlayformComponent } from './components/overlayform/overlayform.component';
import { DatacardComponent } from './components/datacard/datacard.component';
import { JourneyComponent } from './page/journey/journey.component';
import { AlertmsgComponent } from './components/alertmsg/alertmsg.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { FooterComponent } from './components/footer/footer.component';
import { LearnmoreComponent } from './components/learnmore/learnmore.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SolutionsComponent } from './page/solutions/solutions.component';
import { GrowbusinessComponent } from './components/growbusiness/growbusiness.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';


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
    JourneyComponent,
    AlertmsgComponent,
    FooterComponent,
    LearnmoreComponent,
    CarouselComponent,
    SolutionsComponent,
    GrowbusinessComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconButton
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
