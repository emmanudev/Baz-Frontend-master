import { TestBed } from '@angular/core/testing';

import { VictimaService } from './victima.service';

describe('VictimaService', () => {
  let service: VictimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
