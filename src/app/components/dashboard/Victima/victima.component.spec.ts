import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimaComponent } from './victima.component';

describe('VictimaComponent', () => {
  let component: VictimaComponent;
  let fixture: ComponentFixture<VictimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
