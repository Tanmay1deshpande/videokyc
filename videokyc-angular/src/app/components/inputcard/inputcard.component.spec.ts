import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcardComponent } from './inputcard.component';

describe('InputcardComponent', () => {
  let component: InputcardComponent;
  let fixture: ComponentFixture<InputcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputcardComponent]
    });
    fixture = TestBed.createComponent(InputcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
