import { TestBed, inject } from '@angular/core/testing';

import { TsScreenerStateflowService } from './ts-screener-stateflow.service';

describe('TsScreenerStateflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsScreenerStateflowService]
    });
  });

  it('should be created', inject([TsScreenerStateflowService], (service: TsScreenerStateflowService) => {
    expect(service).toBeTruthy();
  }));
});
