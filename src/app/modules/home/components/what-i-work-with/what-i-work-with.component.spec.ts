import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIWorkWithComponent } from './what-i-work-with.component';

describe('WhatIWorkWithComponent', () => {
  let component: WhatIWorkWithComponent;
  let fixture: ComponentFixture<WhatIWorkWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIWorkWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
