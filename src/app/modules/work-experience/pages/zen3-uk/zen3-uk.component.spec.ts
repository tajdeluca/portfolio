import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zen3UkComponent } from './zen3-uk.component';

describe('Zen3UkComponent', () => {
  let component: Zen3UkComponent;
  let fixture: ComponentFixture<Zen3UkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zen3UkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zen3UkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
