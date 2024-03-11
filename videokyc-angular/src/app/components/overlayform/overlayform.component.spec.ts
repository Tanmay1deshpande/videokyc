import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayformComponent } from './overlayform.component';

describe('OverlayformComponent', () => {
  let component: OverlayformComponent;
  let fixture: ComponentFixture<OverlayformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayformComponent]
    });
    fixture = TestBed.createComponent(OverlayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
