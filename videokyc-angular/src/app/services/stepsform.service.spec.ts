import { TestBed } from '@angular/core/testing';

import { StepsformService } from './stepsform.service';

describe('StepsformService', () => {
  let service: StepsformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
