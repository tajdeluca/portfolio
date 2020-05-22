import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwtDigitalComponent } from './cwt-digital.component';

describe('CwtDigitalComponent', () => {
  let component: CwtDigitalComponent;
  let fixture: ComponentFixture<CwtDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwtDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwtDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
