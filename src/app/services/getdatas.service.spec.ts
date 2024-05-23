import { TestBed } from '@angular/core/testing';

import { GetdatasService } from './getdatas.service';

describe('GetdatasService', () => {
  let service: GetdatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
