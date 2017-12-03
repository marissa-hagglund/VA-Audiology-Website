import { TestBed, inject } from '@angular/core/testing';

import { TfiDataService } from './tfi-data.service';

describe('TfiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TfiDataService]
    });
  });

  it('should be created', inject([TfiDataService], (service: TfiDataService) => {
    expect(service).toBeTruthy();
  }));
});
