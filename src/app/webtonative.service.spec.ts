import { TestBed } from '@angular/core/testing';

import { WebtonativeService } from './webtonative.service';

describe('WebtonativeService', () => {
  let service: WebtonativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebtonativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
