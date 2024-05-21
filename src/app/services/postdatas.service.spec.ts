import { TestBed } from '@angular/core/testing';

import { PostdatasService } from './postdatas.service';

describe('PostdatasService', () => {
  let service: PostdatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostdatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
