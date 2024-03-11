import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowncard',
  templateUrl: './dropdowncard.component.html',
  styleUrls: ['./dropdowncard.component.css']
})
export class DropdowncardComponent {
  @ViewChild(CdkPortal) portal: CdkPortal;
  
  constructor(private overlay: Overlay){}

  openModal(){
    const overlayRef = this.overlay.create();
    overlayRef.attach(this.portal);
  }
  
}
