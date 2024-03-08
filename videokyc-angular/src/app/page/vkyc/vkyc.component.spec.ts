import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkycComponent } from './vkyc.component';

describe('VkycComponent', () => {
  let component: VkycComponent;
  let fixture: ComponentFixture<VkycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VkycComponent]
    });
    fixture = TestBed.createComponent(VkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
