import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowinfopageComponent } from './flowinfopage.component';

describe('FlowinfopageComponent', () => {
  let component: FlowinfopageComponent;
  let fixture: ComponentFixture<FlowinfopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowinfopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowinfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
