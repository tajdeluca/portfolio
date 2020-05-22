import { TestBed } from '@angular/core/testing';

import { BodyRouteClassService } from './body-route-class.service';

describe('BodyRouteClassService', () => {
  let service: BodyRouteClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyRouteClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
