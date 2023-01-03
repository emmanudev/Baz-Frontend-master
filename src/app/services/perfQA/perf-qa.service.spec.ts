import { TestBed } from '@angular/core/testing';

import { PerfQAService } from './perf-qa.service';

describe('PerfQAService', () => {
  let service: PerfQAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfQAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
