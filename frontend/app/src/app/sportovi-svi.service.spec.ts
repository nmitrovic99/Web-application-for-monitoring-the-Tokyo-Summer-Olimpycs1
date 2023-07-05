import { TestBed } from '@angular/core/testing';

import { SportoviSviService } from './sportovi-svi.service';

describe('SportoviSviService', () => {
  let service: SportoviSviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportoviSviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
