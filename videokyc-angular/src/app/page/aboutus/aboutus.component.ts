import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  aboutUsTop=[
    {title:'About Us',
     paragraph:'Jio VCIP (Video-based Customer Identification Process) is as the name suggests at it\'s core, a Video KYC (Know Your Customer) application. We are a part of the Jio DigiGov team which plays an integral role in shaping and growing Jio\'s business in the Government sector.',
     imgSrc:'https://jep-asset.akamaized.net/cms/assets/jfs/about/jfs-about-mainbanner.webp'}
  ]

  aboutUsContent = [
    {title:'Our Vision',
      paragraph:'At Jio VCIP, we envision a future where every citizen experiences seamless access to essential services, fostering a society that thrives on inclusivity, efficiency, and empowerment. Our vision is to revolutionize public service delivery by harnessing innovation, technology, and citizen-centric approaches to create a more accessible, transparent, and responsive government.',
        imgSrc:'https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp'},

    {title:'Target Audience',
      paragraph:'Our services are tailored to meet the needs of common citizens indulging in the banking sector. Whether you\'re a adolescent kid or a highly accomplished retired senior citizen, we\'re here to support you on your journey.',
        imgSrc:"https://jep-asset.akamaized.net/cms/assets/jfs/home/about-jio-finance-desk2.webp"},

    {title:'Achievements & Awards',
      paragraph:"We are proud to have received recognition for our commitment to excellence. From [list of awards or achievements], our dedication to quality and innovation shines through.",
        imgSrc:"https://jep-asset.akamaized.net/cms/assets/jfs/about/jfs-about-mainbanner.webp"},

    {title:'Partnerships & collaborations',
      paragraph:"Collaboration is key to our success. We partner with [list of partners or collaborators] to leverage expertise and resources, driving innovation and creating value for our clients.",
        imgSrc:"https://jep-asset.akamaized.net/cms/assets/jfs/about/vis-2.webp"},
  ]


}