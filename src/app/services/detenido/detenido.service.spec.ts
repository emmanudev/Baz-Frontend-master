import { TestBed } from '@angular/core/testing';

import { DetenidosService } from './detenido.service';

describe('DetenidoService', () => {
  let service: DetenidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetenidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
