import { TestBed } from '@angular/core/testing';

import { OficialService } from './oficial.service';

describe('OficialService', () => {
  let service: OficialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OficialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
