import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoUniversityPartnershipsComponent } from './into-university-partnerships.component';

describe('IntoUniversityPartnershipsComponent', () => {
  let component: IntoUniversityPartnershipsComponent;
  let fixture: ComponentFixture<IntoUniversityPartnershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoUniversityPartnershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoUniversityPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
