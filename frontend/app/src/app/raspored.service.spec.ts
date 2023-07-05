import { TestBed } from '@angular/core/testing';

import { RasporedService } from './raspored.service';

describe('RasporedService', () => {
  let service: RasporedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasporedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
