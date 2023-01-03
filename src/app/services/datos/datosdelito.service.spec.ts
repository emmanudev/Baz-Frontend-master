import { TestBed } from '@angular/core/testing';

import { DatosdelitoService } from './datosdelito.service';

describe('DatosdelitoService', () => {
  let service: DatosdelitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosdelitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
