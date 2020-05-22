import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayTaxisComponent } from './holiday-taxis.component';

describe('HolidayTaxisComponent', () => {
  let component: HolidayTaxisComponent;
  let fixture: ComponentFixture<HolidayTaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayTaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayTaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
