import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowncardComponent } from './dropdowncard.component';

describe('DropdowncardComponent', () => {
  let component: DropdowncardComponent;
  let fixture: ComponentFixture<DropdowncardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdowncardComponent]
    });
    fixture = TestBed.createComponent(DropdowncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
