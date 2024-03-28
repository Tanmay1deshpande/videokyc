import { Component } from '@angular/core';

@Component({
  selector: 'app-flowinfopage',
  templateUrl: './flowinfopage.component.html',
  styleUrl: './flowinfopage.component.css'
})
export class FlowinfopageComponent {

  flowinfoContent=[
    {icon: "video_call",title:"VKYC",para:"vKYC (video KYC) or video identification is an online face-to-face identity verification method. Here, a member is required to submit the identity documents digitally and answer a few questions asked by the agent over a video call."},
    {icon: "login",title:"Login",para:"The Customer needs to login with the correct credentials to access the VKYC platform through the respective vendors. A successful Login requires a valid username and password"},
    {icon: "person",title:"Personal Details",para:"As indicated in the initial steps after logging in, customer has to fill his/her personal details so that the official can later match them with the fetched aadhar card and partly confirm their identity"},
    {icon: "location_on",title:"Location",para:"Checking the Location of the user is a mandatory functionality as RBI guidelines strictly mentions that VCIP should only be carried out for Indian nationals currently residing in India."},
    {icon: "credit_card",title:"PAN Card",para:"PAN card verification is an important process in the banking sector as PAN card is used for identification quite frequently. PAN card verification is done by capturing an image of the PAN card and then implementing OCR(Object Character Recognition) on it. The Agent then checks the OCR output and makes changes if and when required."},
    {icon: "lock",title:"DigiLocker",para:"Digilocker integration is needed to fetch the customers Aadhar card details so that the current personal details filled in by the customer can be efficiently tallied with those in the digilocker"},
    {icon: "face",title:"Face Match",para:"The agent requests the customer to sit still and place their face in an oval overlay defined to fit a face. The agent then captures that image and the system verifies it with the one from the Aadhar card and also from the PAN card."},
    {icon: "report",title:"KYC Report",para:"After successful completion of all the above steps, the system generates a comprehensive KYC report that is then approved by the agent and subsequently sent to the auditor portal for auditor approval. Where the auditor approves your KYC report. Congratulations! You have successfully completed your Video-based Customer Identification Process."},

  ]

}
