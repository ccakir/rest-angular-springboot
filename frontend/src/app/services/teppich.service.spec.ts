import { TestBed } from '@angular/core/testing';

import { TeppichService } from './teppich.service';

describe('TeppichService', () => {
  let service: TeppichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeppichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
