import { TestBed, inject } from '@angular/core/testing';

import { ThsStateflowService } from './ths-stateflow.service';
import { ThsDataService } from './ths-data.service';

describe('ThsStateflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThsStateflowService, ThsDataService]
    });
  });

  it('should be created', inject([ThsStateflowService], (service: ThsStateflowService) => {
    expect(service).toBeTruthy();
  }));
});
