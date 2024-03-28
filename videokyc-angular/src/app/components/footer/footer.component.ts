import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor() { }

  openWebsite(websiteUrl: string) {
    window.open(websiteUrl, '_blank'); // Open the website in a new tab
  }

}
