import { TestBed } from '@angular/core/testing';

import { PostuserService } from './postuser.service';

describe('PostuserService', () => {
  let service: PostuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
