import { TestBed } from '@angular/core/testing';

import { TakmicenjaService } from './takmicenja.service';

describe('TakmicenjaService', () => {
  let service: TakmicenjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakmicenjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
