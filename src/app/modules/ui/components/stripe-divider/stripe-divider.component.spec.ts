import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeDividerComponent } from './stripe-divider.component';

describe('StripeDividerComponent', () => {
  let component: StripeDividerComponent;
  let fixture: ComponentFixture<StripeDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
