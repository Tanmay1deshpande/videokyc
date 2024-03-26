import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnmoreComponent } from './learnmore.component';

describe('LearnmoreComponent', () => {
  let component: LearnmoreComponent;
  let fixture: ComponentFixture<LearnmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnmoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
