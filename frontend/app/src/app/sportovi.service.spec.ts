import { TestBed } from '@angular/core/testing';

import { SportoviService } from './sportovi.service';

describe('SportoviService', () => {
  let service: SportoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
