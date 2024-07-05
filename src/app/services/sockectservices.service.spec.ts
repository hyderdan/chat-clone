import { TestBed } from '@angular/core/testing';

import { SockectservicesService } from './sockectservices.service';

describe('SockectservicesService', () => {
  let service: SockectservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SockectservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
