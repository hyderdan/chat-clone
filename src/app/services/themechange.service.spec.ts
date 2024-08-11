import { TestBed } from '@angular/core/testing';

import { ThemechangeService } from './themechange.service';

describe('ThemechangeService', () => {
  let service: ThemechangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemechangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
