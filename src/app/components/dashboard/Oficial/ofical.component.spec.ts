import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficalComponent } from './ofical.component';

describe('OficalComponent', () => {
  let component: OficalComponent;
  let fixture: ComponentFixture<OficalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
