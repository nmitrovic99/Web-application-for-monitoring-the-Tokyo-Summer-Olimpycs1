import { TestBed } from '@angular/core/testing';

import { MecService } from './mec.service';

describe('MecService', () => {
  let service: MecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
