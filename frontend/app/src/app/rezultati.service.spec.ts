import { TestBed } from '@angular/core/testing';

import { RezultatiService } from './rezultati.service';

describe('RezultatiService', () => {
  let service: RezultatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezultatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
