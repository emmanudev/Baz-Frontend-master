import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetenidoComponent } from './detenido.component';

describe('DetenidoComponent', () => {
  let component: DetenidoComponent;
  let fixture: ComponentFixture<DetenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
