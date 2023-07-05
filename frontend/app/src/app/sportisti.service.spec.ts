import { TestBed } from '@angular/core/testing';

import { SportistiService } from './sportisti.service';

describe('SportistiService', () => {
  let service: SportistiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportistiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
