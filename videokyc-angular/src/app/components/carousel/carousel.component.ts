import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild('carouselWrapper')
  carouselWrapper!: ElementRef;


  carouselContent = [
    {iconName:'money',text:'Fulfilling Compliance & Conscience'},
    {iconName:'help' , text:'Helping Millions in banking'},
    {iconName:'beenhere', text:'Promoting a Culture of Care & Empathy'},
    {iconName:'grade' , text:'Built on a foundation of Trustworthiness'},
    {iconName:'check' , text: 'Leading to a future of Digital India'},
    {iconName:'spa' , text:'Fostering a swift and efficient kyc process'}
  ]; // Static text items

  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.moveRight();
    },2000); // 8 seconds interval
  }

  stopCarousel() {
    clearInterval(this.interval);
  }

  moveRight() {
    this.currentIndex = (this.currentIndex === this.carouselContent.length - 1) ? 0 : this.currentIndex + 1;
  }

  // ngAfterViewInit(): void {
  //   // Calculate and set width of carousel wrapper
  //   const wrapperWidth = this.carouselWrapper.nativeElement.offsetWidth;
  //   const itemWidth = 25; // Adjust based on your item width
  //   this.carouselWrapper.nativeElement.style.width = (this.carouselContent.length * itemWidth) + 'vw';
  // }

}
