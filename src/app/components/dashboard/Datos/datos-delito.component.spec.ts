import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDelitoComponent } from './datos-delito.component';

describe('DatosDelitoComponent', () => {
  let component: DatosDelitoComponent;
  let fixture: ComponentFixture<DatosDelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
