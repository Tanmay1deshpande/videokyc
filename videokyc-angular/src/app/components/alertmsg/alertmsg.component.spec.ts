import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmsgComponent } from './alertmsg.component';

describe('AlertmsgComponent', () => {
  let component: AlertmsgComponent;
  let fixture: ComponentFixture<AlertmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertmsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
