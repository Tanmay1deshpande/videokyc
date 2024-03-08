import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowitemComponent } from './flowitem.component';

describe('FlowitemComponent', () => {
  let component: FlowitemComponent;
  let fixture: ComponentFixture<FlowitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowitemComponent]
    });
    fixture = TestBed.createComponent(FlowitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
