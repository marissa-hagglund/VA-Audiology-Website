import { TestBed, inject } from '@angular/core/testing';

import { ThsStateflowService } from './ths-stateflow.service';

describe('ThsStateflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThsStateflowService]
    });
  });

  it('should be created', inject([ThsStateflowService], (service: ThsStateflowService) => {
    expect(service).toBeTruthy();
  }));
});
