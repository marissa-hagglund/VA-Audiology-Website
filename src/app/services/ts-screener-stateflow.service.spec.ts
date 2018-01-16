import { TestBed, inject } from '@angular/core/testing';

import { TsScreenerStateflowService } from './ts-screener-stateflow.service';
import { TsScreenerDataService } from './ts-screener-data.service';

describe('TsScreenerStateflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsScreenerStateflowService, TsScreenerDataService]
    });
  });

  it('should be created', inject([TsScreenerStateflowService], (service: TsScreenerStateflowService) => {
    expect(service).toBeTruthy();
  }));
});
