import { TestBed, inject } from '@angular/core/testing';

import { TsScreenerDataService } from './ts-screener-data.service';

describe('TsScreenerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsScreenerDataService]
    });
  });

  it('should be created', inject([TsScreenerDataService], (service: TsScreenerDataService) => {
    expect(service).toBeTruthy();
  }));
});
