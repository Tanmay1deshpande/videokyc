import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})

@Injectable()
export class ContactusComponent {

  contactUsCardContent=[
    {icon:"chat", title:"Chat to Sales",para:"Speak to our friendly team",link:"vcipsales@ril.com"},
    {icon:"contact_mail", title:"Chat to Support",para:"We\'re here to help",link:"vcipsupport@ril.com"},
    {icon:"location_on", title:"Visit Us",para:"Visit our Office HQ",link:"View on Google Maps"},
    {icon:"phone", title:"Call Us",para:"Monday-Friday: 9am-6pm",link:"+919112212121"},
  ]

  //emailRecipient='';

  // openGmail() {
    
  //   const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${this.emailRecipient}`;

    
  //   window.location.href = mailtoLink;
  // }

}
