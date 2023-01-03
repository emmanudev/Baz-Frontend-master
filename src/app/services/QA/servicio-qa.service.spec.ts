import { TestBed } from '@angular/core/testing';

import { QAService } from './servicio-qa.service';

describe('ServicioQAService', () => {
  let service: QAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
